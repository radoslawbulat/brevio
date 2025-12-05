import Stripe from 'stripe'

export default async function handler(req, res) {
  // Initialize Stripe inside the handler to ensure env vars are loaded
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { amount, lawyerName, returnUrl } = req.body

    // Validate amount
    if (!amount || amount < 50) {
      return res.status(400).json({ error: 'Minimalna kwota to 50 zł' })
    }

    // Determine product description based on amount
    const isFullService = amount >= 1999
    const productName = isFullService
      ? `Strona dla ${lawyerName} + Instalacja`
      : `Wsparcie Brevio - Strona dla ${lawyerName}`

    const productDescription = isFullService
      ? 'Strona internetowa + profesjonalna instalacja + hosting + domena + certyfikat SSL'
      : 'Dziękujemy za wsparcie projektu Brevio! Otrzymasz pliki strony do samodzielnej instalacji.'

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'blik', 'p24'],
      line_items: [
        {
          price_data: {
            currency: 'pln',
            product_data: {
              name: productName,
              description: productDescription,
            },
            unit_amount: amount * 100, // Stripe uses grosze (cents)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin || 'https://brevio.pl'}/sukces?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'https://brevio.pl'}/anulowano?return=${encodeURIComponent(returnUrl || '/')}`,
      metadata: {
        lawyerName,
        amount: amount.toString(),
        service: isFullService ? 'full' : 'support',
      },
      // Polish locale
      locale: 'pl',
      // Allow promotion codes
      allow_promotion_codes: true,
    })

    res.status(200).json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    res.status(500).json({ error: 'Wystąpił błąd podczas tworzenia płatności', details: error.message })
  }
}
