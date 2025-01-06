import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiRedux, SiTypescript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiReactrouter } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { SiThemoviedatabase } from 'react-icons/si'

const projectsData = [
  {
    title: 'Movix',
    description: `It is a website where recent movies are shown through an API from The Movie 
    Database (TMDB), at the same time it has a search engine and a movie filter.`,
    imgSrc: './static/images/projects/movix.png',
    href: 'https://inspiring-travesseiro-ce958c.netlify.app/',
    react: <FaReact className="text-blue-500" />,
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
  {
    title: 'Valere',
    description: `Valere.io is the official website of a company dedicated to the design and development of custom web pages. Its mission is to create personalized digital solutions, combining modern design, intuitive functionality and cutting-edge technologies to meet the unique needs of each client.`,
    imgSrc: './static/images/projects/Valere.jpeg',
    href: 'https://valere.io/',
    redux: <SiRedux />,
    nextjs: <SiNextdotjs />,
    sass: <FaSass />,
    typescript: <SiTypescript />,
  },
]

export default projectsData
