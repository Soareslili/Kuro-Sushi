import { motion } from "framer-motion";

export interface OfferCardProps {
  image: string;
  title: string;
  description: string;
  index?: number; // usado para calcular o delay do AOS
}

const OfferCard = ({ image, title, description, index = 0 }: OfferCardProps) => {
  return (
    <motion.div
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      data-aos="zoom-in"
      data-aos-delay={100 * (index + 1)} // ✅ agora funciona
      data-aos-duration="1200"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="font-marcellus text-xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="font-inter text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default OfferCard;
