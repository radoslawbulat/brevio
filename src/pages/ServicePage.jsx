import { useParams, useSearchParams } from 'react-router-dom'
import useLawyer from '../hooks/useLawyer'
import { getServiceById } from '../data/services'
import PasswordGate from '../components/lawyer/PasswordGate'
import TemplateSwitcher from '../components/lawyer/TemplateSwitcher'
import ServicePageElegant from '../components/lawyer/templates/ServicePageElegant'

function ServicePage() {
  const { lawyerSlug, serviceId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const lawyer = useLawyer(lawyerSlug)
  const service = getServiceById(serviceId)

  const currentTemplate = searchParams.get('t') || 'elegant'

  const setTemplate = (templateId) => {
    setSearchParams({ t: templateId })
  }

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

  // For now, only elegant template has service pages
  // Other templates will redirect to main page
  return (
    <PasswordGate>
      <ServicePageElegant
        lawyer={lawyer}
        service={service}
        lawyerSlug={lawyerSlug}
      />
      <TemplateSwitcher
        currentTemplate={currentTemplate}
        onTemplateChange={setTemplate}
        lawyerName={lawyer.name}
      />
    </PasswordGate>
  )
}

export default ServicePage
