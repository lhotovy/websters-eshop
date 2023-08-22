import { Metadata } from "next";
import  EshopService from "./service";

export const metadata: Metadata = {
  title: ' E-shop - Webster\'s',
  description: 'Webster\'s E-Shop',
};

export default function Eshop() {
  return (
    <EshopService/>
  )
}