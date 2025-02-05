/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { DBContext } from "../context";

 
const Index = ({
  dataset,
  className,
  limit,
  Element,
  variant,
}: {
  dataset: any[],
  className?:string,
  limit?: number,
  Element: (props: any) => JSX.Element,
  variant?: "detail" | "grid" | "wishlist"
}) => {
  const navigate = useNavigate();

  const { wishlist } = useContext(DBContext);
  const wishlistSet = useMemo(() => {
    if (!wishlist.length) return  new Set();
    return new Set(wishlist.map(w => w.product_id));
  }, [wishlist])
  
  if (!dataset.length) return <div className="w-[65vw] font-thin text-lg my-12 min-h-[60vh] text-center">Can't find what you're looking for?  <span onClick={() => navigate('/design-your-own')} className="underline cursor-pointer underline-offset-2">Let's design something unique</span> ✨</div>
  
  return (
    <div className={`min-w-[65vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ${className}`}>
        {dataset.map((el, i) => {
            if(limit && i+1 > limit) return null;
            return <Element {...el} variant={variant} wishlisted={variant === 'wishlist' || wishlistSet?.has(el.id)} />
        })}
    </div>
  )
}

export default Index;
