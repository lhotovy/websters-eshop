"use client"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductList } from "@/components/productList";
import { products } from "@/data/products";
import { useState } from 'react';
import { Product } from "@/lib/types";

const allCategories = ["All", "Home", "Art", "Free time"];

const EshopService = () => {

  const [categories, setCategories] = useState(allCategories);
  const [shopItems, setShopItems] = useState(products);
  
  const filterItems = (category: string) => {
    if (category === "All") {
      setShopItems(products);
      return;
    };
    const newProducts = products.filter((product: Product)=> product.tags === category);
    setShopItems(newProducts);
  }
  return (
    <>
      <Header/>  
      <ProductList categories={categories} filterItems={filterItems} shopItems={shopItems} />
      <Footer/>
    </>
  );
};
export default EshopService;