import React from 'react'
import { Routes, Route} from "react-router-dom";
import { AnswerFormView } from './components/AnswerFormView';
import { ChangePassword } from './components/ChangePassword';
import { Dashboard } from './components/Dashboard';
import { DashboardForms } from './components/DashboardForms';
import NavbarDashboard from './components/NavbarDashboard';
import PetsInDashboard from './components/PetsInDashboard'
import { ShelterProfile } from './components/ShelterProfile';


export const DashboardRoutes = () => {
    return (
        <div>
   
        <div className='container'>
            <NavbarDashboard/>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route exact path="dashboard/forms" element={<DashboardForms/>}/>
                <Route path="dashboard/pets" element={<PetsInDashboard/>} />
                <Route path="dashboard/forms/views" element={<AnswerFormView/>}/>
                <Route path="dashboard/profile" element={<ShelterProfile/>}/>
                <Route path="dashboard/config" element={<ChangePassword/>}/>
            </Routes>
        </div>
        </div>
    )
}
