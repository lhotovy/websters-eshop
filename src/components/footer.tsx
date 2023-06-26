import Link from "next/link"


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
        <div className="flex w-1/2 space-x-6 sm:justify-center sm:mt-0">
                <Link 
                  href="#" 
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <i className="fa-brands fa-linkedin px-4 h-10"/>
                    <span className="sr-only">LinkedIn page</span>
                </Link>             
                <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <i className="fa-brands fa-github text-white h-10"/>
                  <span className="sr-only">GitHub account</span>
                </Link>
            </div>
    </footer>
  )
}