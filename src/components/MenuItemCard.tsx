
import { motion } from 'framer-motion';
import Button from '../components/ui/Button'


interface MenuItemCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
    tag?: string;
    isChefsPick?: boolean;
}

const MenuItemCard = ({ 
  image, 
  title, 
  description, 
  price, 
  tag, 
  isChefsPick = false 
}: MenuItemCardProps) => {
  return (
    <motion.div
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
  
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
     
        <div className="absolute top-4 left-4 flex gap-2">
          {isChefsPick && (
            <span className="chefs-pick font-inter font-medium">
              Chef's Pick
            </span>
          )}
          {tag && (
            <span className="price-chip font-inter font-medium">
              {tag}
            </span>
          )}
        </div>
      </div>

   
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-marcellus text-xl font-bold text-foreground">
            {title}
          </h3>
          <span className="font-inter text-lg font-bold text-primary ml-4">
            {price}
          </span>
        </div>

        <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

     
        <div className="flex gap-3">
          <Button 
            variant="primary" 
            size="sm"
            className="text-primary hover:text-primary-foreground hover:bg-primary font-inter font-medium flex-1"
          >
            Adicionar
          </Button>
          <Button 
            variant="secondary" 
            size="sm"
            className="border-border text-foreground hover:bg-secondary font-inter font-medium"
          >
            Detalhes
          </Button>
        </div>
      </div>
    </motion.div>
  );
};


export default MenuItemCard;