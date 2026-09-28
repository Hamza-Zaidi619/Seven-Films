import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkGrid from './components/WorkGrid'
import GlobalReach from './components/GlobalReach'
import BrandStrip from './components/BrandStrip'
import Services from './components/Services'
import Contact from './components/Contact'
import { siteConfig } from './data/siteData'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkGrid />
        <GlobalReach />
        <BrandStrip />
        {siteConfig.showServices && <Services />}
        {siteConfig.showUpcomingVentures && (
          <section className="section section--dark">
            <div className="container"><h2 className="display-heading display-heading--light">Upcoming ventures</h2></div>
          </section>
        )}
      </main>
      <Contact />
    </>
  )
}
