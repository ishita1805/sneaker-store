import Footer from "./Footer"
import Grid from "../components/grid";
import Card from "../components/card";
import { DBContext } from "../context";
import products from "../content/products";
import { useContext, useMemo } from "react";
import Navigation from "../components/navigation";

const Wishlist = () => {
  const { wishlist } = useContext(DBContext);

  const dataset = useMemo(() => {
    if (!wishlist.length) return [];
    const productIdSet = new Set(wishlist.map(item => item.product_id));
    return products.filter(({ id }) => productIdSet.has(id));
  }, [wishlist])

  return (
    <div className="size-full flex flex-col items-center">
      <Navigation />
      <div className="px-12 py-24 min-h-[100vh] flex flex-col items-center w-full">
        <div className="mt-12 font-maharlika text-2xl">Wishboard</div>
          {wishlist.length ? <div className="my-4 text-lg text-center">
            Show off your style before anyone else. These kicks are too hot to forget
          </div> : null}
        <Grid variant="wishlist" className="flex flex-col my-12 overflow-auto" dataset={dataset} Element={Card} />
      </div>
      <Footer />
    </div>
  )
}

export default Wishlist