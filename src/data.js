import project1 from "../src/images/expensify-app.png";
import project2 from "../src/images/iptracker.jpg";
import project3 from "../src/images/tracalorie.png";

const projects = [
  {
    id: 1,
    liveDemo: "https://react-course-2-expensify-br123.herokuapp.com/",
    github: "https://github.com/Broncs/react-course-Expensify-app",
    img: project1,
    title: "Expensify app",
    description:
      "Controle de gastos,pode filtrar por data, valor , ou pesquisar por nome",
  },
  {
    id: 2,
    liveDemo: "https://ip-address-tracker-123.netlify.app/",
    github: "https://github.com/Broncs/ip-address-tracker",
    img: project2,
    title: "IP Address Tracker",
    description:
      'Um dos desafios do "frontend Mentor" website. Rastreador de endereço IP',
  },
  {
    id: 3,
    liveDemo: "https://cocky-lalande-1b0c67.netlify.app/",
    github: "https://github.com/Broncs/Tracalorie",
    img: project3,
    title: "Tracalorie",
    description:
      "Controle sobre refeições e calorias , com vannilla javascript",
  },
];
export default projects;
