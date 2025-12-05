import lawyers from '../data/lawyers.json'

export default function useLawyer(slug) {
  return lawyers.find(lawyer => lawyer.slug === slug) || null
}
