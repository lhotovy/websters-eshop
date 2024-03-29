import Link from "next/link";
import React, { useContext } from 'react';
import Tags from "./tags";
import Image from "next/image";
import { ShopContext } from "@/lib/context";
import { ProductListProps, Product } from "@/lib/types";

export const ProductList = ({categories, shopItems, filterItems}: ProductListProps) => {

const {cartItems, addToCart, getNumberOfItems} = useContext(ShopContext);
const cartItemsAmount = getNumberOfItems(); 

  return (
    <div className="mt-32 max-w-screen">
      <div className="subFoot flex justify-between w-2/3 mx-auto relative">
        <Tags categories={categories} filterItems={filterItems} />
        <Link href="/cart">
          <Image 
                src="/cartIcon.png" 
                className="mr-10 inline-flex items-end" 
                alt="cart"
                width={35}
                height={35}
              />
              <p className="counter bg-red-700 text-white rounded-full text-sm text-center w-5 absolute inline-block right-8 top-5">{cartItemsAmount}</p>
        </Link>   
      </div>   
      <section className="products m-auto max-w-screen mt-10 mb-32 w-2/3 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 md:gap-6 gap-3 justify-center">
          {shopItems.map((product: Product) => {
            const cartItemAmount = cartItems[product.id]
            return (      
              <div key={product.id} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href={`/eshop/${product.title}`}>
                    <Image 
                      className="md:p-8 p-6 rounded-t-lg" 
                      src={product.image} 
                      alt={product.name}
                      width={500}
                      height={300} 
                    />
                </Link>
                <div className="px-5 pb-5">
                    <Link href={`/eshop/${product.title}`}>
                        <h5 className="text-2xl text-center font-semibold tracking-wider text-gray-900 dark:text-white pb-4">{product.name}</h5>
                    </Link>                  
                       <div className="flex items-center mt-2.5 mb-5">
                          <svg aria-hidden="true" className="md:w-5 md:h-5 w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg aria-hidden="true" className="md:w-5 md:h-5 w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg aria-hidden="true" className="md:w-5 md:h-5 w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg aria-hidden="true" className="md:w-5 md:h-5 w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg aria-hidden="true" className="md:w-5 md:h-5 w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <span className="bg-blue-100 text-blue-800 md:inline hidden text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="md:text-xl text-base font-bold text-gray-900 dark:text-white">{`€ ${product.price}`}</span>
                            <button onClick={() => addToCart(product.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-sm text-xs md:px-5 md:py-2.5 px-2 py-1.5 text-center dark:bg-amber-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart {cartItemAmount! > 0 && <>({cartItemAmount})</>}</button>
                        </div>                                    
                </div>
              </div>   
            )
          })}             
      </section>    
    </div>
  )};