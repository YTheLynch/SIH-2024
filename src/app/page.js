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
          title="Learn how to fullfil your needs"
        >
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate.
          So, don&apos;t forget to add one. Just like this.
        </SectionTitle>

        <Video videoId="a6KxA-kxAQ4" />

        <SectionTitle preTitle="Testimonials" title="Real Stories, Real Trust">
          Testimonials is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
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
