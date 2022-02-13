import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ProductDetailByID from '../pages/ProductDetailByID';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CustomRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-detail/:id" element={<ProductDetailByID />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default CustomRouter;
