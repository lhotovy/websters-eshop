"use client"
import ContactForm from '@/components/contactForm';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import React, { BaseSyntheticEvent, useState } from 'react';
import { sendMessage } from '@/lib/helpers';
import { useRouter } from 'next/navigation';

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
    const response = await sendMessage(formData);   
    
    if (response) {
      setIsSuccess(true);
 
      setTimeout(()=> {
        router.push("/")
      }, 5000);
      
      
    } else {
      setIsSuccess(false);
    }    
    return response;    
  };

  return (
    <>
      <Header/>
      <ContactForm handleSubmit={handleSubmit} isSuccess={isSuccess} formData={formData} setData={setFormData} />
      <Footer/>    
    </>
  )
}