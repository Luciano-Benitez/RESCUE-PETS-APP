import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import PetsInDashboard from './components/PetsInDashboard'



export const DashboardRoutes = () => {
    return (
        <div>
   
        <div className='container'>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/pets" element={<PetsInDashboard/>} />
            </Routes>
        </div>
        </div>
    )
}
