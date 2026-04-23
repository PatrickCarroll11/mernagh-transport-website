import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SECTION_LABEL = "Example Work — Real Photos to Follow";
const SECTION_NOTE  = "Ask us about our recent projects across Kilkenny and surrounding areas.";
const recentProjects = [
  {
    "id": "bulk-grain-haulage-kilkenny",
    "title": "Bulk Grain Haulage, Co. Kilkenny",
    "description": "Transported 40 tonnes of winter barley from a tillage farm outside Thomastown to a grain store in Kilkenny City on a tight harvest-day schedule. Runs completed across two days with zero load rejections at the intake point.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "machinery-transport-tipperary",
    "title": "Agricultural Machinery Transport, Co. Tipperary",
    "description": "Delivered a 9-metre disc cultivator from a dealer in Clonmel to a tillage operation near Thurles, requiring a low-loader and route pre-check for overhead clearances. Equipment was on-site and ready for work within four hours of collection.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "aggregate-delivery-wexford",
    "title": "Aggregate & Stone Delivery, Co. Wexford",
    "description": "Supplied 80 tonnes of crusher run to a road reinstatement project near Enniscorthy over three consecutive days, coordinating with the civils contractor to match pour and compaction schedules. All loads were tipped and signed off on time with no site delays.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  }
];

const RecentWork = () => (
  <section className="py-24 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{SECTION_LABEL}</h2>
        {SECTION_NOTE && <p className="text-muted-foreground max-w-2xl mx-auto">{SECTION_NOTE}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {recentProjects.map((project) => (
          <Link key={project.id} to="/projects" className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Button asChild variant="outline" className="px-6">
          <Link to="/projects" className="flex items-center gap-2">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default RecentWork;