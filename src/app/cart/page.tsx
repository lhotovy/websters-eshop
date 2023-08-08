"use client"
import { CartItem } from '@/components/cartItem';
import { ShopContext } from '@/lib/context';
import { useContext } from 'react';
import { products } from '@/data/products';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Product } from '@/lib/types';

const CartContainer = () => {
  
  const {cartItems, getCartTotal, clearCart} = useContext(ShopContext);
  const totalAmount = getCartTotal();

  return (
    <>
    <Header/>
    <div className="cart">
      <div className="mb-10">
        <div>
          <h1 className='cart-heading text-center text-2xl mt-28 uppercase'>Your cart Items</h1>
        </div>
        <div className="cartItems mt-24">
          {products.map((product: Product) => {      
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product}/>
            }
          })}
        </div>
      </div>
      {totalAmount > 0 ? (
      <div className="checkout w-3/4 md:mx-0 mx-auto">
        <p className='mb-5 md:mr-4 md:text-right text-center tracking-wider'>Subtotal: €{totalAmount}</p>
        <div className='text-right'>
          <button className='inline-block border-2 rounded-2xl tracking-wide p-2 text-white bg-red-700 mx-2' onClick={() => clearCart()}>Clear Cart</button>          
          <button className='inline-block border-2 rounded-2xl tracking-wide p-2 text-yellow-600 mx-2 bg-slate-800'><Link href="/eshop">Continue Shopping</Link></button>
          <button className='inline-block border-2 rounded-2xl tracking-wide p-2 text-blue-white mx-2 bg-green-800'>Checkout</button>
        </div>
      </div>
        ) : (
          <>
            <h1 className='text-center uppercase text-lg mt-40'>Your cart is empty</h1>
            <div className='flex justify-center mt-4'>  
              <Link 
                href="/eshop" 
                className="px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Go to E-shop
              </Link>
            </div>          
          </>  
        )}
    </div>
    </>
  )  
};

export default CartContainer;
