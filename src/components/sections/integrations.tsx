import Image from "next/image";

import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const integrations = [
  { name: "LangChain", src: "/logos/langchain.png" },
  { name: "LlamaIndex", src: "/logos/llamaindex.png" },
  { name: "Pinecone", src: "/logos/pinecone.png" },
  { name: "Weaviate", src: "/logos/weaviate.png" },
  { name: "Chroma", src: "/logos/chroma.png" },
  { name: "pgvector", src: "/logos/pgvector.png" },
  { name: "OpenAI", src: "/logos/openai.png" },
  { name: "Supabase", src: "/logos/supabase.png" },
];

export function Integrations() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Integrations"
          title="Works with your stack."
          description="Relay drops into the tools you already use. Pipe clean, chunked content straight into your vector store, framework, or model provider — no glue code."
        />

        <Reveal className="reveal-children mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="card-lift group flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 hover:border-brand/30 hover:bg-card/70"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-border transition-transform group-hover:scale-110">
                <Image
                  src={i.src}
                  alt={`${i.name} logo`}
                  width={40}
                  height={40}
                  className="size-full object-cover"
                />
              </span>
              <span className="text-sm font-medium text-foreground/90">
                {i.name}
              </span>
            </div>
          ))}
        </Reveal>

        <p className="mt-6 text-sm text-muted-foreground">
          Plus a typed SDK for Python and TypeScript, plus a raw REST API and
          MCP server.
        </p>
      </Container>
    </section>
  );
}
