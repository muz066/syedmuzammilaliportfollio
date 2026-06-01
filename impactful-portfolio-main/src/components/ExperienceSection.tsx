import { useInView } from "../hooks/useInView";

const leadership = [
  {
    role: "Event Coordinator — ITSA",
    org: "IT Students' Association, Lords Institute",
    period: "Ongoing",
    points: [
      "Lead coordinator for Sanketika — one of India's largest student-led tech events",
      "Manage event planning, team coordination, scheduling and on-ground execution",
      "Bridge faculty, sponsors and 500+ student participants for smooth delivery",
    ],
    emoji: "🎤",
    tag: "Leadership",
  },
];

const hackathons = [
  {
    title: "Smart India Hackathon 2025",
    detail: "Qualified Round 1 (Internal Level) with an innovative problem-solving project.",
    emoji: "🏆",
  },
  {
    title: "CBIET Hackathon",
    detail: "Built a real-world project focused on solving practical industry problems.",
    emoji: "💡",
  },
];

const achievements = [
  { text: "Smart India Hackathon 2025 — qualified internal round", emoji: "🥇" },
  { text: "Dean's Recognition — academic & extra-curricular excellence", emoji: "🎖️" },
  { text: "Strong problem-solving foundation with production-ready apps", emoji: "🚀" },
];

const certifications = [
  { title: "MERN Stack Development", sub: "Self-Paced Online Training", emoji: "📜" },
  { title: "Web Development Fundamentals", sub: "Comprehensive Online Course", emoji: "🌐" },
  { title: "Problem-Solving & Data Structures", sub: "Advanced Competitive Programming", emoji: "🧩" },
];

const ExperienceSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-primary/[0.04] rounded-full blur-3xl float-subtle" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/[0.05] rounded-full blur-3xl float-subtle-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Leadership & Achievements</h2>
          <div className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full ${isInView ? "animate-draw-line" : "w-0"}`} />
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Beyond code — events I lead, competitions I take on, and milestones along the way.
          </p>
        </div>

        {/* Leadership timeline */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-6">Leadership Experience</h3>
          <div className="relative pl-8 border-l-2 border-border">
            {leadership.map((l, i) => (
              <div
                key={l.role}
                className={`relative mb-8 transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <span className="absolute -left-[2.4rem] top-2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg ring-4 ring-background flex items-center justify-center text-[10px]">
                  {l.emoji}
                </span>
                <div className="glass p-6 magnetic-hover shimmer">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="text-foreground font-bold text-lg">{l.role}</h4>
                    <span className="text-xs font-mono text-accent px-2.5 py-1 bg-accent/10 rounded-full">{l.tag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{l.org}</p>
                  <p className="text-xs font-mono text-accent mb-4">{l.period}</p>
                  <ul className="space-y-2">
                    {l.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Hackathons & Competitions</h3>
            <div className="space-y-4">
              {hackathons.map((h, i) => (
                <div
                  key={h.title}
                  className={`glass p-5 magnetic-hover shimmer flex gap-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  <span className="text-3xl">{h.emoji}</span>
                  <div>
                    <h4 className="text-foreground font-semibold">{h.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{h.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((a, i) => (
                <div
                  key={a.text}
                  className={`glass p-5 magnetic-hover shimmer flex items-center gap-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150 + 300}ms` }}
                >
                  <span className="text-3xl">{a.emoji}</span>
                  <p className="text-sm text-foreground font-medium">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((c, i) => (
              <div
                key={c.title}
                className={`glass p-6 magnetic-hover shimmer transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: `${i * 150 + 400}ms` }}
              >
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h4 className="text-foreground font-semibold leading-snug">{c.title}</h4>
                <p className="text-xs text-muted-foreground mt-1.5">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
