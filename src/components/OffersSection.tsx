
import OfferCard from "../components/OfferCard";



const offers = [
  {
    image: "/src/assets/offer-sushi-1.jpg",
    title: "Combinado Especial",
    description: "Seleção do chef com peixes frescos do dia, perfeito para compartilhar.",
  },
  {
    image: "/src/assets/offer-sushi-2.jpg",
    title: "Sashimi Premium",
    description: "Cortes nobres, textura impecável e apresentação elegante.",
  },
  {
    image: "/src/assets/offer-sushi-3.jpg",
    title: "Yakissoba Tradicional",
    description: "Massa oriental salteada com legumes crocantes e molho da casa.",
  },
];

const OffersSection = () => {
  return (
    <section id="offers" className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <h2 className="font-marcellus text-3xl md:text-4xl font-bold text-foreground">
          Nossas Ofertas
        </h2>
        <p className="font-inter text-muted-foreground mt-2">
          Descubra os favoritos da casa preparados com ingredientes selecionados.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((item, i) => (
          <OfferCard
            key={`${item.title}-${i}`}
            image={item.image}
            title={item.title}
            description={item.description}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
