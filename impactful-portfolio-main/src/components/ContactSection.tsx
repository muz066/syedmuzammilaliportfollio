import { useState, FormEvent } from "react";
import { useInView } from "../hooks/useInView";

const ContactSection = () => {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-3xl float-subtle" />
      </div>
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full ${isInView ? "animate-draw-line" : "w-0"}`} />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className={`transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              I'm always open to discussing new projects, ideas, or opportunities. Feel free to reach out!
            </p>
            <div className="space-y-5">
              <a href="mailto:syedmuzammilali7866@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 group">
                <span className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 text-lg">📧</span>
                <span className="text-sm">syedmuzammilali7866@gmail.com</span>
              </a>
              <a href="tel:+917569124360" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 group">
                <span className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 text-lg">📱</span>
                <span className="text-sm">+91 75691 24360</span>
              </a>
              <a href="https://www.linkedin.com/in/syed-muzammil-ali-520209335" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 group">
                <span className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 text-lg">💼</span>
                <span className="text-sm">linkedin.com/in/syed-muzammil-ali</span>
              </a>
              <a href="https://github.com/muz066" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 group">
                <span className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 text-lg">🐙</span>
                <span className="text-sm">github.com/muz066</span>
              </a>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            {submitted ? (
              <div className="glass p-10 text-center">
                <p className="text-3xl mb-3">✅</p>
                <p className="text-foreground font-semibold text-lg">Message sent!</p>
                <p className="text-muted-foreground text-sm mt-2">Thank you for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setSubmitted(false)} className="mt-5 text-accent text-sm hover:underline font-medium">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1.5">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 shadow-md magnetic-hover"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
