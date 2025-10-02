import { specialMenu } from "./data/menuData";
import OfferCard from "./components/OfferCard";
import { offers } from "./data/menuData";
import MenuItemCard from "./components/MenuItemCard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PhilosophySection from "./components/PhilosophySection";

import CombosSection from "./components/CombosSection";
import ReservationBlock from "./components/ReservationBlock";



function App() {
  return (
    <>
      <Header />
      <Hero />

      <section id="menu" className="py-16 px-6 text-center">
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

      <section className="p-6">
        <div className="text-center mb-12">
          <h2 className="font-marcellus text-4xl md:text-5xl font-bold text-foreground mb-4">
            Menu Especial
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Pratos selecionados pelo nosso chef
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialMenu.map((item, idx) => (
            <MenuItemCard
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              tag={item.tag}
              isChefsPick={item.isChefsPick}
            />
          ))}
        </div>
      </section>

      <PhilosophySection />
      <CombosSection />

        <ReservationBlock />
  


    </>
  );
}
export default App;
