import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getForms, getFormtypes} from '../Redux/Actions/index'
//import './DashboardForms.css'
import {AnswerFormView} from './AnswerFormView'
import { Link } from 'react-router-dom'

import { StyledDashboardForms } from '../Styles/StyledDashboardForms'

export const DashboardForms= () => {
    const dispatch = useDispatch()
    
    const iduser = useSelector((state) => state.id)
    const forms = useSelector((state) => state.forms)
    const formtypes = useSelector((state) => state.formtypes)
    const [typeform, settypeform] = useState('adopción')

    useEffect(() => {
        dispatch(getFormtypes())
        dispatch(getForms(iduser,1))
    }, [])

    const handleSubmitGetForm = (e) => {
        if(Number(e.target.value) === formtypes[0].id)settypeform('adopción')
        if(Number(e.target.value) === formtypes[1].id)settypeform('transito')
        dispatch(getForms(iduser,e.target.value))
    }

    return (
            <StyledDashboardForms>

                    <h1>Tabla de formularios de {typeform}</h1>


                    <select name='opcion' onChange={e => handleSubmitGetForm(e)}>
                        {typeof(formtypes) !== 'string'? formtypes.map(element => (
                            <option key={element.id} value={element.id}> {element.typeName}</option>
                        )): 
                        typeof(formtypes) === 'string'? (<option>{formtypes}</option>): <option>Cargando...</option>}
                    </select>
                
                {typeform === "adopción" ? (<table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Respuestas</th>
                                <th>Mascota Id</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {typeof(forms) !== 'string'? forms.map(element => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td>{element.answers.map(e => Object.entries(e).map(entry => {
                                     const [key,value] = entry
                                     return(
                                    (<p>{key}:{value}</p>))})
                                )}</td>
                                <td>{element.petId}</td>
                                <td><AnswerFormView element={element}/></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<td>{forms}</td>): (<h1>Cargando...</h1>)}
                        </tbody>
                </table>):
                
                typeform === "transito" ?(<table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Respuestas</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {typeof(forms) !== 'string'? forms.map(element => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td>{element.answers.map(e => Object.entries(e).map(entry => {
                                        const [key,value] = entry
                                        return(
                                        (<p>{key}:{value}</p>))})
                                )}</td>
                                <td><button>Ver</button></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<td>{forms}</td>): (<h1>Cargando...</h1>)}
                    </tbody>
            </table>):(<h1>Error</h1>)}
                
            </StyledDashboardForms>
    )
}