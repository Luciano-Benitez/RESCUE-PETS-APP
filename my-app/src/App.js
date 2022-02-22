import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './globalstyles.css';

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormShelter from "./components/FormShelter";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Shelters from './components/Shelters';
import Details from './components/Details';
import ShelterDetail from './components/ShelterDetail';

import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "./Redux/Actions";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";



function App() {

  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

 

  return (
    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path="/" element={

          <Home />
          
        } />
         <Route path="/Shelters" element={<Shelters/>}/>

        <Route path="/login" element={
          <PublicRoute>
            <Login />

          </PublicRoute>
        } />

        <Route path="/register" element={
          <PublicRoute>
            <FormShelter />

          </PublicRoute>
        } />


<Route path="/details/:id" element={
          <PublicRoute>
            <Details />

          </PublicRoute>
        } />

<Route path="/shelters/:id" element={
          <PublicRoute>
            <ShelterDetail />

          </PublicRoute>
        } />


        <Route path="/*" element={
          <PrivateRoute >
            <DashboardRoutes />
          </PrivateRoute>
        } />
      </Routes>



      <Footer />

    </BrowserRouter>
  );
}

export default App;
