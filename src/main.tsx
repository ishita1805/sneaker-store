import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from './App'
import './index.css'
import Collection from './pages/Collection';
import Design from './pages/Design';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Wishlist from './pages/Wishlist';
import { DBProvider } from "./context"
import ScrollWrapper from './hooks/scrollToTop';
import RedirectRoutes from './components/RedirectRoutes';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
    <DBProvider>
        <Router>
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
        </Router>
        <ToastContainer />
    </DBProvider>
)
