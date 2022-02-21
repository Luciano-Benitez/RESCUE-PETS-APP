import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './globalstyles.css';

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormShelter from "./components/FormShelter";
import {Home} from "./components/Home";
import Login from "./components/Login";
import Shelters from './components/Shelters';

import PreFooter from "./components/PreFooter";


function App() {
  return (
    <BrowserRouter>
       <Navbar/>
     
        <Routes>

          <Route path="/" element={<Home/>}/>
     
          <Route path="/Login" element={<Login/>}/>
      
          <Route path="/register" element={<FormShelter/>}/>

          <Route path="/Shelters" element={<Shelters/>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
