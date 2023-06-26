"use client"
import ContactForm from '@/components/contactForm';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import React, { BaseSyntheticEvent } from 'react';

const handleSubmit = async (event: BaseSyntheticEvent) => {
   
    event.preventDefault();
  
    //Get data from the form.
    const formData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      textInput: event.target[3].value
    };
  
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(formData);
    const endpoint = '/api/contact'
  
    // Send the form data to API
    const response = await fetch(endpoint, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata
      });
      
    const result = await response.json();
    console.log("rsult", result)
    return result;
  }

export const Service = () => {
  return (
    <>
    <Header/>
    <ContactForm handleSubmit={handleSubmit} />
    <Footer/>      
  </>
  )
}