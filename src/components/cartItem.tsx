import Link from "next/link";
import { ShopContext } from "@/lib/context";
import { useContext }  from "react";
import { Product } from "@/lib/types";
import Image from "next/image";

export const CartItem = ({data}: {data: Product}) => { 

    const {image, title, id, name} = data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount, clearCartItem} = useContext(ShopContext);

    return (      
        <div className="max-w-md md:w-1/2 w-11/12  divide-y divide-gray-200 dark:divide-gray-700 mx-auto mb-4 border rounded-2xl">
          <div className="pb-3 sm:pb-4 p-4">
              <div className="flex items-center ">
                <div className="nameAndPic w-1/2 flex items-center">
                  <div className="flex-shrink-0 mr-4 md:inline-flex hidden">
                    <Image className="w-8 h-8 rounded-full" src={image} alt={name} width={50} height={50}/>               
                  </div>
                  <Link href={`/eshop/${title}`}>
                    <div className="flex-1 inline-flex">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {name}
                        </p>          
                    </div>
                  </Link>
                </div>                
                <div className="countHandler inline-flex text-right text-sm w-1/5 mx-6 font-semibold text-gray-900 dark:text-white">                
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input 
                      type="text" 
                      className="w-8 mx-2 text-blue-800 text-center" 
                      value={cartItems[id]} 
                      onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    /> 
                    <button onClick={() => addToCart(id)}> + </button>     
                </div>
                <div data-test="itemTotal" className="inline-flex items-right text-sm dark:text-yellow-600 font-semibold text-gray-900">         
                  €{data.price * cartItems[id]!}
                </div>
                <div className="trash-icon inline-flex ml-12">
                  <button onClick={() => clearCartItem(id)}>
                    <Image className="w-6 h-6" src="/trashIcon.png" alt="trash" width={50} height={50} />
                  </button>                            
                </div>
              </div>
          </div>
        </div>   
    );
};