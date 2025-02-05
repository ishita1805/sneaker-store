import Icon from "../components/icon"
import Navigation from "../components/navigation"
import products from "../content/products"
import { Product } from "../types"
import Footer from "./Footer"
import icons from '../components/icon/icons.json';
import { useContext, useState } from "react"
import Button from "../components/button"
import { DBContext } from "../context"

const CartElement = (props: Product) => {
  const [count, setCount] = useState<number>(1);
  const formatCost =(val: number) => {
      return val.toLocaleString();
  }
  const { removeFromCart } = useContext(DBContext);

  

  return (
  <div className="flex w-full flex-row items-start justify-start py-6 border-b-[1px] border-solid border-gray-200" onClick={() => removeFromCart(`porsche-911-sneakers-uk6-fm`)}>
    <img src={props.pictures[0]} className="lg:h-40 h-32 rounded-md aspect-square object-cover" />
    <div className="mx-6 flex flex-col flex-grow">
      <p className="lg:text-lg md:text-base font-maharlika">{props.label}</p>
      <p className="lg:text-base md:text-sm mt-2 font-thin">INR {formatCost(props.cost)}</p>
      <p className="lg:text-base md:text-sm mt-2 font-thin">Size: UK 5</p>
    </div>
    <div className="flex flex-row gap-4 items-center select-none mx-6 border-solid border-[1px] cursor-pointer border-gray-300 rounded-md py-[4px] px-2 text-sm">
    <Icon icon={icons.minus} className={"lg:h-4 lg:w-4 md:h-3 md:w-3 text-gray-500"} onClick={() => setCount((c: number) => Math.max(1, c-1))} />
    {count}
    <Icon icon={icons.add} className={"lg:h-4 lg:w-4 md:h-3 md:w-3 text-gray-500"} onClick={() => setCount((c: number) => c+1)} />
    </div>
    <p className="lg:text-lg md:text-base">INR {formatCost(count * props.cost)}</p>
    <Icon icon={icons.delete} className={"lg:h-6 lg:w-6 md:h-4 mg:w-4 cursor-pointer font-thin mx-6 text-gray-500"} />
  </div>
)}

const Cart = () => {
  return (
    <div className="relative size-full flex flex-col items-center justify-start">
      <Navigation />
      <div className="flex gap-12 min-h-[100vh] flex-row-reverse flex-wrap items-start justify-center px-12 py-12">
        <div className="lg:w-fit w-full sticky top-[4rem] pt-8 flex flex-col items-start justify-start bg-white">
          <h1 className="text-xl w-full">Order Summary</h1>
          <div className="w-full mt-8 py-6 flex flex-col items-start justify-start border-t-[1px] border-b-[1px] border-solid border-gray-200">
            <div className="lg:text-lg text-base font-thin"><span className="font-normal mr-2">Subtotal:</span> INR 24,000</div>
            <div className="text-sm mt-4 text-neutral-400">Enter pincode to check delivery</div>
            <input className="outline-none py-1 px-2 border-solid border-neutral-300 border-[1px] my-2 rounded-md" placeholder="Enter Pincode" type="number" />
            {/* <div className="text-sm text-red-500 max-w-[20vw]">We don't deliver to this pincode. Please <span>contact support</span></div> */}
            <div className="lg:text-lg text-base mt-4 font-thin"><span className="font-normal mr-2">Delivery:</span> Free</div>
          </div>
          <div className="lg:text-lg text-base mt-4 font-thin"><span className="font-normal mr-2">Total:</span> INR 24,360</div>
          <Button label="Checkout" size="lg" icon={icons.cart} onClick={() => {}} className="mt-4 w-full" />
        </div>
        
        <div className="lg:w-fit w-full lg:pt-12 pt-4 flex flex-col items-start justify-start"> 
          <h1 className="text-xl">My Cart</h1>
          <div className="mt-8 w-full flex flex-col gap-4 items-start justify-start border-t-[1px] border-solid border-gray-200">
            {
              products.map((el, i) => {
                if (i > 2) return;
                return <CartElement {...el} />
              })
            }
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Cart
