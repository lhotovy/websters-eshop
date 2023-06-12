import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { products } from "@/data/products";

export default function Product({params}: any) {  
  const currentProduct = products.find((prod) => {
    return prod.title === params.product;
  });  
  
  return (
    <>
      <Header/>
      <h2 className="mt-64 flex justify-center items-center text-lg">{currentProduct?.name}</h2>
      <Footer/>
    </>

  )
}