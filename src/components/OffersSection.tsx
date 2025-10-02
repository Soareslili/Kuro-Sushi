
import { offers } from "../data/menuData";
import OfferCard from "../components/OfferCard";

const OffersSection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="font-marcellus text-4xl md:text-5xl font-bold text-foreground mb-4">
        Nosso Cardápio
      </h2>
      <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
        Descubra os sabores autênticos da culinária japonesa
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((item, idx) => (
          <OfferCard
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
