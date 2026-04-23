import { CheckCircle2, Truck, Package, Layers, Settings, Box, ClipboardList } from "lucide-react";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "General Freight Haulage",
    seo: "General Freight Haulage Kilkenny Leinster",
    description:
      "Paul Mernagh Transport handles general commercial freight from Kilkenny to destinations across Ireland. Loads are handled professionally with an emphasis on punctual delivery. Whether it is a one-off consignment or a regular run, schedules are adhered to.",
    features: [
      "Leinster-wide coverage as standard",
      "Nationwide capacity available",
      "Flexible departure times",
      "Load security checked before each run",
      "Direct contact with the driver throughout",
    ],
    icon: Truck,
  },
  {
    title: "Agricultural Haulage",
    seo: "Agricultural Haulage Kilkenny Tipperary Wexford",
    description:
      "Serving the farming community across Co. Kilkenny and neighbouring counties, Paul Mernagh Transport moves agricultural goods, fodder, grain, and farm machinery. Seasonal peaks are planned for and turnaround times kept tight during busy periods.",
    features: [
      "Grain, fodder, and bulk feed transport",
      "Farm machinery movement",
      "Seasonal flexibility built in",
      "Knowledge of rural access routes",
      "Serving Kilkenny, Tipperary, Carlow, and Wexford",
    ],
    icon: Package,
  },
  {
    title: "Bulk Material Transport",
    seo: "Bulk Material Haulage Kilkenny Construction",
    description:
      "Aggregates, stone, topsoil, and other bulk materials transported for construction companies, landscapers, and civil contractors. Multi-drop runs available for larger projects across Leinster.",
    features: [
      "Aggregates and stone haulage",
      "Soil and spoil removal",
      "Single and multi-drop deliveries",
      "Suitable for civil and construction contractors",
      "Reliable scheduling for site-critical deliveries",
    ],
    icon: Layers,
  },
  {
    title: "Machinery & Equipment Transport",
    seo: "Machinery Transport Kilkenny Heavy Haulage",
    description:
      "Heavy and oversized machinery moved safely between farms, construction sites, and depots. All loads are properly secured and transported in line with Road Traffic Act requirements.",
    features: [
      "Heavy plant and machinery movement",
      "Proper load securing and strapping",
      "Site-to-site and depot-to-site runs",
      "Experienced in oversized load handling",
      "Available across Leinster and Munster",
    ],
    icon: Settings,
  },
  {
    title: "Pallet & Palletised Freight",
    seo: "Pallet Freight Haulage Kilkenny",
    description:
      "Palletised goods collected and delivered for businesses requiring a reliable freight partner. Suitable for manufacturers and distributors based in Kilkenny or using the region as a logistics hub.",
    features: [
      "Single and multi-pallet loads",
      "Regular scheduled runs available",
      "Safe handling of palletised stock",
      "Suitable for retail and wholesale distribution",
      "Covering Leinster routes as priority",
    ],
    icon: Box,
  },
  {
    title: "Contract Haulage",
    seo: "Contract Haulage Kilkenny Long Term",
    description:
      "Businesses with consistent freight needs benefit from a dedicated contract arrangement with Paul Mernagh Transport. You deal with one person, one truck, and one straightforward agreement.",
    features: [
      "Dedicated driver for your account",
      "Agreed schedules and routes",
      "Suitable for high-volume or repeat shippers",
      "Direct communication at all times",
      "Flexible contract terms to suit your operation",
    ],
    icon: ClipboardList,
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Paul Mernagh Transport · Kilkenny
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Haulage Services
            <br />
            Across Leinster & Beyond
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl leading-relaxed">
            From general freight runs to agricultural haulage and contract
            transport, every job is owner-operated and handled to a consistent
            standard. Based in Kilkenny — serving the road.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceDetails.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300 p-8 flex flex-col gap-6"
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex flex-col gap-2 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-card-foreground leading-tight">
                        {service.title}
                      </h2>
                      <span className="inline-block self-start text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {service.seo}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
                      What's Included
                    </p>
                    <ul className="flex flex-col gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-card-foreground leading-relaxed"
                        >
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}