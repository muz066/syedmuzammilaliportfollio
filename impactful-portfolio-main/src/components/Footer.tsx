const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground">
        Designed & Built by{" "}
        <span className="gradient-text font-semibold">Syed Muzammil Ali</span>
      </p>
      <p className="text-xs text-muted-foreground/60 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
