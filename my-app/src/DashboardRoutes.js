import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { DashboardForms } from './components/DashboardForms';


export const DashboardRoutes = () => {
    return (
        <div>
   
        <div className='container'>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route exact path="dashboard/forms" element={<DashboardForms/>}/>
            </Routes>
        </div>
        </div>
    )
}
