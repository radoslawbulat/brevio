import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export async function generateWebsiteZip(lawyerName) {
  const zip = new JSZip()

  // Get the template element
  const templatePage = document.querySelector('[data-lawyer-template]')
  if (!templatePage) {
    throw new Error('Template not found')
  }

  // Clone the template to avoid modifying the original
  const clone = templatePage.cloneNode(true)

  // Remove React-specific attributes and clean up
  cleanupForExport(clone)

  // Get computed CSS variables
  const computedStyle = getComputedStyle(templatePage)
  const colors = {
    ink: computedStyle.getPropertyValue('--color-ink').trim() || '#1a1a1a',
    paper: computedStyle.getPropertyValue('--color-paper').trim() || '#faf8f5',
    warm: computedStyle.getPropertyValue('--color-warm').trim() || '#f5f1eb',
    accent: computedStyle.getPropertyValue('--color-accent').trim() || '#8b7355',
    accentLight: computedStyle.getPropertyValue('--color-accent-light').trim() || '#c4a77d',
    dark: computedStyle.getPropertyValue('--color-dark').trim() || '#1a1a1a',
    light: computedStyle.getPropertyValue('--color-light').trim() || '#faf8f5',
  }

  // Get current hero image src
  const heroImg = templatePage.querySelector('[data-hero-image]')
  const heroSrc = heroImg ? heroImg.src : '/hero.jpg'

  // Generate the full HTML document
  const html = generateFullHTML(clone.innerHTML, lawyerName, colors, heroSrc)
  zip.file('index.html', html)

  // Generate CSS file
  const css = generateCSS(colors)
  zip.file('styles.css', css)

  // Add README
  const readme = generateReadme(lawyerName)
  zip.file('README.md', readme)

  // Generate and download
  const blob = await zip.generateAsync({ type: 'blob' })
  const filename = lawyerName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  saveAs(blob, `${filename}-strona.zip`)
}

function cleanupForExport(element) {
  // Remove data attributes except essential ones
  const allElements = element.querySelectorAll('*')
  allElements.forEach(el => {
    // Convert React className modules to simple classes
    const classList = Array.from(el.classList)
    if (classList.length > 0) {
      // Keep class names but remove module hashes for readability
      el.className = classList.join(' ')
    }

    // Remove React-specific attributes
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('data-') && attr.name !== 'data-hero-image') {
        el.removeAttribute(attr.name)
      }
    })

    // Convert React links to regular anchors
    if (el.tagName === 'A' && el.getAttribute('href')?.startsWith('/')) {
      const href = el.getAttribute('href')
      // Convert internal links to anchor links
      if (href.includes('/uslugi/')) {
        el.setAttribute('href', '#uslugi')
      }
    }
  })

  // Remove data-lawyer-template attribute from root
  element.removeAttribute('data-lawyer-template')
}

function generateFullHTML(bodyContent, lawyerName, colors, heroSrc) {
  // Determine if hero is external URL or local
  const heroPath = heroSrc.startsWith('http') ? heroSrc : 'hero.jpg'

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${lawyerName} - Kancelaria Prawna</title>
  <meta name="description" content="Profesjonalne usługi prawne - ${lawyerName}. Kompleksowa obsługa prawna dla klientów indywidualnych i przedsiębiorców.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <style>
    :root {
      --color-ink: ${colors.ink};
      --color-paper: ${colors.paper};
      --color-warm: ${colors.warm};
      --color-accent: ${colors.accent};
      --color-accent-light: ${colors.accentLight};
      --color-dark: ${colors.dark};
      --color-light: ${colors.light};
    }
  </style>
</head>
<body>
  <div class="page">
    ${bodyContent}
  </div>

  <script>
    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[class*="reveal"]').forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  </script>
</body>
</html>
`
}

function generateCSS(colors) {
  return `/*
 * Strona wygenerowana przez Brevio - https://brevio.pl
 * Skopiuj ten plik wraz z index.html na swój serwer
 */

:root {
  --color-ink: ${colors.ink};
  --color-paper: ${colors.paper};
  --color-warm: ${colors.warm};
  --color-accent: ${colors.accent};
  --color-accent-light: ${colors.accentLight};
  --color-dark: ${colors.dark};
  --color-light: ${colors.light};
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'DM Sans', -apple-system, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background: var(--color-paper);
  color: var(--color-ink);
  line-height: 1.7;
}

/* Reveal animations */
[class*="reveal"] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

[class*="reveal"].active {
  opacity: 1;
  transform: translateY(0);
}

/* Page container */
.page {
  min-height: 100vh;
  background: var(--color-paper);
  color: var(--color-ink);
}

/* Navigation */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background: transparent;
  transition: all 0.3s ease;
}

nav.scrolled {
  background: var(--color-paper);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

nav a:first-child {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-ink);
  text-decoration: none;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2.5rem;
}

nav ul a {
  color: var(--color-ink);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

nav ul a:hover {
  color: var(--color-accent);
}

/* Hero Section */
section:first-of-type {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 8rem;
  gap: 4rem;
  background: var(--color-warm);
}

h1 {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

h1 em {
  font-style: italic;
  color: var(--color-accent);
}

h2 {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

/* Buttons */
a[class*="Primary"], button[type="submit"] {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

a[class*="Primary"]:hover, button[type="submit"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

a[class*="Secondary"] {
  color: var(--color-ink);
  text-decoration: none;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 2px solid var(--color-accent);
}

/* Services Grid */
[class*="servicesGrid"], [class*="Grid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

[class*="serviceCard"], [class*="Card"] {
  background: var(--color-paper);
  padding: 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

[class*="serviceCard"]:hover, [class*="Card"]:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Sections */
section {
  padding: 6rem 8rem;
}

/* About section */
[class*="about"] {
  background: var(--color-paper);
}

/* Features */
[class*="feature"] {
  text-align: center;
  padding: 2rem;
}

[class*="featureIcon"] svg {
  width: 48px;
  height: 48px;
  stroke: var(--color-accent);
  margin-bottom: 1.5rem;
}

/* Contact Section */
[class*="contact"] {
  background: var(--color-warm);
}

[class*="contactItem"] {
  margin-bottom: 1.5rem;
}

[class*="contactLabel"] {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}

[class*="contactValue"] a {
  color: var(--color-ink);
  text-decoration: none;
}

[class*="contactValue"] a:hover {
  color: var(--color-accent);
}

/* Form */
form {
  background: var(--color-paper);
  padding: 2.5rem;
  border-radius: 8px;
}

[class*="formGroup"] {
  margin-bottom: 1.25rem;
}

[class*="formLabel"] {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color 0.2s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

textarea {
  min-height: 120px;
  resize: vertical;
}

/* Map */
[class*="map"] {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 3rem;
}

iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Footer */
footer {
  background: var(--color-dark);
  color: var(--color-light);
  padding: 4rem 8rem 2rem;
}

footer a {
  color: var(--color-light);
  text-decoration: none;
  transition: color 0.2s ease;
}

footer a:hover {
  color: var(--color-accent);
}

footer ul {
  list-style: none;
}

footer li {
  margin-bottom: 0.75rem;
}

/* Images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

[class*="heroImage"] {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  border-radius: 8px;
}

/* Section tags */
[class*="sectionTag"], [class*="heroTag"] {
  display: inline-block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-accent);
  margin-bottom: 1rem;
  font-weight: 600;
}

/* Credentials */
[class*="credential"] {
  display: inline-block;
  margin-right: 2rem;
  margin-top: 2rem;
}

[class*="credentialValue"] {
  display: block;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
}

[class*="credentialLabel"] {
  font-size: 0.8rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Responsive */
@media (max-width: 1024px) {
  nav {
    padding: 1rem 2rem;
  }

  nav ul {
    display: none;
  }

  section {
    padding: 4rem 2rem;
  }

  section:first-of-type {
    grid-template-columns: 1fr;
    padding: 6rem 2rem 4rem;
    min-height: auto;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  [class*="aboutContainer"], [class*="contactContainer"] {
    display: block;
  }

  footer {
    padding: 3rem 2rem 1.5rem;
  }

  [class*="heroImage"] {
    height: 50vh;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
  }

  section {
    padding: 3rem 1.5rem;
  }

  [class*="servicesGrid"], [class*="Grid"] {
    grid-template-columns: 1fr;
  }
}
`
}

function generateReadme(lawyerName) {
  return `# ${lawyerName} - Strona Kancelarii

Strona wygenerowana przez [Brevio](https://brevio.pl)

## Pliki w archiwum

- \`index.html\` - główna strona (zawiera pełen kod HTML)
- \`styles.css\` - style CSS (kolory, fonty, animacje)
- \`README.md\` - ten plik z instrukcjami

## Jak używać

### Opcja 1: Prosty hosting (np. GitHub Pages, Netlify)
1. Rozpakuj archiwum
2. Dodaj swoje zdjęcie jako \`hero.jpg\` w tym samym folderze
3. Wgraj wszystkie pliki na hosting

### Opcja 2: Własny serwer
1. Rozpakuj archiwum
2. Dodaj swoje zdjęcia (\`hero.jpg\`, \`aboutme.png\`)
3. Edytuj \`index.html\` - zmień dane kontaktowe, teksty
4. Wgraj pliki przez FTP na serwer

## Co trzeba zmienić

1. **Zdjęcia** - dodaj swoje zdjęcia:
   - \`hero.jpg\` - główne zdjęcie w hero (zalecany rozmiar: 800x1200px)
   - \`aboutme.png\` - zdjęcie w sekcji "O mnie"

2. **Dane kontaktowe** - w pliku \`index.html\` znajdź i zmień:
   - Numer telefonu
   - Adres email
   - Adres kancelarii
   - Link do mapy Google

3. **Teksty** - dostosuj opisy do swojej praktyki

## Potrzebujesz pomocy z instalacją?

Oferujemy pełną instalację strony wraz z:
- Konfiguracją domeny
- Hostingiem
- Certyfikatem SSL
- Integracją z formularzem kontaktowym

Skontaktuj się: https://brevio.pl

---
Wygenerowano: ${new Date().toLocaleDateString('pl-PL')}
`
}
