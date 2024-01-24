import Image from './Image'
import Link from './Link'
import { FaReact } from "react-icons/fa";

const Card = ({ title, description, imgSrc, href, react, redux, tailwindcss, reactRouter, sass, themovieDB}) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex items-center">
          <p className="">Tools:</p>
          <div className="flex space-x-3 px-4 text-3xl">
              <i className="text-blue-500">{react}</i>
              <i className="text-purple-500">{redux}</i>
              <i className="text-teal-500">{tailwindcss}</i>
              <i className="text-yellow-500">{reactRouter}</i>
              <i className="text-pink-500">{sass}</i>
              <i className="text-red-500">{themovieDB}</i>
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
)

export default Card
