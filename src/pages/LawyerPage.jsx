import { useParams } from 'react-router-dom'
import useLawyer from '../hooks/useLawyer'
import PasswordGate from '../components/lawyer/PasswordGate'
import TemplateElegant from '../components/lawyer/templates/TemplateElegant'
import CustomizerBar from '../components/lawyer/CustomizerBar'

function LawyerPage() {
  const { lawyerSlug } = useParams()
  const lawyer = useLawyer(lawyerSlug)

  if (!lawyer) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h1>Nie znaleziono strony</h1>
        <p>Strona dla tego adwokata nie istnieje.</p>
        <a href="/" style={{ color: 'var(--color-primary)' }}>Wróć do strony głównej</a>
      </div>
    )
  }

  return (
    <PasswordGate>
      <TemplateElegant lawyer={lawyer} />
      <CustomizerBar lawyerName={lawyer.name} />
    </PasswordGate>
  )
}

export default LawyerPage
