"use client"
import { Header } from "@/components/header";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import EshopButton from "@/components/eshopButton";

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
                <p className="md:w-4/5 md:text-center w-2/3 text-justify">
                    This is your personal page. You'll be able to do more here in the future. For now just enjoy our e-shop!              
                </p>
                <EshopButton />              
            </div>            
        </>    
    );
};

export default Dashboard;