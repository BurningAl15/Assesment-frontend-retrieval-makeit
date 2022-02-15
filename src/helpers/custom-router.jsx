import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import ProductDetailByID from '../pages/ProductDetailByID';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CustomRouter() {
  // const location = useLocation();
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-detail/:id" element={<ProductDetailByID />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default CustomRouter;
