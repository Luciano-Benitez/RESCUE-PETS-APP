import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormShelter from "./components/FormShelter";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      
        <Routes>
          <Route path="/register" element={<FormShelter/>}/>
        </Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
