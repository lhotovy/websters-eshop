"use client"
import { createContext, useState } from 'react';
import { products } from '@/data/products';
import { Cart, Context } from './types';

export const ShopContext = createContext<Context>({} as Context)

const getDefaultCart = () => {
  let cart: Cart = {}
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0
  }
  return cart;
};

export const ShopContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  const getCartTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if(cartItems[item]! > 0) {
        let itemInfo = products.find((product)=> product.id === Number(item));
        totalAmount += cartItems[item]! * itemInfo!.price;
      }
    }
    return totalAmount;
  };

  const getNumberOfItems = () => {
    let amountOfItems = 0
    for (const item in cartItems) {
      amountOfItems += cartItems[item]!
    }
    return amountOfItems;
  }

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]! + 1}));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]! - 1}));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  };

  const clearCartItem = (itemId: number) => {
    setCartItems((prev) => ({...prev, [itemId]: 0}));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getCartTotal, getNumberOfItems, clearCartItem, clearCart};

  return (
    <ShopContext.Provider
      value={contextValue}
    >
      {children}
    </ShopContext.Provider>
  );
};