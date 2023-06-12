import { navLinks } from "@/data/navLinks";
import { v4 as uuidv4 } from 'uuid';

export const Header = () => {
  
  return (
  <>
    <nav className="bg-white dark:bg-amber-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center">
          <img src="./logo.png" className="h-14 mr-5" alt="Flowbite Logo"/>
          <span className="self-center text-2xl font-cardo italic tracking-wider whitespace-nowrap dark:text-white">Webster's</span>
      </a>
      <div className="flex md:order-2">
          <button 
            type="button" 
            className="text-amber-900 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login
          </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-amber-900 md:dark:bg-amber-900 dark:border-gray-700">
          {navLinks.map((link) => {
            return (
              <li>
                <a href={link.href} key={uuidv4()} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500" aria-current="page">{link.name}</a>
              </li>
            )})}
        </ul>
      </div>
      </div>
    </nav>
  </>  
  )
}