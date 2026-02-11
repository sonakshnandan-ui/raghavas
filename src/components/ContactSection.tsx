import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 gradient-hero" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-primary-foreground/70">
            Visit us or give us a call — we're here to help
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-8"
        >
          <a
            href="tel:9347313233"
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <Phone className="w-8 h-8" />
            <span className="font-body font-semibold">9347313233</span>
            <span className="font-body text-sm text-primary-foreground/60">Call Us</span>
          </a>

          <a
            href="https://maps.app.goo.gl/gfLedyunEPasqk646"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-colors text-center"
          >
            <MapPin className="w-8 h-8" />
            <span className="font-body font-semibold text-sm">
              Pillar No. 71, Opp. Uppal Bus Depot, Hyderabad
            </span>
            <span className="font-body text-sm text-primary-foreground/60">Directions</span>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground">
            <Clock className="w-8 h-8" />
            <span className="font-body font-semibold">Mon – Sat</span>
            <span className="font-body text-sm text-primary-foreground/60">9 AM – 7 PM</span>
          </div>
        </motion.div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-glow"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.56!3d17.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMzMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RAGHAVAS Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
