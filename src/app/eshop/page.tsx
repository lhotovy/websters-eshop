import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import  ProductList from "@/components/productList";
import { products } from "@/data/products";
import Tags from "@/components/tags";

export default function Page() {
  return (
    <>
      <Header/>
      <Tags/>
      <ProductList products={products}/>
      <Footer/>
    </>
  )
}