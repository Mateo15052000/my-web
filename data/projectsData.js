import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiThemoviedatabase } from "react-icons/si";

const projectsData = [
  {
    title: 'Movix',
    description: `It is a website where recent movies are shown through an API from The Movie 
    Database (TMDB), at the same time it has a search engine and a movie filter.`,
    imgSrc:'./static/images/projects/movix.png', 
    href: 'https://inspiring-travesseiro-ce958c.netlify.app/',
    react: <FaReact className="text-blue-500"/>,
    redux: <SiRedux className="text-purple-500" />,
    reactRouter: <SiReactrouter />,
    sass: <FaSass />,
    themovieDB: <SiThemoviedatabase />,
  },
  {
    title: 'E-commerce',
    description: `Website for the sale of sneakers of different models, at the same 
    time it has the option of a shopping cart.`,
    imgSrc: './static/images/projects/Ecommerce.jpeg',
    href: 'https://melodic-choux-c73640.netlify.app/',
    react: <FaReact />,
    redux: <SiRedux />,
    tailwindcss: <SiTailwindcss />,
  },
  
]

export default projectsData
