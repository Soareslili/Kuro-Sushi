import { motion } from "framer-motion";
import { Star } from "lucide-react";

export interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  avatar?: string;
}

const TestimonialCard = ({ name, text, rating, avatar }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-[#14181D] border border-[#9CA3AF] rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
    >

      <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${rating} de 5`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-[#C7A569]" : "text-muted-foreground"}`}
            fill={i < rating ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        ))}
      </div>


      <blockquote className="font-inter text-foreground mb-6 leading-relaxed">
        “{text}”
      </blockquote>


      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="font-marcellus bg-[#C7A569] px-4 py-2 rounded-full text-primary font-bold text-lg">{name.charAt(0)}</span>
        </div>

        <div>
          <p className="font-inter font-medium text-foreground">{name}</p>
          <p className="font-noto-jp text-sm text-muted-foreground">お客様</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
