import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Home} from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Home />
      <div className="App">
        <Routes>
        
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
