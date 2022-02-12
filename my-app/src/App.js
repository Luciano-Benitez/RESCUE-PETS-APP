import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import Signin from './components/signin/Signin';
import Contact from './components/contact/Contact';
import ShoppingCart from './components/shopping_cart/ShoppingCart';
import AboutUs from './components/AboutUs';
import Categories from './components/Category/Categories';
import Detail from './components/Detail';
// import NavBar from './components/NavBar/NavBar.jsx';
/* import NavBar from './components/navbar/NavBar'; */


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route exact path="/" element={<LandingPage />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/categories/:id_product" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
