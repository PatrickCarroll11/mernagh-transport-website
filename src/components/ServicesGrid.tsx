import { Truck, HardHat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Truck, HardHat };
const services = [
  {
    "icon": "Truck",
    "title": "General Freight Haulage",
    "description": "Road haulage for commercial and industrial loads across Leinster and nationwide. Paul runs a tight schedule to keep delivery windows predictable for clients."
  },
  {
    "icon": "Truck",
    "title": "Agricultural Haulage",
    "description": "Transport of agricultural goods, machinery, and bulk materials for farms across Co. Kilkenny and surrounding counties. Seasonal work accommodated with flexible scheduling."
  },
  {
    "icon": "HardHat",
    "title": "Bulk Material Transport",
    "description": "Haulage of bulk loads including aggregates, soil, and loose materials for construction and civil projects. Suitable for single drops or multi-site deliveries."
  },
  {
    "icon": "Truck",
    "title": "Machinery & Equipment Transport",
    "description": "Safe transport of heavy machinery and oversized equipment between sites. Loads are secured to compliance standards before every run."
  },
  {
    "icon": "HardHat",
    "title": "Pallet & Palletised Freight",
    "description": "Collection and delivery of palletised goods for businesses needing regular or one-off freight runs. Suitable for manufacturers, distributors, and suppliers."
  },
  {
    "icon": "Truck",
    "title": "Contract Haulage",
    "description": "Dedicated contract haulage arrangements for businesses with repeat or high-volume transport requirements. Consistent driver, consistent service."
  }
];

const ServicesGrid = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
          Paul Mernagh Transport provides road haulage and freight services operating out of Kilkenny. Covering Leinster as a primary run with nationwide capacity, the business handles agricultural, commercial, and general freight hauls.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || HardHat;
          return (
            <div key={service.title} className="group p-8 rounded-xl border border-border bg-card hover:shadow-lg hover:border-accent/30 transition-all duration-300 cursor-default">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
