"use client"
import { Header } from '@/components/header';
import { useRouter } from 'next/navigation';
import { BaseSyntheticEvent, useState } from "react";
import { toast } from 'react-hot-toast';

const RegisterService = () => {
    const router = useRouter();
    const [registerFormData, setRegisterFormData] = useState({
        name: "",
        email: "",
        password: ""      
    });

    const registerUser = async (event: BaseSyntheticEvent) => {
        event.preventDefault();
        const res = await fetch("api/register", 
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body:  JSON.stringify(registerFormData)         
            });
        const data = await res.json();

        if (data) { 
            toast.success("User has been registered!");
            router.push("/login");            
        } else {
            toast.error("Something went wrong!");            
        };        
    };

  return (
    <>      
        <Header/>
        <div className="mt-48">  
            <h1 className="mx-auto text-center mt-24 text-2xl">
                Register for an Account
            </h1>
            <form 
                className='md:w-2/5 w-2/3 m-auto md:mt-24 mt-32 md:mb-24 mb-48'           
                onSubmit={registerUser}
            >
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="block">
                        <label 
                            htmlFor="name" 
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Username
                        </label>
                        <input 
                            type="text"
                            name="name" 
                            onChange={(event) => setRegisterFormData({...registerFormData, name: event.target.value})} 
                            value={registerFormData.name}
                            id="name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="John" 
                            required
                        />
                    </div>         
                    <div className="block">
                        <label 
                            htmlFor="email" 
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                        </label>
                        <input 
                            type="email"
                            name="email" 
                            onChange={(event) => setRegisterFormData({...registerFormData, email: event.target.value})} 
                            value={registerFormData.email}
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="John.doe@gmail.com" 
                            required
                        />
                    </div>
                    <div className="block">
                        <label 
                            htmlFor="password" 
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                        </label>
                        <input 
                            type="password"
                            name="password" 
                            onChange={(event) => setRegisterFormData({...registerFormData, password: event.target.value})}
                            value={registerFormData.password} 
                            id="password" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Doe" 
                            required
                        />
                    </div>                        
                </div>            
                <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Register
                </button>
            </form>
        </div>
    </>          
  );
};

export default RegisterService;