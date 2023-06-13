import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { products } from "@/data/products";

// export async function generateStaticParams() {    //this should generate products statically improving performance
//   const items = ["route1", "route2"];

//   return products.map((item)=> {
//     return {
//       product: item
//     }
//   })
// }


export default function Product({params}: any) {  
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