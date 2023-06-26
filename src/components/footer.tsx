import Link from "next/link"

import {FaLinkedin, FaGithub} from "react-icons/fa"

export const Footer = () => {
  return ( 
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{`© ${new Date().getFullYear()} `}
          <Link 
            href="/" 
            className="hover:underline"
            >
              Webster's
          </Link>
          . All Rights Reserved.
        </span>
        <div className="sm:flex sm:items-center sm:justify-between">       
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 sm:mr-8">              
              <Link href="#" className="hover:text-gray-600 text-white sm:text-2xl">
                <FaLinkedin/>
              </Link>
              <Link href="#" className="hover:text-gray-600 text-white sm:text-2xl">
                  <FaGithub/>
              </Link>
          </div>
      </div>
    </footer>
  )
}