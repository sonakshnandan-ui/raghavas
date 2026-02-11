import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hyderabad cityscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold text-primary-foreground mb-4 tracking-tight">
            RAGHAVAS
          </h1>
          <p className="font-body text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Your Trusted Partner in Education, Property & Leisure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:9347313233"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-body font-semibold text-secondary-foreground transition-transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call: 9347313233
          </a>
          <a
            href="https://maps.app.goo.gl/gfLedyunEPasqk646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-body font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            <MapPin className="w-5 h-5" />
            View on Maps
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
