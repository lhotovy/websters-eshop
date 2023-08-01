import { FormData } from "../contact/service";

export const sendMessage = async (dat: FormData) => {

    const endpoint = '/api/contact'
    const res = await fetch(endpoint, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:  JSON.stringify(dat)         
    });
    const data = await res.json()
    return data
}