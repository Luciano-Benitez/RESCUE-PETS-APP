import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormShelter from "./components/FormShelter";
import {Home} from "./components/Home"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
       <Navbar></Navbar>
      {/* <Header></Header>
      <Home></Home> */}
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/register" element={<FormShelter/>}/>
        </Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
