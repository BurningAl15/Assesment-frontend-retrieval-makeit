/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from 'pages/Home/';
import About from 'pages/About/';
import ProductDetailByID from 'pages/ProductDetailByID/';
import Navbar from 'components/Navbar/';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-detail/:id" element={<ProductDetailByID />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
