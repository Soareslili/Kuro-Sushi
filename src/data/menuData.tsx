
import Sushi from '../assets/Sushi.png'
import Sashimi from '../assets/Sashimi.png'
import Ramen from '../assets/Ramen.png'
import Drinks from '../assets/Drinks.png'
import Bento from '../assets/Bento.png'
import Sobremesas from '../assets/Sobremesas.png'   

import Nigiri from '../assets/NigiriSalmao.png'
import Mochi from '../assets/MochiMatcha.png'
import Uramaki from '../assets/Uramaki.png'
import Veggie from '../assets/VeggieSet.png'
import DuoPremium from '../assets/DuoPremium.png'
import ComboKuro from '../assets/ComboKuro.png'
import SashimiAtum from '../assets/SashimiAtum.png'

import RamenShoyu from '../assets/RamenShoyu.png'
import BentoEspecial from '../assets/BentoEspecial.png'



export const offers = [
    {
    title: 'Sushi',
    image: Sushi,
    description: 'Peças tradicionais com peixe fresco e arroz avinagrado'
  },
  {
    title: 'Sashimi',
    image: Sashimi,
    description: 'Fatias de peixe cru de qualidade premium'
  },
  {
    title: 'Ramen',
    image: Ramen,
    description: 'Caldos autênticos com ingredientes tradicionais'
  },
  {
    title: 'Drinks',
    image: Drinks,
    description: 'Bebidas tradicionais japonesas e coquetéis especiais'
  },
  {
    title: 'Bento',
    image: Bento,
    description: 'Refeições completas em caixas tradicionais'
  },
  {
    title: 'Sobremesas',
    image: Sobremesas,
    description: 'Doces japoneses artesanais'
  }
]

export const specialMenu = [
  {
    image: Nigiri,
    title: 'Nigiri Salmão',
    description: 'Salmão fresco, arroz avinagrado, wasabi sutil.',
    price: 'R$ 18',
    isChefsPick: true
  },
  {
    image: SashimiAtum,
    title: 'Sashimi Atum',
    description: 'Fatias espessas de atum bluefin.',
    price: 'R$ 32',
    tag: 'Premium'
  },
  {
    image: RamenShoyu,
    title: 'Ramen Shoyu',
    description: 'Caldo claro, chashu, nori, ovo.',
    price: 'R$ 39'
  },
  {
    image: BentoEspecial,
    title: 'Bento Especial',
    description: 'Combinação de sushi, tempurá e salada.',
    price: 'R$ 45',
    isChefsPick: true
  },
  {
    image: Mochi,
    title: 'Mochi Matcha',
    description: 'Recheio cremoso, matcha premium.',
    price: 'R$ 16'
  },
  {
    image: Uramaki,
    title: 'Uramaki Especial',
    description: 'Salmão, cream cheese, gergelim tostado.',
    price: 'R$ 28',
    tag: 'Popular'
  }
];

export const combos = [
  {
    image: ComboKuro,
    title: "Combo Kuro",
    description: "8 peças de sushi + 6 sashimi + miso soup",
    originalPrice: "R$ 89",
    salePrice: "R$ 69",
    savings: "Economize R$ 20"
  },
  {
    image: Veggie,
    title: "Veggie Set",
    description: "6 peças vegetarianas + salada + chá",
    originalPrice: "R$ 45",
    salePrice: "R$ 35",
    savings: "Economize R$ 10"
  },
  {
    image: DuoPremium,
    title: "Duo Premium",
    description: "12 sashimi + 10 sushi + 2 bebidas",
    originalPrice: "R$ 128",
    salePrice: "R$ 98",
    savings: "Economize R$ 30"
  }
];


export const testimonials = [
  {
    name: 'Maria Silva',
    text: 'O melhor sushi da cidade! Ingredientes fresquíssimos e atendimento excepcional.',
    rating: 5
  },
  {
    name: 'João Santos',
    text: 'Ambiente incrível e sabores autênticos. Sempre volto com amigos e família.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    text: 'Tradição japonesa com um toque moderno. Cada prato é uma obra de arte.',
    rating: 5
  }
];