import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    "q": "What areas does Paul Mernagh Transport cover?",
    "a": "The primary coverage area is Co. Kilkenny and across Leinster. Nationwide runs are also available — call Paul on 086 836 6151 to discuss your specific route."
  },
  {
    "q": "Does Paul Mernagh Transport do agricultural haulage?",
    "a": "Yes. Agricultural haulage — including grain, fodder, bales, and farm machinery — is a core part of the business, serving farmers across Kilkenny, Tipperary, Carlow, and Wexford."
  },
  {
    "q": "Can I set up a regular contract haulage arrangement?",
    "a": "Yes. Paul takes on contract clients who need consistent, scheduled haulage. Contact Paul directly on 086 836 6151 to discuss terms and volumes."
  },
  {
    "q": "Is Paul Mernagh Transport owner-operated?",
    "a": "Yes. Paul Mernagh drives every load himself. You deal directly with the owner on every job."
  },
  {
    "q": "What types of freight does Paul Mernagh Transport handle?",
    "a": "General commercial freight, agricultural loads, bulk materials, palletised goods, and machinery transport. If you are unsure whether your load is suitable, call and ask."
  },
  {
    "q": "How do I get a quote for a haulage job?",
    "a": "Call Paul directly on 086 836 6151 or email mernaghtransport@hotmail.com with your collection point, destination, and load details and he will come back to you promptly."
  }
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <section className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors">
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
