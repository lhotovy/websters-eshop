import { ShopContextProvider } from '@/lib/context';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
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
          <ShopContextProvider>
            {children}
          </ShopContextProvider>
        </body>
      </html>    
  );
};
