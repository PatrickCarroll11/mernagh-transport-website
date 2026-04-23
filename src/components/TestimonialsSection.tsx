import { Star } from "lucide-react";

const testimonials = [
  {
    "text": "Paul moved a full load of silage bales across to us in Tipperary without a hitch. Arrived exactly when he said he would, which matters when you're working around the weather.",
    "authorLine": "Farmer, Co. Tipperary, undefined (Agricultural bale haulage)"
  },
  {
    "text": "We use Paul regularly for delivering aggregates to our sites in Kilkenny and Carlow. Reliable, straightforward, and you always know where you stand with him.",
    "authorLine": "Site Manager, Co. Carlow, undefined (Bulk aggregate delivery)"
  },
  {
    "text": "Needed a digger moved from one site to another at short notice and Paul sorted it the same day. Wouldn't hesitate to call him again.",
    "authorLine": "Contractor, Co. Kilkenny, undefined (Machinery transport)"
  }
];

const TestimonialsSection = () => (
  <section className="py-20 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-4 italic text-muted-foreground">"{t.text}"</p>
            <p className="text-sm font-semibold">— {t.authorLine}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
