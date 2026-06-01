import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    title: "Languages",
    icon: "💻",
    items: ["C++", "JavaScript", "Python"],
  },
  {
    title: "Frameworks",
    icon: "⚙️",
    items: ["React.js", "Express.js", "Node.js"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];

const technicalSkills = [
  { name: "React.js", level: 88, icon: "⚛️" },
  { name: "JavaScript", level: 90, icon: "⚡" },
  { name: "Node.js & Express", level: 82, icon: "🟢" },
  { name: "MongoDB / MySQL", level: 80, icon: "🍃" },
  { name: "Python", level: 75, icon: "🐍" },
  { name: "C++", level: 78, icon: "🔧" },
  { name: "HTML & CSS", level: 92, icon: "🌐" },
];

const professionalSkills = [
  { name: "Communication", icon: "💬" },
  { name: "Presentation", icon: "📊" },
  { name: "Project Management", icon: "📋" },
  { name: "Problem-Solving", icon: "🧩" },
  { name: "Adaptability", icon: "🌱" },
  { name: "Leadership", icon: "🚀" },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl float-subtle" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-3xl float-subtle-delayed" />
      </div>
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <div className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full ${isInView ? "animate-draw-line" : "w-0"}`} />
        </div>

        {/* Tech Stack Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillGroups.map((g, i) => (
            <div
              key={g.title}
              className={`glass p-6 magnetic-hover shimmer transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-3xl mb-3">{g.icon}</div>
              <h4 className="text-foreground font-semibold mb-3">{g.title}</h4>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-8">Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground flex items-center gap-2 font-medium">
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-xs text-accent font-mono font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      style={{
                        width: isInView ? `${skill.level}%` : "0%",
                        transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {professionalSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`glass p-5 text-center magnetic-hover shimmer transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <span className="text-3xl block mb-3">{skill.icon}</span>
                  <span className="text-sm text-muted-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
