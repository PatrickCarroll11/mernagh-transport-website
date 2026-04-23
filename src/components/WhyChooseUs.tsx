import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Owner-operated — Paul drives every load himself",
  "Based in Kilkenny, covering all of Leinster",
  "Nationwide freight capacity available",
  "Agricultural and construction haulage specialist",
  "Consistent scheduling, no missed windows",
  "Direct mobile contact at all times — 086 836 6151",
  "Contract and one-off haulage both taken on",
  "Established local reputation across Co. Kilkenny"
];

const WhyChooseUs = () => (
  <section className="py-20 section-alt">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Paul Mernagh Transport?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Paul Mernagh Transport is an owner-operated haulage business based in Kilkenny, meaning Paul himself handles your freight — not a subcontractor. Every load gets the same attention to schedule and security that repeat clients from across Leinster have come to expect.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-primary rounded-xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
            <p className="opacity-90 mb-6">Tell us what you need and we'll get back to you with a clear, fixed price — no obligation.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><span>No hidden costs</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><span>Fixed-price quotes upfront</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><span>Fast response across Kilkenny area</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
