import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold gradient-text">
          RAGHAVAS
        </a>
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </a>
          <a
            href="tel:9347313233"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
