import { motion } from "framer-motion";
import Button from "./ui/Button";

interface ComboCardProps {
  image?: string;
  title: string;
  description: string;
  originalPrice: string;
  salePrice: string;
  savings: string;
}

const ComboCard = ({ image, title, description, originalPrice, salePrice, savings }: ComboCardProps) => {
  return (
    <motion.div
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
     
      {image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6 text-center">
        <h3 className="font-marcellus text-2xl font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="font-inter text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-col items-center mb-3">
          <span className="text-primary text-xl font-bold">{salePrice}</span>
          <span className="line-through text-muted-foreground text-sm">{originalPrice}</span>
          <span className="text-red-500 text-sm font-medium mt-1">{savings}</span>
        </div>

        <Button
          variant="primary"
          size="md"
          className="w-full font-inter font-medium"
        >
          Pedir Agora
        </Button>
      </div>
    </motion.div>
  );
};

export default ComboCard;
