import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import Reviews from "@/components/reviews"
import ServiceAreas from "@/components/service-areas"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
