import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import './index.css'
import Collection from './pages/collection.tsx';
import Design from './pages/design.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/design-your-own" element={<Design />} />

            <Route path="/wishlist" element={<Design />} />
            <Route path="/login" element={<Design />} />

            <Route path="/privacy-policy" element={<Design />} />
            <Route path="/exchange-policy" element={<Design />} />
            <Route path="/shipping-payment" element={<Design />} />
            <Route path="/terms-of-service" element={<Design />} />
        </Routes>
    </BrowserRouter>
)
