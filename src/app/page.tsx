import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions); 

  return (  
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-12">
      <Header/>
      <Hero />
      <Footer />      
    </main>
  );
};
