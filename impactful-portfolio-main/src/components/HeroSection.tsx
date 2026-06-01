import { useEffect, useState } from "react";
import codeBg from "../assets/code-bg.jpg";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Coding background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={codeBg}
          alt="Coding background"
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Soft organic background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl float-subtle" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl float-subtle-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6 opacity-0 animate-blur-in" style={{ animationDelay: "0.2s" }}>
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up drop-shadow-[0_0_40px_hsl(var(--primary)/0.4)]" style={{ animationDelay: "0.4s" }}>
          <span className="gradient-text">Syed Muzammil Ali</span>
        </h1>
        <div className="text-xl md:text-3xl text-muted-foreground mb-8 opacity-0 animate-fade-in-up h-10" style={{ animationDelay: "0.6s" }}>
          <span className="font-mono">
            {roles[roleIndex].substring(0, charIndex)}
          </span>
          <span className="border-r-2 border-primary animate-typing-cursor ml-0.5">&nbsp;</span>
        </div>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-12 opacity-0 animate-fade-in-up leading-relaxed text-lg" style={{ animationDelay: "0.8s" }}>
          Passionate and driven Software Engineer with a focus on building scalable, user-centric applications that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 magnetic-hover shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
