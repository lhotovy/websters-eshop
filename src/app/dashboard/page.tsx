"use client"
import { Header } from "@/components/header";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Dashboard = () => {

    const { data: session } = useSession();
    const router = useRouter();
    
    useEffect(()=> {
        if (!session || !session?.user) {
            router.push("/");
        };
    });       

    return (
        <>
            <Header/>
            <div className="content flex items-center flex-col md:text-2xl space-y-4 justify-center mt-64 text-white">
                <div>
                    Hi, {session?.user?.name}
                </div>
                <p>This is you personal page. You'll be able to do more here in the future. For now just enjoy our 
                    <span className="ml-3 text-blue-300">  
                        <Link href="/eshop">
                            e-shop
                        </Link>
                    </span>                  
                !
                </p>              
            </div>            
        </>    
    );
};

export default Dashboard;