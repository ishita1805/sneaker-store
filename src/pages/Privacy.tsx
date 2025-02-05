 
import { useSearchParams } from "react-router-dom"
import Accordion from "../components/accordion"
import Navigation from "../components/navigation"
import Footer from "./Footer"
import { useCallback } from "react"

const Privacy = () => {
    const [params] = useSearchParams();

    const list = useCallback(() => {
        const section = params.get('section');
        return [
            {   title: 'Care', 
                open: section === 'all' ? true : false,
                content: <div className="flex flex-col gap-2">
                    <div className="font-normal">Sneakers</div>
                    <ul className="flex flex-col ml-4 gap-2">
                        <li>Store in a cool, dry place away from direct sunlight.</li>
                        <li>Avoid machine washing the products as that can cause the colour to strip/fade.</li>
                        <li>Clean using a dry brush first.</li>
                        <li>Mix a small amount of mild, non-abrasive soap (such as dish soap or castile soap) with warm water. Dip a clean microfibre or soft cloth into the solution, wring out any excess water, and gently dab the stained areas.</li>
                        <li>Optional: Use shoe protection kits</li>
                    </ul>
                    <div className="font-normal">Apparel</div>
                    <ul className="flex flex-col ml-4 gap-2">
                        <li>Hand-wash only.</li>
                        <li>Avoid Ironing directly over the paint. Invert the item inside-out or cover it with a muslin cloth before applying heat.</li>
                    </ul>
                </div>
            },
            {   
                title: 'Shipping & Delivery',
                open: section === 'shipping-payment' ? true : false,
                content: <div className="flex flex-col gap-2">
                    <div className="font-normal">Sneakers</div>
                    <ul className="flex flex-col ml-4 gap-2">
                        <li>Turnaround time for creation is 2-4 weeks from when the order is received.</li>
                        <li>This ensures that your custom sneaker is created with the best global standards, and complete attention to detail.</li>
                        <li>We ship worldwide; Shipping Charges:</li>
                        <li>Free shipping for orders above INR 15,000</li>
                        <li>For other orders: Shipping added at Checkout.</li>
                    </ul>
                    <div className="font-normal">Apparel</div>
                    <ul className="flex flex-col ml-4 gap-2">
                        <li>Turnaround time for creation is 2 weeks from when the order is received.</li>
                        <li>This ensures that your apparel is created with the best global standards, and complete attention to detail.</li>
                        <li>We ship worldwide; Shipping Charges:</li>
                        <li>Free shipping for orders above INR 15,000</li>
                        <li>For other orders: Shipping added at Checkout.</li>
                    </ul>
                    <div className="font-normal">If you need to expedite your order due to an event, please email ishitakabra18@gmail.com</div>
                </div>
            },
            { title: 'Returns', open: section === 'all' ? true : false, content: 'We do not offer refunds or exchanges, as all pieces are made to order.' },
            {
                title: 'Sourcing',
                open: section ? false : true,
                content: <div className="flex flex-col gap-2">
                    <div className="font-normal">Sneakers</div>
                    <ul className="flex flex-col ml-4 gap-2">
                        <li>You can choose to provide the sneaker or we can source it on your behalf from Authorized Retailers and trusted sellers.</li>
                        <li>Each shoe is carefully inspected by our experts for any quality issues and authenticity, before being chosen for your custom.</li>
                    </ul>
                    <div className="font-normal">Apparel</div>
                    <ul className="flex flex-col ml-4 gap-2">
                        <li>You can choose to provide the apparel, or we can source it on your behalf from Authorized Retailers and trusted sellers.
                        </li>
                        <li>Each garment is meticulously inspected by our experts for any quality issues and authenticity before being selected for your custom creation.</li>
                    </ul>
                </div>
            },
            { title: 'Terms of Service', open: section === 'terms-of-service' ? true : false, content: <ol className="flex flex-col gap-2">
            
                <li>1. Customization Services</li>
                <p className="mb-2">We offer customization services as described on our website. All designs are hand-crafted, and slight variations may occur.</p>

                <li>2. Payments & Refunds</li>
                <p className="mb-2">Payments must be made in full at the time of purchase. Custom products are non-refundable, except for defects caused by us.</p>

                <li>3. User Responsibilities</li>
                <p className="mb-2">Provide accurate details for your order. Ensure you have the right to use any design elements submitted to us.</p>

                <li>4. Intellectual Property</li>
                <p className="mb-2">We retain rights to designs we create unless otherwise agreed. You may not reproduce or sell our designs without permission.</p>

                <li>5. Warranty Disclaimer</li>
                <p className="mb-2">Custom sneakers are sold “as is.” We are not liable for normal wear and tear or misuse.</p>

                <li>6. Changes to Orders</li>
                <p className="mb-2">Changes must be requested within 24 hours of placing your order.</p>

                <li>7. Limitation of Liability</li>
                <p className="mb-2">We are not responsible for delays/damage during shipping, or any indirect losses.</p>

                <li>8. Governing Law</li>
                <p className="mb-2">These terms are governed by the laws of India.</p>

                <li>9. Contact Us</li>
                <p className="mb-2">For questions, email us at ishitakabra18@gmail.com.</p>
            </ol> },
            { title: 'Customer Service', open: section === 'all' ? true : false, content: 'For any questions or concerns regarding your shipment, please feel free to contact us at ishitakabra18@gmail.com.' },
        ]
    }, [params])


    return (
        <div className="size-full flex flex-col">
        <Navigation />
        <div className="px-12 py-24 mt-12 flex flex-col items-center">
            <div className="font-maharlika text-2xl">Privacy Policy</div>
            <Accordion items={list()} 
            />
        </div>
        <Footer />
        </div>
    )
}

export default Privacy