import { Metadata } from "next";
import ContactService from "./service";

export const metadata: Metadata = {
  title: 'Contact - Webster\'s Woodcrafts',
  description: 'Contact us to get more information about products, delivery and so on.',
};

const Contact = () => {

    return (     
        <ContactService />
    );
};
export default Contact;