"use client"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import  ProductList from "@/components/productList";
import { products } from "@/data/products";
import { useState } from 'react';


const allCategories = ["All", "Home", "Art", "Free time"];

export default function Page() {

  const [categories, setCategories] = useState(allCategories);
  const [shopItems, setShopItems] = useState(products);
  
  const filterItems = (category: string) => {
    if (category === "All") {
      setShopItems(products);
      return;
    };
    const newProducts = products.filter((product)=> product.tags === category);
    setShopItems(newProducts);
  }
  return (
    <>
      <Header/>  
      <ProductList categories={categories} filterItems={filterItems} shopItems={shopItems} />
      <Footer/>
    </>
  )
}