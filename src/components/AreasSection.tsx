import { MapPin } from "lucide-react";

const areas = [
  "Co. Kilkenny",
  "Co. Tipperary",
  "Co. Carlow",
  "Co. Wexford",
  "Co. Waterford",
  "Co. Laois",
  "Co. Kildare",
  "Co. Wicklow",
  "Co. Dublin",
  "Co. Offaly",
  "Co. Meath",
  "Co. Cork"
];

const AreasSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Cover</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Haulage & Transport Contractor services across Kilkenny and surrounding counties. Contact us if your area isn't listed.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
        {areas.map((area) => (
          <div key={area} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-accent/40 hover:bg-accent/5 transition-colors">
            <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
            Co. {area}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasSection;
