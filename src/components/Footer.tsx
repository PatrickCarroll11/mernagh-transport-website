import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-heading font-bold text-lg mb-3 text-accent">Paul Mernagh Transport</h4>
          <p className="text-sm opacity-70 leading-relaxed mb-5">Paul Mernagh Transport — owner-operated road haulage based in Co. Kilkenny, covering Leinster and nationwide.</p>
          <div className="space-y-2 text-sm opacity-80">
            <a href="tel:0868366151" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Phone className="h-4 w-4 text-accent shrink-0" />0868366151</a>
            <a href="mailto:mernaghtransport@hotmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Mail className="h-4 w-4 text-accent shrink-0" />mernaghtransport@hotmail.com</a>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Service Areas</h4>
          <ul className="space-y-1.5 text-sm opacity-70">
            <li>Co. Co. Kilkenny</li>
            <li>Co. Co. Tipperary</li>
            <li>Co. Co. Carlow</li>
            <li>Co. Co. Wexford</li>
            <li>Co. Co. Waterford</li>
            <li>Co. Co. Laois</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><a href="tel:0868366151" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Phone className="h-4 w-4 text-accent shrink-0" />0868366151</a></li>
            <li><a href="mailto:mernaghtransport@hotmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Mail className="h-4 w-4 text-accent shrink-0" />mernaghtransport@hotmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /><span>Kilkenny, Ireland</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-6 text-center text-xs opacity-40">
        © {new Date().getFullYear()} Paul Mernagh Transport. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
