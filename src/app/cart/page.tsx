"use client"
import { CartItem } from '@/components/cartItem';
import { ShopContext } from '@/lib/context';
import { useContext } from 'react';
import { products } from '@/data/products';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Product } from '@/lib/types';

const CartContainer = () => {
  
  const {cartItems, getCartTotal} = useContext(ShopContext);
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
      <div className="checkout w-3/4">
        <p className='mb-5 mr-4 text-right tracking-wider'>Subtotal: €{totalAmount}</p>
        <div className='text-right'>          
          <button className='inline-block border rounded-2xl tracking-wide p-2 text-yellow-600 mx-2 bg-slate-800'><Link href="/eshop">Continue Shopping</Link></button>
          <button className='inline-block border rounded-2xl tracking-wide p-2 text-blue-white mx-2 bg-green-800'>Checkout</button>
        </div>
      </div>
        ) : (
          <h1 className='text-center uppercase text-lg mt-40'>Your cart is empty</h1>
        )}
    </div>
    </>
  )  
};

export default CartContainer;
