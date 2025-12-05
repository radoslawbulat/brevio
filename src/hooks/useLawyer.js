import landingPages from '../data/landing-pages.json'

export default function useLawyer(slug) {
  return landingPages.find(lawyer => lawyer.slug === slug) || null
}
