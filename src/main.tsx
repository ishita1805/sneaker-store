import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Collection from './pages/Collection.tsx';
import Design from './pages/Design.tsx';
import Product from './pages/Product.tsx';
import Cart from './pages/Cart.tsx';
import Login from './pages/Login.tsx';
import Privacy from './pages/Privacy.tsx';
import Wishlist from './pages/Wishlist.tsx';
import { DBProvider } from "./context"
import ScrollWrapper from './hooks/scrollToTop.tsx';
import RedirectRoutes from './components/RedirectRoutes.tsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
    <DBProvider>
        <BrowserRouter basename={"/sneaker-store/"}>
            <ScrollWrapper>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/design-your-own" element={<Design />} />
                    <Route path="/privacy-policy" element={<Privacy />} />
                    <Route element={<RedirectRoutes />}>
                        <Route path='/login' element={<Login/>}/>
                    </Route>
                </Routes>
            </ScrollWrapper>
        </BrowserRouter>
        <ToastContainer />
    </DBProvider>
)
