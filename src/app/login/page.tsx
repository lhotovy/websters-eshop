import { Metadata } from "next";
import LoginService from "./service";

export const metadata: Metadata = {
    title: "Login - Webster's",
    description: "Login to your Webster's aacount"
};

export default function Login() {
  return (
    <LoginService/>
  );
};