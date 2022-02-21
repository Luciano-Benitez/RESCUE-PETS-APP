import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Dashboard } from './components/Dashboard';



export const DashboardRoutes = () => {
    return (
        <div>
   
        <div className='container'>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </div>
        </div>
    )
}
