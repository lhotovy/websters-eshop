import ContactForm from '@/components/contactForm';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import React from 'react';

export const metadata = {
  title: 'Contact - Webster\'s Woodcrafts',
  description: 'Contact us to get more information about products, delivery and so on.',
}

const Contact: React.FC = () => {
    // const handleSubmit = async (event: any) => {
    //     // Stop the form from submitting and refreshing the page.
    //     event.preventDefault()
     
    //     // Get data from the form.
    //     const data = {
    //       first: event.target.first.value,
    //       last: event.target.last.value,
    //     }
     
    //     // Send the data to the server in JSON format.
    //     const JSONdata = JSON.stringify(data)
     
    //     // API endpoint where we send form data.
    //     const endpoint = '/api/form'
     
    //     // Form the request for sending data to the server.
    //     const options = {
    //       // The method is POST because we are sending data.
    //       method: 'POST',
    //       // Tell the server we're sending JSON.
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       // Body of the request is the JSON data we created above.
    //       body: JSONdata,
    //     }
     
    //     // Send the form data to our forms API on Vercel and get a response.
    //     const response = await fetch(endpoint, options)
     
    //     // Get the response data from server as JSON.
    //     // If server returns the name submitted, that means the form works.
    //     const result = await response.json()
    //     alert(`Is this your full name: ${result.data}`)
      //}
      return (
        // We pass the event to the handleSubmit() function on submit.
        <>
          <Header/>
          <ContactForm />
          <Footer/>      
        </>
      )
};

export default Contact;
