import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a haulage contractor in Kilkenny?</h2>
      <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
        Call Paul directly on 086 836 6151 or send an email to discuss your load, route, and timing. One call connects you straight to the driver.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <Button asChild size="lg" className="bg-white/15 border border-white/40 text-white hover:bg-white/25 font-semibold px-8 py-4 h-auto rounded-lg transition-colors">
          <a href="tel:0868366151" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Call 0868366151
          </a>
        </Button>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90 font-bold px-8 py-4 h-auto rounded-lg shadow-lg">
          <Link to="/contact">Get a Free Quote</Link>
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-80">
        <a href="tel:0868366151" className="flex items-center gap-2 justify-center hover:opacity-100 transition-opacity">
          <Phone className="h-4 w-4" /> 0868366151
        </a>
        <a href="mailto:mernaghtransport@hotmail.com" className="flex items-center gap-2 justify-center hover:opacity-100 transition-opacity">
          <Mail className="h-4 w-4" /> mernaghtransport@hotmail.com
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
