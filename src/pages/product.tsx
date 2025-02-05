/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "./Footer";
import Navigation from "../components/navigation";
import Testimonials from "./Testimonials";
import Card from "../components/card";
import products from "../content/products";
import { useParams } from "react-router-dom";
import Button from "../components/button";
import icons from "../components/icon/icons.json";
import Dropdown from "../components/dropdown";
import { useContext, useMemo, useState } from "react";
import Accordion from "../components/accordion";
import Modal from "../components/modal";
import Table from "../components/Table";
import { DBContext } from "../context";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [size, setSize] = useState(product?.sizes[0] ?? { label: '', id: ''});
  const [showGuide, setGuide] = useState<boolean>(false);
  const [includeProduct, setIncludeProduct] = useState<boolean>(false);
  const [metric, setMetric] = useState<string>(product?.metric[0] ?? 'cm');

  const formatCost =(val: number) => {
      return val.toLocaleString();
  }

  const { wishlist, addToWishlist, removeFromWishlist, addToCart } = useContext(DBContext);
  const wishlistSet = useMemo(() => {
    if (!wishlist.length) return  new Set();
    return new Set(wishlist.map(w => w.product_id));
  }, [wishlist])

  return (
    <div className="size-full">
      <Navigation />
      <div className="w-full flex flex-row gap-8 md:gap-16 items-start justify-center mt-12 px-12 py-28 flex-wrap">
        {product && (
          <Card
            className="lg:w-[50vh] lg:h-[50vh]"
            {...product}
             variant="detail"
          />
        )}
        <div className="w-[50vh] flex flex-col cursor-pointer">
          <div
            onClick={() => setGuide((show) => !show)}
            className="flex flex-row items-center text-sm mb-4 text-neutral-500 underline underline-offset-2"
          >
            Size Guide
          </div>
          {showGuide && (
            <Modal onClose={() => setGuide(false)}>
              <div className="w-[90vw] lg:w-[60vw] max-h-[60vh] overflow-y-auto p-4">
                <p className="text-sm text-neutral-500 mb-4">
                  Nike Unisex Footwear Size Chart
                </p>
                <div className="cursor-pointer flex border-solid border-[1px] border-neutral-200 flex-row items-center gap-2 rounded-full bg-neutral-100 w-fit mb-4">
                    <div onClick={() => setMetric(product?.metric[0] ?? '')} className={`min-w-8 ${metric === product?.metric[0] ? 'bg-white' : ''} px-2 py-1 rounded-full`}>{product?.metric[0]}</div>
                    <div onClick={() => setMetric(product?.metric[1] ?? '')}  className={`min-w-8 ${metric === product?.metric[1] ? 'bg-white' : ''} px-2 py-1 rounded-full`}>{product?.metric[1]}</div>
                </div>
                <Table colHeaders={product?.sizeGuide(metric).headers} data={product?.sizeGuide(metric).data ?? []} />
                <div className="font-medium text-base">
                  How to measure foot length
                </div>
                <ul className="font-thin text-sm mb-4">
                  <li className="ml-3 my-3">
                    Tape a piece of paper to a hard, flat surface, ensuring the
                    paper doesn't slip.
                  </li>
                  <li className="ml-3 my-3 ">
                    Stand on the paper, feet shoulder width apart and weight
                    evenly balanced (only one foot will be on the paper).
                  </li>
                  <li className="ml-3 my-3 ">
                    With a pen or pencil pointed straight down, have a friend or
                    partner assist you by marking the tip of the big toe and the
                    outermost part of the heel.
                  </li>
                  <li className="ml-3 my-3 ">
                    Once the marks are recorded, step off the paper and use a
                    ruler or tape measure to measure the distance between the
                    two points. This measurement represents the length of the
                    foot.
                  </li>
                  <li className="ml-3 my-3 ">
                    Repeat the process with the other foot. Please note that it
                    is common for one foot to be a slightly different length to
                    the other.
                  </li>
                  <li className="ml-3 my-3 ">
                    Apply the longer of the two measurements to our size chart
                    to find the right correlating size for the recorded foot
                    length. If the measurement is between sizes, we recommend
                    sizing up.
                  </li>
                </ul>
              </div>
            </Modal>
          )}
          <div className="font-maga text-base">{product?.label}</div>
          <div className="text-lg font-semibold font-maga mt-1 mb-4">
            <span className={product?.discount ? 'line-through text-gray-800' : ''}>
            INR {formatCost((!includeProduct ? product?.cost : product?.designCost) ?? 0)}
            </span>
            {
              product?.discount 
              && <span className="ml-2 text-red-500 font-normal">INR {formatCost(
                ((!includeProduct ? product?.cost  : product?.designCost) ?? 0) * (1 - product!.discount!)
              )}</span>
            }
          </div>
          <p className="font-thin text-base mb-4">
            {product?.description}
          </p>
          <div className="flex flex-col gap-1 mb-8 text-base">
            <p className="font-medium mb-1">Product Details</p>
            <p className="font-thin"><span className="font-normal">Paints used:</span> Angelus</p>
            <p className="font-thin"><span className="font-normal">Longevity:</span> The artwork lasts as long as the life of the product.</p>
            <p className="font-thin"><span className="font-normal">Coating:</span> The artwork is sealed with a water-resistant varnish which makes them scratch resistant.</p>
          </div>

          <p className="font-thin text-sm mb-2 text-neutral-500">All creations are purely works of fan art and not mass produced. We are not affiliated with any brands.</p>
         
          <Dropdown
            selected={size}
            onSelect={setSize}
            values={product?.sizes || []}
          />
          <label onClick={() => setIncludeProduct((i) => !i)} className="flex flex-row gap-4 my-4 cursor-pointer text-base">
            <input value={includeProduct as any} type="checkbox"/>
              I will provide my own product for customisation.
          </label>
          <div className="flex flex-row gap-4 my-2 cursor-pointer w-full">
            <Button
              onClick={() => {
                addToCart(product!.id, size, 'fm');
              }}
              label="Buy Now"
              size="sm"
              className="flex-1"
              icon={icons.cart}
            />
           {wishlistSet?.has(product?.id) 
              ? <Button
                  onClick={() => { removeFromWishlist(product!.id)}}
                  label="Liked"
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  icon={icons.wishlist_full}
                />
            : <Button
                onClick={() => {addToWishlist(product!.id)}}
                label="Wishlist"
                variant="secondary"
                size="sm"
                className="flex-1"
                icon={icons.wishlist}
              />
            }
          </div>
          <Accordion items={[
                { title: 'Care', content: <div className="flex flex-col gap-2">
                    <li>Store in a cool, dry place away from direct sunlight.</li>
                    <li>Avoid machine washing the products as that can cause the colour to strip/fade.</li>
                    <li>Clean using a dry brush first.</li>
                    <li>Mix a small amount of mild, non-abrasive soap (such as dish soap or castile soap) with warm water. Dip a clean microfibre or soft cloth into the solution, wring out any excess water, and gently dab the stained areas.</li>
                    <li>Optional: Use shoe protection kits</li>
                </div>},
                { title: 'Shipping & Delivery', content: <div className="flex flex-col gap-2">
                    Turnaround time for creation is 2-4 weeks from when the order is received.
                    <div>This ensures that your custom sneaker is created with the best global standards, and complete attention to detail.</div>
                    <div>If you need to expedite your order due to an event, please email ishitakabra18@gmail.com</div>
                    <div>We ship worldwide; Shipping Charges:</div>
                    <div>Free shipping for orders above INR 15,000</div>
                    <div>For other orders: Shipping added at Checkout.</div>
                </div>
                },
                { title: 'Returns', content: 'We do not offer refunds or exchanges, as all sneakers are made to order.' },
                { title: 'Sourcing Sneakers', content: <div className="flex flex-col gap-2">
                    <div>You can choose to provide the sneaker or we can source it on your behalf from Authorized Retailers and trusted sellers.</div>
                    <div>Each shoe is carefully inspected by our experts for any quality issues and authenticity, before being chosen for your custom.</div>
                </div>}
            ]}
            />
        </div>
      </div>
      <Testimonials label="Reviews" />
      <Footer />
    </div>
  );
};

export default Product;
