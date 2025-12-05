import { useParams } from 'react-router-dom'
import useLawyer from '../hooks/useLawyer'
import { getServiceById } from '../data/services'
import PasswordGate from '../components/lawyer/PasswordGate'
import ServicePageElegant from '../components/lawyer/templates/ServicePageElegant'
import CustomizerBar from '../components/lawyer/CustomizerBar'

function ServicePage() {
  const { lawyerSlug, serviceId } = useParams()
  const lawyer = useLawyer(lawyerSlug)
  const service = getServiceById(serviceId)

  if (!lawyer) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}>
        <h1>Nie znaleziono strony</h1>
        <p>Strona dla tego adwokata nie istnieje.</p>
        <a href="/" style={{ color: 'var(--color-primary)' }}>Wróć do strony głównej</a>
      </div>
    )
  }

  if (!service) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}>
        <h1>Nie znaleziono usługi</h1>
        <p>Ta usługa nie istnieje.</p>
        <a href={`/${lawyerSlug}`} style={{ color: '#8b7355' }}>Wróć do strony głównej</a>
      </div>
    )
  }

  return (
    <PasswordGate>
      <ServicePageElegant
        lawyer={lawyer}
        service={service}
        lawyerSlug={lawyerSlug}
      />
      <CustomizerBar lawyerName={lawyer.name} />
    </PasswordGate>
  )
}

export default ServicePage
