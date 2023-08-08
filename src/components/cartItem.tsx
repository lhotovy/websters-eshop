import Link from "next/link";
import { ShopContext } from "@/lib/context";
import { useContext }  from "react";
import { Product } from "@/lib/types";
import Image from "next/image";

export const CartItem = ({data}: {data: Product}) => { 

    const {image, title, id, name} = data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return (      
        <div className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mx-auto mb-4 border rounded-2xl">
          <div className="pb-3 sm:pb-4 p-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0 mr-4">
                  <Image className="w-8 h-8 rounded-full" src={image} alt={name} width={50} height={50}></Image>                 
                </div>
                <Link href={`/eshop/${title}`}>
                  <div className="flex-1 inline-flex">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                      </p>          
                  </div>
                </Link>
                <div className="countHandler inline-flex text-right text-sm w-1/6 mx-4 font-semibold text-gray-900 dark:text-white">                
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input 
                      type="text" 
                      className="w-8 mx-2 text-blue-800 text-center" 
                      value={cartItems[id]} 
                      onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    /> 
                    <button onClick={() => addToCart(id)}> + </button>     
                </div>
                <div className="inline-flex items-right  text-sm dark:text-yellow-600 font-semibold text-gray-900">         
                  €{data.price * cartItems[id]!}
                </div>
              </div>
          </div>
        </div>   
    );
};


