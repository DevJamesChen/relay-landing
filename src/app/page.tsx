import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { Pipeline } from "@/components/sections/pipeline";
import { Stats } from "@/components/sections/stats";
import { UseCases } from "@/components/sections/use-cases";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Features />
        <HowItWorks />
        <Integrations />
        <Pipeline />
        <Stats />
        <UseCases />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
