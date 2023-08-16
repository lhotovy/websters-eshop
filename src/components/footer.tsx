import Link from "next/link"
import {FaLinkedin, FaGithub} from "react-icons/fa"

export const Footer = () => {
  return ( 
    <footer className="fixed mx-auto bottom-0 left-0 z-20 max-w-scren w-full py-4 px-6 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">     
        <div>
            <span className="block text-sm text-gray-500 dark:text-gray-400">{`© ${new Date().getFullYear()} `}
              <Link 
                href="/" 
                className="hover:underline"
                >
                  Webster's
              </Link>
              . All Rights Reserved.
            </span>
            <span className="signature text-sm  text-gray-500 dark:text-gray-400">
              by Lukáš Hotový
            </span>
        </div>
     
        <div className="flex justify-between md:space-x-64 md:mr-12">         
            <div className="inline-flex mr-4">       
              <div className="md:flex inline-flex my-2 md:my-auto space-x-6 justify-right">              
                  <Link href="https://www.linkedin.com/in/lhotovy/" className="hover:text-gray-600 text-white md:text-2xl">
                    <FaLinkedin/>
                  </Link>
                  <Link href="https://github.com/lhotovy" className="hover:text-gray-600 text-white md:text-2xl">
                      <FaGithub/>
                  </Link>
              </div>
            </div>        
        </div>
    </footer>
  );
};