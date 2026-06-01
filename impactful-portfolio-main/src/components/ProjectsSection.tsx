import { useState } from "react";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    title: "SkillBridge — Educational Learning Platform",
    category: "Education",
    description:
      "Full-stack web application that helps rural students access and learn new skills on mobile and web. Responsive UI with seamless frontend-backend integration.",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "HTML/CSS"],
    highlights: [
      "Bridges rural learning gap",
      "Mobile-first responsive UI",
      "End-to-end MERN stack",
    ],
    emoji: "🎓",
  },
  {
    title: "Smart Healthcare Management System",
    category: "Healthcare",
    description:
      "Intelligent healthcare app for doctors to manage patient records and analyze medical history with advanced data analysis for actionable insights.",
    tags: ["React.js", "Python", "MongoDB", "Express.js", "Node.js"],
    highlights: [
      "Patient record management",
      "Medical-history analytics",
      "Doctor-friendly dashboards",
    ],
    emoji: "🏥",
  },
  {
    title: "Restaurant Menu Chatbot System",
    category: "AI / Startup",
    description:
      "Interactive chatbot solution that streamlines restaurant ordering without physical menus — a mobile-first experience that cuts manual ordering time.",
    tags: ["Node.js", "Express.js", "JavaScript", "MongoDB", "HTML/CSS"],
    highlights: [
      "Real-time chat ordering",
      "No-menu mobile-first flow",
      "Reduced staff workload",
    ],
    emoji: "🤖",
  },
];

const categories = ["All", "Education", "Healthcare", "AI / Startup"];

const ProjectsSection = () => {
  const { ref, isInView } = useInView();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full ${isInView ? "animate-draw-line" : "w-0"}`} />
        </div>

        <div className="flex gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`glass magnetic-hover shimmer overflow-hidden transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-accent px-3 py-1.5 bg-accent/10 rounded-full font-medium">
                    {project.category}
                  </span>
                  <span className="text-3xl">{project.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
