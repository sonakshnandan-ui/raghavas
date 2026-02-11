import { motion } from "framer-motion";
import typewritingImg from "@/assets/typewriting-institute.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import farmhouseImg from "@/assets/farmhouse-rental.jpg";

const services = [
  {
    title: "Typewriting Institute",
    description:
      "Master typing skills with our professional courses. Government-certified training with modern facilities and experienced instructors.",
    image: typewritingImg,
    features: ["Certified Courses", "Modern Labs", "Expert Faculty"],
  },
  {
    title: "Real Estate",
    description:
      "Find your dream property in Hyderabad. We offer residential and commercial properties with transparent dealings and best market rates.",
    image: realEstateImg,
    features: ["Residential Plots", "Commercial Spaces", "Trusted Deals"],
  },
  {
    title: "Farm House Rentals",
    description:
      "Escape the city and enjoy serene farm house getaways. Perfect for family gatherings, parties, and weekend retreats near Hyderabad.",
    image: farmhouseImg,
    features: ["Weekend Getaways", "Event Venues", "Luxury Amenities"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Three pillars of trust serving the Hyderabad community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="rounded-xl overflow-hidden bg-card shadow-card border border-border group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 font-display text-2xl font-bold text-card-foreground">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs font-body font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
