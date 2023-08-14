/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {  
        NEXT_PUBLIC_G_KEY: process.env.NEXT_PUBLIC_G_KEY,
        NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
        NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
        NEXT_PUBLIC_GITHUB_ID: process.env.NEXT_PUBLIC_GITHUB_ID,
        NEXT_PUBLIC_GITHUB_SECRET: process.env.NEXT_PUBLIC_GITHUB_SECRET,
        NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
        NEXT_PUBLIC_GOOGLE_SECRET: process.env.NEXT_PUBLIC_GOOGLE_SECRET 
    }      
}

module.exports = nextConfig
