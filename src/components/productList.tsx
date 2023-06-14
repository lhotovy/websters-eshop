import Link from "next/link";
import React from 'react';

type Product = {
  id: number;
  title: string;
  name: string;
  image: string;
  info: string;
}
interface ProductListProps {
  products: Product[]
};

const ProductList: React.FC<ProductListProps> = ({products}) => {
  return (
    <div className="products m-auto mt-48  w-2/3 h-1/3 grid grid-cols-3 gap-6 justify-center">
      {products.map((product: any)=> {
        return (      
          <div key={product.id} className="product-container col-span-1 justify-center border-solid border-sky-500 border-2 rounded-xl p-6">
            <Link href={`/eshop/${product.title}`}>
                <img src={product.image} alt={product.name} className="w-64 m-auto text-center drop-shadow-xl rounded-xl" />
                <h5 className="text-center text-lg uppercase m-2">{product.name}</h5>
                <p className="text-center">{`${product.price} €`}</p>
            </Link>
          </div>          
      )})}
    </div>
  );
};

export default ProductList;
