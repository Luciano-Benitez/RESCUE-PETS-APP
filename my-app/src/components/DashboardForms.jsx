import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getForms, getFormtypes} from '../Redux/Actions/index'

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
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <select name='opcion' onChange={e => handleSubmitGetForm(e)}>
                        {typeof(formtypes) !== 'string'? formtypes.map(element => (
                            <option key={element.id} value={element.id}> {element.typeName}</option>
                        )): 
                        typeof(formtypes) === 'string'? (<option>{formtypes}</option>): <option>Cargando...</option>}
                    </select>
                <br></br>
                <h1>Tabla de formularios de {typeform}</h1>
                <br></br>
                <br></br>
                {typeform === "adopción" ? (<table>
                        <tr>
                            <th><h1>Id|</h1></th>
                            <th><h1>Respuestas|</h1></th>
                            <th><h1>Mascota Id|</h1></th>
                            <th><h1>Acción|</h1></th>
                        </tr>
                        {typeof(forms) !== 'string'? forms.map(element => (
                            <tr key={element.id}>
                                <td><h3>{element.id}</h3></td>
                                <td><h3>{element.answers.map(e => Object.entries(e).map(entry => {
                                     const [key,value] = entry
                                     return(
                                    (<h3>{key}:{value}</h3>))})
                                )}</h3></td>
                                <td><h3>{element.petId}</h3></td>
                                <td>Ver</td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<h1>{forms}</h1>): (<h1>Cargando...</h1>)}
                </table>):
                typeform === "transito" ?(<table>
                    <tr>
                        <th><h1>Id|</h1></th>
                        <th><h1>Respuestas|</h1></th>
                        <th><h1>Acción|</h1></th>
                    </tr>
                    {typeof(forms) !== 'string'? forms.map(element => (
                        <tr key={element.id}>
                            <td><h3>{element.id}</h3></td>
                            <td><h3>{element.answers.map(e => Object.entries(e).map(entry => {
                                     const [key,value] = entry
                                     return(
                                    (<h3>{key}:{value}</h3>))})
                            )}</h3></td>
                            <td><button>Ver</button></td>
                        </tr>
                    )):typeof(forms) === 'string' ? (<h1>{forms}</h1>): (<h1>Cargando...</h1>)}
            </table>):(<h1>Error</h1>)}
                
            </div>
    )
}