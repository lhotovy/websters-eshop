"use client"
import { BaseSyntheticEvent, useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Login = () => {
    const session = useSession();
    const router = useRouter();    
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    useEffect(()=> {
        if (session?.status === "authenticated") {
            router.push("/dashboard");
        };
    });

    const loginUser = async (event: BaseSyntheticEvent) => {
        event.preventDefault();
        signIn("credentials", {...loginFormData, redirect: false})
            .then((callback)=> {
                if (callback?.error) {
                    toast.error(callback.error);   
                };

                if (callback?.ok && !callback?.error) {
                    toast.success("Logged in successfully!");
                };
        });             
    };
    
    return (
        <>
            <Header/>
            <div className="mt-48">      
                <h1 className="mx-auto text-center mt-24 text-2xl">
                    Login to Your Account
                </h1>
                <div className="inline-flex justify-center space-x-8 w-full mt-24 mx-auto">                   
                    <button onClick={()=> signIn("github")} className="border-2 bg-yellow-500 rounded-2xl text-black p-4 inline-flex items-center">
                        <FaGithub className="inline mr-4 text-2xl"/>
                        Login with Github
                    </button>
                    <button onClick={()=> signIn("google")} className="border-2 bg-purple-500 rounded-2xl text-black p-4 inline-flex items-center">
                        <FaGoogle className="inline mr-4 text-2xl"/>
                        Login with Google
                    </button>
                </div>    
                <form 
                    className='md:w-2/5 w-2/3 mx-auto md:mt-16 md:mb-24 mb-48'            
                    onSubmit={loginUser}
                >
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className="block">
                            <label 
                                htmlFor="email" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                            </label>
                            <input 
                                type="email" 
                                onChange={(event) => setLoginFormData({...loginFormData, email: event.target.value})}
                                value={loginFormData.email}  
                                id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="john.doe@gmail.com" 
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
                                onChange={(event) => setLoginFormData({...loginFormData, password: event.target.value})}
                                value={loginFormData.password}  
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
                            Login
                    </button>
                    <div className="mt-10">
                        <p>No account yet? 
                            <span className="text-blue-200">
                                    <Link className="inline-block ml-2 color-blue-200" href="/register">
                                Register now!
                            </Link>    
                            </span>                             
                        </p>
                    </div>
                </form>
            </div>
        </>           
    );
};

export default Login;