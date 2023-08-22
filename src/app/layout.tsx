import { ShopContextProvider } from '@/lib/context';
import './globals.css';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from '../lib/auth-provider';
import ToasterContext from '@/lib/toasterContext';
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Webster\'s Woodcrafts',
  description: 'This is an online shop with awesome woodcrafts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" sizes="any" />
        </head>
        <body className={`${inter.className} max-w-screen`}>
          <NextAuthProvider>           
            <ShopContextProvider>
               <ToasterContext/>
                  {children}                
            </ShopContextProvider>          
          </NextAuthProvider>  
        </body>
      </html>    
  );
};
