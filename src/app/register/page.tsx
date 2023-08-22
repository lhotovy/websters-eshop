import { Metadata } from "next";
import RegisterService from "./service";

export const metadata: Metadata = {
    title: "Register - Webster's",
    description: "Register for an account at Wrbster's"
}

const Register = () => {
  return (
    <RegisterService/>
  );
};
export default Register;