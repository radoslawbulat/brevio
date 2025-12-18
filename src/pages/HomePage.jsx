import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Problem from '../components/sections/Problem'
import About from '../components/sections/About'
import HowItWorks from '../components/sections/HowItWorks'
import Features from '../components/sections/Features'
import Pricing from '../components/sections/Pricing'
import CTA from '../components/sections/CTA'
import { DemoModalProvider } from '../context/DemoModalContext'

function HomeContent() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <About />
        <HowItWorks />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

function HomePage() {
  return (
    <DemoModalProvider>
      <HomeContent />
    </DemoModalProvider>
  )
}

export default HomePage
