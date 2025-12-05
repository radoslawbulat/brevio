import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useLawyer from '../hooks/useLawyer'
import PasswordGate from '../components/lawyer/PasswordGate'
import TemplateSwitcher from '../components/lawyer/TemplateSwitcher'
import TemplateClassic from '../components/lawyer/templates/TemplateClassic'
import TemplateModern from '../components/lawyer/templates/TemplateModern'
import TemplateBold from '../components/lawyer/templates/TemplateBold'
import TemplateElegant from '../components/lawyer/templates/TemplateElegant'

const TEMPLATES = {
  elegant: TemplateElegant,
  classic: TemplateClassic,
  modern: TemplateModern,
  bold: TemplateBold,
}

function LawyerPage() {
  const { lawyerSlug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const lawyer = useLawyer(lawyerSlug)

  const currentTemplate = searchParams.get('t') || 'elegant'

  const setTemplate = (templateId) => {
    setSearchParams({ t: templateId })
  }

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

  const TemplateComponent = TEMPLATES[currentTemplate] || TemplateElegant

  return (
    <PasswordGate>
      <TemplateComponent lawyer={lawyer} />
      <TemplateSwitcher
        currentTemplate={currentTemplate}
        onTemplateChange={setTemplate}
        lawyerName={lawyer.name}
      />
    </PasswordGate>
  )
}

export default LawyerPage
