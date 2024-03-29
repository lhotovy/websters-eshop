import React from 'react';
import { IContactForm } from '@/lib/types';

const ContactForm = ({handleSubmit, formData, setData}: IContactForm) => { 
     
    return (
        <>
            <form 
                className='md:w-2/5 w-2/3 m-auto md:mt-48 mt-32 md:mb-24 mb-48' 
                method='POST' 
                onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label 
                            htmlFor="first_name" 
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                First name
                        </label>
                        <input 
                            type="text" 
                            onChange={(event) => setData({...formData, firstName: event.target.value})} 
                            id="first_name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="John" 
                            required
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor="last_name" 
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Last name
                        </label>
                        <input 
                            type="text" 
                            onChange={(event) => setData({...formData, lastName: event.target.value})} 
                            id="last_name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Doe" 
                            required
                        />
                    </div>                        
                </div>
                <div className="mb-6">
                    <label 
                        htmlFor="email" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email address
                    </label>
                    <input 
                        type="email" 
                        onChange={(event) => setData({...formData, email: event.target.value})} 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="john.doe@company.com" 
                        required
                    />
                </div>           
                <div className="mb-6">
                    <label 
                        htmlFor="message" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your message
                    </label>
                    <textarea 
                        id="message" 
                        onChange={(event) => setData({...formData, textInput: event.target.value})} 
                        rows={5} 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="What would you like to tell us..">                      
                    </textarea>
                </div>
                <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit
                </button>
            </form>   
        </>    
    );
};

export default ContactForm;