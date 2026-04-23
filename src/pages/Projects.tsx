import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

interface Project { id: string; title: string; description: string; category: string; coverImage: string; images: string[]; }

const HAS_REAL_PROJECTS = false;
const projects: Project[] = [
  {
    "id": "bulk-grain-haulage-kilkenny",
    "title": "Bulk Grain Haulage, Co. Kilkenny",
    "description": "Transported 40 tonnes of winter barley from a tillage farm outside Thomastown to a grain store in Kilkenny City on a tight harvest-day schedule. Runs completed across two days with zero load rejections at the intake point.",
    "category": "Agricultural",
    "imageKeyword": "grain",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  },
  {
    "id": "machinery-transport-tipperary",
    "title": "Agricultural Machinery Transport, Co. Tipperary",
    "description": "Delivered a 9-metre disc cultivator from a dealer in Clonmel to a tillage operation near Thurles, requiring a low-loader and route pre-check for overhead clearances. Equipment was on-site and ready for work within four hours of collection.",
    "category": "Machinery",
    "imageKeyword": "machinery",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  },
  {
    "id": "aggregate-delivery-wexford",
    "title": "Aggregate & Stone Delivery, Co. Wexford",
    "description": "Supplied 80 tonnes of crusher run to a road reinstatement project near Enniscorthy over three consecutive days, coordinating with the civils contractor to match pour and compaction schedules. All loads were tipped and signed off on time with no site delays.",
    "category": "Construction",
    "imageKeyword": "aggregate",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  }
];
const allCategories = [...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-accent">Projects</span></h1>
          <p className="text-lg opacity-80 max-w-2xl">
            {HAS_REAL_PROJECTS ? `Haulage & Transport Contractor work completed across Kilkenny and surrounding areas.` : `Examples of the kind of haulage & transport contractor work we do.`}
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          {!HAS_REAL_PROJECTS && (
            <div className="mb-8 p-4 rounded-lg bg-accent/5 border border-accent/20 text-center text-sm text-muted-foreground">
              Photos below are examples — real project photos will be added when we go live.
            </div>
          )}
          {allCategories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {["All", ...allCategories].map((cat) => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${active === cat ? "bg-accent text-accent-foreground border-accent" : "border-border hover:border-accent/40 hover:text-accent"}`}>
                  {cat}
                </button>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20 border-0 text-xs font-semibold">{project.category}</Badge>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Projects;
