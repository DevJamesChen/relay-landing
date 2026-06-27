import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { HowItWorksSteps } from "@/components/sections/how-it-works-steps";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From raw site to RAG-ready in minutes."
          description="Three steps. No crawler to maintain, no HTML to clean, no chunking pipeline to build. Click through to watch each one run."
        />

        <Reveal className="mt-14">
          <HowItWorksSteps />
        </Reveal>
      </Container>
    </section>
  );
}
