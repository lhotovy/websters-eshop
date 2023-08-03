import { FormData } from "@/lib/types";

export const sendMessage = async (info: FormData) => {

    const endpoint = '/api/contact';
    const res = await fetch(endpoint, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:  JSON.stringify(info)         
    });
    const data = await res.json();
    return data;
};