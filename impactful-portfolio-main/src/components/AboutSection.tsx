import { useInView } from "../hooks/useInView";

const education = [
  {
    level: "B.Tech — Information Technology",
    place: "Lords Institute of Engineering and Technology, Hyderabad",
    score: "CGPA: 9.3",
  },
  {
    level: "Intermediate (12th Grade)",
    place: "Chaithanya Junior College, Hyderabad",
    score: "Percentage: 87%",
  },
  {
    level: "Matriculation (10th Grade)",
    place: "Hyderabad School, Hyderabad",
    score: "Percentage: 85%",
  },
];

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full ${isInView ? "animate-draw-line" : "w-0"}`} />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className={`transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm <span className="text-foreground font-semibold">Syed Muzammil Ali</span>, an aspiring Full Stack Developer pursuing B.Tech in Information Technology with a CGPA of <span className="text-accent font-semibold">9.3</span>. I love crafting clean, scalable web applications using the MERN stack.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Beyond academics, I serve as an <span className="text-foreground font-semibold">Event Coordinator at ITSA</span>, where I help organize <span className="text-foreground font-semibold">Sanketika</span> — one of India's largest student-led tech events. Leadership, teamwork and shipping real things excite me.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["MERN Stack", "Problem Solving", "Leadership", "9.3 CGPA"].map((b) => (
                <span key={b} className="px-4 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border shimmer">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className={`space-y-4 transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <h3 className="text-lg font-semibold text-foreground mb-5">Education</h3>
            {education.map((e, i) => (
              <div
                key={i}
                className="glass p-5 magnetic-hover shimmer relative pl-6"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />
                <p className="text-accent font-mono text-sm font-medium">{e.score}</p>
                <p className="text-foreground font-semibold mt-1">{e.level}</p>
                <p className="text-muted-foreground text-sm mt-0.5">{e.place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
