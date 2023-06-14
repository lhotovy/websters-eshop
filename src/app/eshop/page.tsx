import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import  ProductList from "@/components/productList";
import { products } from "@/data/products";

export default function Page() {
  return (
    <>
      <Header/>
      <ProductList products={products}/>
      <Footer/>
    </>
  )
}