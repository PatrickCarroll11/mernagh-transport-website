import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => (
  <>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-accent">Paul Mernagh Transport</span></h1>
        <p className="text-lg opacity-80 max-w-2xl">Haulage & Transport Contractor services you can rely on across Kilkenny.</p>
      </div>
    </section>
    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Paul Mernagh Transport is a Kilkenny-based haulage business run by Paul Mernagh. The business operates across Leinster as its core territory, with nationwide runs available where required. Paul takes on agricultural, commercial, and construction freight, and handles each job personally as an owner-operator.</p>
        <p className="text-muted-foreground leading-relaxed mb-14">Clients across Co. Kilkenny and beyond use Paul for both contract haulage and one-off transport needs..</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[{"title":"Owner-Operated","desc":"Paul drives every load himself — there is no middleman between you and the person responsible for your freight."},{"title":"Kilkenny Based","desc":"Operating out of Co. Kilkenny with strong route knowledge across Leinster and into Munster."},{"title":"Agricultural Specialist","desc":"Experienced in the seasonal demands of farm haulage across Kilkenny, Tipperary, Carlow, and Wexford."},{"title":"Construction Freight","desc":"Bulk materials and machinery transport for civil and construction clients who need site-critical timing."},{"title":"Contract & One-Off","desc":"Available for long-term contract arrangements or individual freight runs — no minimum commitment required."}].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </>
);

export default About;
