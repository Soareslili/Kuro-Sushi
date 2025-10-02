import { combos } from "../data/menuData";
import ComboCard from "./ComboCard";
import Section from "../components/Section";

const CombosSection = () => {
  return (
    <Section
      id="ofertas"
      title="Combos & Ofertas"
      subtitle="Experiências gastronômicas completas com preços especiais"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {combos.map((combo, idx) => (
          <ComboCard
            key={idx}
            image={combo.image}
            title={combo.title}
            description={combo.description}
            originalPrice={combo.originalPrice}
            salePrice={combo.salePrice}
            savings={combo.savings}
          />
        ))}
      </div>
    </Section>
  );
};

export default CombosSection;
