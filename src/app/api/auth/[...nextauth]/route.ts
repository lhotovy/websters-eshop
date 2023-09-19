import NextAuth from "next-auth/next";
import prisma from "@/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import  CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
          clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
          clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string       
        }),
        GoogleProvider({
          clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
          clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string
        }),
        CredentialsProvider({           
            name: "credentials",
            credentials: {
              email: { label: "Email", type: "text", placeholder: "john.doe@gmail.com" },
              password: { label: "Password", type: "password" },
              username: { label: "Username", type: "text", placeholder: "John Smith" },
            },
            async authorize(credentials) {
              if(!credentials?.email || !credentials?.password) {
                throw new Error('Please enter an email and password')
            }

            // check to see if user exists
            const user = await prisma.user.findUnique({
                where: {
                    email: credentials?.email
                }
            });

            // if no user was found 
            if (!user || !user?.password) {
                throw new Error('No user found')
            }

            // check to see if password matches
            const passwordMatch = await bcrypt.compare(credentials?.password!, user.password)

            // if password does not match
            if (!passwordMatch) {
                throw new Error('Incorrect password')
            }

            return user;
             
            },
        })
    ],
    secret: "dfsgfsfg4h5546",
    session: {
      strategy: "jwt"
    },
    debug: process.env.NODE_ENV === "development",   
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};