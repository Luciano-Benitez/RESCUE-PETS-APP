
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <div className="App">
        <Routes>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
