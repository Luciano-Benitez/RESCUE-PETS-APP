import React from 'react'
import { Routes, Route} from "react-router-dom";
import { AnswerFormView } from './components/AnswerFormView';
import { Dashboard } from './components/Dashboard';
import { DashboardCreateForm } from './components/DashboardCreateForm';
import { DashboardForms } from './components/DashboardForms';
import PetsInDashboard from './components/PetsInDashboard'


export const DashboardRoutes = () => {
    return (
        <div>
   
        <div className='container'>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route exact path="dashboard/forms" element={<DashboardForms/>}/>
                <Route path="dashboard/pets" element={<PetsInDashboard/>} />
                <Route path="dashboard/forms/view/:formid/:formtypeid" element={<AnswerFormView/>}/>
                <Route path="dashboard/createForm" element={<DashboardCreateForm/>}/>
            </Routes>
        </div>
        </div>
    )
}
