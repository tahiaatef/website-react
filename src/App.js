import React from 'react';
import Product from './pages/productsPage';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Cart from './pages/cartPage';
import SignUp from './pages/signupPage';
import ProductsList from './pages/listProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import ProductDetail from './pages/ProductDetailsPage';
import Login from './pages/loginPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productlist' element={<ProductsList />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
