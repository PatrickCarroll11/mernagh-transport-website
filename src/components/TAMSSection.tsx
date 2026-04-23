import { CheckCircle2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TAMSSection() {
  const badges = [
    "Haulage Operator Licensed",
    "Commercially Insured",
    "Owner-Operated",
  ];

  return (
    <section className="bg-primary/[0.04] border-y border-primary/10 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Trade Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-2">
            <Truck className="h-8 w-8 text-accent" />
          </div>

          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Compliance & Insurance
          </p>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
            Licensed &amp; Insured Haulage Operator
          </h2>

          {/* Body */}
          <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
            Paul Mernagh Transport operates with the appropriate road haulage
            operator licensing and commercial vehicle insurance required under
            Irish transport law. Every load is carried with full legal
            compliance and proper load security.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg shadow-lg font-bold hover:bg-accent/90 transition-colors mt-2"
          >
            <Link to="/contact">Get a Haulage Quote</Link>
          </Button>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-6">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-semibold text-foreground text-left leading-snug">
                  {badge}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}