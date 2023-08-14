import EshopButton from "@/components/eshopButton";
import { Header } from "@/components/header"

const Checkout = () => {
  return (
    <div className="flex justify-center flex-col min-h-screen items-center">
      <Header />
      <div className="flex items-center justify-center md:w-full w-2/3 text-justify md:text-xl text-lg">
        Sorry, we do not have checkout process deployed yet. For now, just enjoy experience from out E-shop UI.
      </div>
      <EshopButton />
    </div>

  )
}
export default Checkout;