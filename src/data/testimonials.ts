export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    text: "O melhor sushi da cidade! Ingredientes fresquíssimos e atendimento excepcional.",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Ambiente incrível e sabores autênticos. Sempre volto com amigos e família.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    text: "Tradição japonesa com um toque moderno. Cada prato é uma obra de arte.",
    rating: 5,
  },
];
