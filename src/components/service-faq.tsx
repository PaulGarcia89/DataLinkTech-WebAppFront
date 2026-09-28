import { Plus } from "lucide-react";
import { serviceFaqs } from "@/lib/faqs";

export function ServiceFAQ({ slug }: { slug: string }) {
  const items = serviceFaqs[slug];
  if (!items?.length) return null;
  return (
    <section className="plane plane-paper">
      <div className="container faq-section">
        <div>
          <p className="eyebrow">Antes de empezar</p>
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="faq-list">
          {items.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
