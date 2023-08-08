import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Hero } from '../components/hero';

export default function Home() {
  return (  
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-12">
      <Header/>
      <Hero />
      <Footer />      
    </main>
  );
};
