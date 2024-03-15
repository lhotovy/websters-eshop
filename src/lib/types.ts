import { BaseSyntheticEvent } from 'react';
import { PrismaClient } from '@prisma/client';

export interface IFormSubmission {
    isError?: boolean
    isLoading?: boolean
};

export type FormData = {
    firstName: string
    lastName: string
    email: string
    textInput: string
};

export interface ProductParams {
    product: string
};

export interface IContactForm {
    handleSubmit?: (event: BaseSyntheticEvent) => {}   
    formData: FormData
    setData: (formData: FormData) => void
};

export type Product = {
    id: number
    title: string
    name: string
    image: string
    info: string
    price: number
    tags: string
};

export interface ProductListProps {
    categories: string[]
    shopItems: Product[]
    filterItems: (category: string) => void
};

export interface ITagsProps {
    categories: string[]
    filterItems: (category: string) => void
};

export type Cart = {
    [key: number]: number | undefined
};
  
export type Context = {
      cartItems: Cart
      addToCart: (itemId: number) => void
      removeFromCart: (itemId: number) => void
      updateCartItemCount: (newAmount: number, itemId: number) => void
      getCartTotal: () => number
      getNumberOfItems: () => number
      clearCartItem: (itemId: number) => void
      clearCart: () => void
};

export type NavLink = {
    name: string
    id: number
    href: string
    test: string
};

declare global {
    var prisma: PrismaClient | undefined;
};