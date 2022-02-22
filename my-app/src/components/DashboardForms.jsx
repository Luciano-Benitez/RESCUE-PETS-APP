import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getForms} from '../Redux/Actions/index'

export const DashboardForms= () => {
    const dispatch = useDispatch()
    
    const iduser = useSelector((state) => state.id)
    const forms = useSelector((state) => state.forms)
    const [typeform, settypeform] = useState('adopcion')

    useEffect(() => {
      dispatch(getForms(iduser,1))
    }, [])

    const handleSubmitGetForm = (e) => {
        if(e.target.value == "1")settypeform('adopción')
        if(e.target.value == "2")settypeform('transito')
        dispatch(getForms(iduser,e.target.value))
    }

    
    console.log(forms)
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
                        <option value={1}>formulario Adopcion</option>
                        <option value={2}>formualrio Transito</option>
                    </select>
                <br></br>
                <h1>Tabla de formularios de {typeform}</h1>
                <br></br>
                <br></br>
                <table>
                        <tr>
                            <th><h1>Id|</h1></th>
                            <th><h1>Respuestas|</h1></th>
                            <th><h1>Mascota Id|</h1></th>
                            <th><h1>Estado|</h1></th>
                        </tr>
                        {typeof(forms) !== 'string' ? forms.map(element => (
                            <tr key={element.id}>
                                <td><h3>{element.id}</h3></td>
                                <td><h3>{element.answers.answerone}</h3></td>
                                <td><h3>{element.petId}</h3></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<h1>{forms}</h1>): (<h1>Cargando...</h1>)}
                </table>
                
            </div>
    )
}