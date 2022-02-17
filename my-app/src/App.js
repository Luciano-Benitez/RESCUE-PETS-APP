import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './globalstyles.css';

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormShelter from "./components/FormShelter";
import {Home} from "./components/Home";
import Header from "./components/Header";
import Cards from "./components/Cards";
import PreFooter from "./components/PreFooter";


function App() {
  return (
    <BrowserRouter>
       <Navbar></Navbar>
      <Header></Header>
      <Home></Home>
      <Cards></Cards>
     
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/register" element={<FormShelter/>}/>
        </Routes>
        
        <PreFooter/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
