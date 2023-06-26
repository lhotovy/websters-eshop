import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { products } from "@/data/products";

interface ProductParams {
  product: string;
}

export default function Product({params}: {params: ProductParams}) {  
  const currentProduct = products.find((prod) => {
    return prod.title === params.product;
  });
  
  return (
    <>
      <Header/>
      <section className="container mx-auto w-2/3 h-vw">
          <h2 className="mt-64 text-center block text-xl mb-12">{currentProduct?.name}</h2>
          <div className="product-content grid grid-cols-2 gap-16">
            <p className="inline-block text-justify">{currentProduct?.info}</p>
            <img src={currentProduct?.image} alt={currentProduct?.title} className="inline-block text-right" />
          </div>          
      </section>
      <Footer/>
    </>

  )
}