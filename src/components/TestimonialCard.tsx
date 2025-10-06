import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number; 
}

const TestimonialCard = ({ name, text, rating }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h4 className="font-marcellus text-lg font-bold text-foreground mb-2">{name}</h4>

      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-[#C7A569]" : "text-muted-foreground"}`}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>

      <p className="font-inter text-muted-foreground leading-relaxed">{text}</p>
    </motion.div>
  );
};

export default TestimonialCard;
