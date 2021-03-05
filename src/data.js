import project1 from '../src/images/expensify-app.png';
// import project2 from "../src/images/iptracker.jpg";
import project2 from '../src/images/pokemon-portfolio.png';
// import project3 from '../src/images/tracalorie.png';
import project3 from '../src/images/UAGENCY.png';
// import project4 from '../src/images/shorterlinks.jpg';
import project4 from '../src/images/shoppingCart.png';
import project5 from '../src/images/TrackerCovid.png';
import project6 from '../src/images/newKeep.jpg';

const projects = [
  {
    id: 1,
    liveDemo: 'https://react-course-2-expensify-br123.herokuapp.com/',
    github: 'https://github.com/Broncs/react-course-Expensify-app',
    img: project1,
    title: 'Expensify app',
    description:
      'Controle de gastos,pode filtrar por data, valor , ou pesquisar por nome',
  },
  {
    id: 2,
    liveDemo: 'https://pokedex-broncs.vercel.app/',
    github: 'https://github.com/Broncs/Pokedex',
    img: project2,
    title: 'Pokedex',
    description:
      'Lista de Pokemons, com paginas individuais mostrando um pouco sobre cada pokemon .',
  },
  {
    id: 3,
    liveDemo: 'https://uagency.netlify.app/',
    github: 'https://github.com/Broncs/Ultra-website',
    img: project3,
    title: 'UAgency',
    description:
      'website para empresa de marketing. com components totalmente reutilizáveis ',
  },
  {
    id: 4,
    liveDemo: 'https://shopping-cart-ts.netlify.app/',
    github: 'https://github.com/Broncs/Shopping-Card-Typescript',
    img: project4,
    title: ' Shopping Cart',
    description:
      'Carrinho de compras, onde voce pode adicionar itens,aumentar a quantidade, e remover .',
  },
  {
    id: 5,
    liveDemo: 'https://covid-tracker-v3.netlify.app/',
    github: 'https://github.com/Broncs/covid-tracker',
    img: project5,
    title: 'Covid Tracker',
    description:
      'Veja as estatísticas de casos, recuperados, e mortes causadas pelo Covid',
  },
  {
    id: 6,
    liveDemo: 'https://keeper-app-br.netlify.app/',
    github: 'https://github.com/Broncs/Keeper-app',
    img: project6,
    title: 'Keeper',
    description:
      'Inspirado no google Keep, com configuração de temas e background',
  },
];
export default projects;
