"use client"
import ContactForm from '@/components/contactForm';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import React, { BaseSyntheticEvent, useState } from 'react';
import { sendMessage } from '../lib/helpers';
import { useRouter } from 'next/navigation';

export interface IFormSubmission {
  isError?: boolean;
  isLoading?: boolean;
}

export type FormData = {
  firstName: string
  lastName: string
  email: string
  textInput: string
};    

export const Service = () => {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textInput: ""
  });
  
  const handleSubmit = async(event: BaseSyntheticEvent) => {
    event.preventDefault();
    const res = await sendMessage(formData);
    console.log(res);    
    
    if (res) {
      setIsSuccess(true);
 
      setTimeout(()=> {
        router.push("/")
      }, 5000)
      
      
    } else {
      setIsSuccess(false)
    }    
    return res    
  }

  return (
    <>
      <Header/>
      <ContactForm handleSubmit={handleSubmit} isSuccess={isSuccess} formData={formData} setData={setFormData} />
      <Footer/>    
    </>
  )
}