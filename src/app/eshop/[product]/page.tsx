import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { products } from "@/data/products";
import Image from "next/image";
import { Product, ProductParams } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "See details of our wonderful product",
};

export default function Product({params}: {params: ProductParams}) {  
  const currentProduct = products.find((prod: Product) => {
    return prod.title === params.product;
  });

  metadata.title = `${currentProduct?.name} - Webster\'s`;

  return (
    <>
      <Header/>
      <section className="container mx-auto w-2/3 h-vw">
          <h2 className="md:mt-64 mt-32 uppercase block md:text-left text-center text-2xl text-slate-300 mb-12">{currentProduct?.name}</h2>
          <div className="product-content grid md:grid-cols-2 grid-cols-1 gap-16">
            <p className="md:inline-block block text-justify">{currentProduct?.info}</p>
            <Image 
              src={currentProduct?.image!} 
              alt={currentProduct?.title!} 
              className="md:inline-block block text-right"
              width={500}
              height={300} />
          </div>          
      </section>
      <Footer/>
    </>
  );
};