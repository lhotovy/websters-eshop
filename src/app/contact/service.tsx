"use client"
import ContactForm from '@/components/contactForm';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import React, { BaseSyntheticEvent, useState } from 'react';
import { sendMessage } from '@/lib/helpers';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const ContactService = () => {
  const router = useRouter()
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
      toast.success(`Thank you, ${formData.firstName}. We have received your message!`, {duration: 4000});
 
      setTimeout(()=> {
        router.push("/")
      }, 5000);   
    } else {
      toast.error("Something went wrong.");
    }
    return response;
  };

  return (
    <>
      <Header/>
      <ContactForm handleSubmit={handleSubmit} formData={formData} setData={setFormData} />
      <Footer/>    
    </>
  );
};
export default ContactService;