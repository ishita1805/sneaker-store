 import { useContext, useState } from "react"
import Icon from "./icon"
import icons from "./icon/icons.json"
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { DBContext } from "../context";

interface Props extends Product {
    variant?: "detail" | "grid" 
    wishlisted?: boolean,
    className?: string,
}

const Index = (_el: Props) => {
    const el = {
        variant: 'grid',
        wishlisted: false,
        ..._el,
    }
    const navigate = useNavigate();
    const [selected, setSelected] = useState<number>(0);
    const { addToWishlist, removeFromWishlist } = useContext(DBContext)

    const movePicture = (op: number) => {
        setSelected((s) => ((s + op  + (el.pictures.length)) % (el.pictures.length)))
    }

    const formatCost =(val: number) => {
        return val.toLocaleString();
    }

    return (
        <div className={`flex flex-col group items-center justify-center cursor-pointer ${el.className}`}>
            <div className={`bg-purple-50 relative ${el.variant === 'detail' ? 'max-w-[50vw]' : 'max-w-[40vh]'}`} key={el.id}>
                <img 
                    src={el.pictures[selected]}
                    className='w-full h-full object-center aspect-square object-cover rounded-md'
                    onClick={() => {
                        if(el.variant === 'detail') {
                            movePicture(1);
                            return;
                        };
                        navigate(`/product/${el.id}`);
                    }}
                />
                {el.limited && <div className="p-2 rounded-tl-md text-sm bg-red-500 text-white absolute top-0 left-0">Early Bird Offer</div>}
                <Icon onClick={() => {
                    movePicture(-1)
                }} icon={icons.more_left} className="z-50 hidden group-hover:flex h-8 w-8 absolute bg-white rounded-full top-[45%] left-4 -translate-y-[50%]" />
                <Icon onClick={() => {
                    movePicture(+1)
                }} icon={icons.more_right} className="z-50 hidden group-hover:flex h-8 w-8 absolute bg-white rounded-full top-[45%] right-4 -translate-y-[50%]" />
                <div className="flex flex-row absolute bottom-4 left-[50%] -translate-x-[50%] gap-2">
                   {el.pictures.map((_, i) => {
                    if (i > 2) return null;
                    return  <div className={`h-2 w-2 rounded-full ${i === selected || (selected > 1 && i == 2) ? 'bg-white' : 'bg-gray-300'}`}></div>;
                   })}
                </div>
            </div>
           {el.variant !== 'detail' && <div className="flex flex-col items-center justify-center">
                <h1 className='group-hover:hidden text-base lg:text-base font-normal mt-4 text-center'>{el.label}</h1>
                <div className='group-hover:hidden text-base lg:text-base font-semibold text-center'>
                    <span className={el?.discount ? 'line-through text-gray-800' : ''}>
                        INR {formatCost(el?.cost ?? 0)}
                    </span>
                    {
                    el?.discount 
                    && <span className="ml-2 text-red-500 font-normal">
                            INR {formatCost((el?.cost ?? 0) * (1 - el!.discount!))}
                        </span>
                    }
                </div>
            </div>}
            {el.variant !== 'detail' && <div className="mt-6 hidden flex-row items-center gap-4 justify-center group-hover:flex">
               <Button onClick={() => {
                navigate(`/product/${el.id}`);
               }} label="Buy Now" size="sm" icon={icons.cart}/>
               {
                el.wishlisted
                    ? <Button onClick={() => {removeFromWishlist(el.id)}} label="Liked" variant="primary" size="sm" icon={icons.wishlist_full}/>
                    : <Button onClick={() => {addToWishlist(el.id)}} label="Wishlist" variant="secondary" size="sm" icon={icons.wishlist}/>
                }
            </div>}
        </div>
    )
}

export default Index
