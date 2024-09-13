import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { SectionTitle } from "@/components/SectionTitle"
import { Benefits } from "@/components/Benefits"
import { Video } from "@/components/Video"
import { Testimonials } from "@/components/Testimonials"
import { Faq } from "@/components/Faq"
import { Cta } from "@/components/Cta"
import { Navbar } from "@/components/Navbar"

import { benefitOne, benefitTwo } from "@/components/data"
export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />

        <SectionTitle
          preTitle="Watch a video"
          title="From Streets to Solutions: A Glimpse Into Our Impact"
        >
        </SectionTitle>

        <Video videoId="cmAL8VedUw0" />

        <SectionTitle preTitle="Testimonials" title="Real Stories, Real Trust">
        </SectionTitle>

        <Testimonials />

        <SectionTitle
          preTitle="FAQ"
          title="Frequently Asked Questions"
        ></SectionTitle>

        <Faq />
        <Cta />
      </Container>
    </>
  )
}
