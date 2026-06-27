import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is Relay different from a scraper?",
    a: "A scraper hands you raw HTML that you still have to clean, chunk, tokenize, and keep fresh. Relay returns retrieval-ready Markdown with structured metadata, then keeps it in sync automatically. You get the output you actually wanted, not a pile of markup.",
  },
  {
    q: "Can I use Relay on any website?",
    a: "Yes, any public URL works out of the box, plus authenticated sources through connectors like Notion, GitHub, and Google Drive. Relay respects robots.txt and rate limits, and runs from a managed crawl fleet so you never touch proxies.",
  },
  {
    q: "What sources are supported?",
    a: "Websites, sitemaps, Notion, GitHub, Google Drive, Confluence, PDFs, RSS feeds, and S3 buckets today. New connectors ship most weeks, and you can request one from the dashboard.",
  },
  {
    q: "How fast does content sync?",
    a: "Real-time on Pro and above. Relay re-crawls only the pages that changed, so edits typically appear in your index within seconds. Hobby plans sync once a day.",
  },
  {
    q: "Do I own my data?",
    a: "Always. Your content and extracted data belong to you. Delete a source and it's purged from our systems. Enterprise plans add regional data residency and configurable retention.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes. The Hobby plan includes 1,000 pages per month, free forever, with no credit card required. Upgrade only when you outgrow it.",
  },
];

export function Faq() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions."
          description="Everything you need to know before you point Relay at your content."
        />

        <Reveal>
          <Accordion multiple={false} defaultValue={["item-0"]} className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
