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
    const [typeform, settypeform] = useState('Adopción')

    useEffect(() => {
        dispatch(getFormtypes())
        dispatch(getForms(iduser,1))
    }, [])

    const handleSubmitGetForm = (e) => {
        settypeform(e.target[e.target.value-1].attributes.name.nodeValue)
        dispatch(getForms(iduser,e.target.value))
        console.log(e.target[e.target.value-1].attributes.name.nodeValue)
    }

    return (
            <StyledDashboardForms>

                    <h1>Tabla de formularios de {typeform}</h1>

                    <select name='opcion' onChange={e => handleSubmitGetForm(e)}>
                        {typeof(formtypes) !== 'string'? formtypes.map(element => (
                            <option name={element.typeName} key={element.id} value={element.id}> {element.typeName}</option>
                        )): 
                        typeof(formtypes) === 'string'? (<option>{formtypes}</option>): <option>Cargando...</option>}
                    </select>
                
                {typeform === "Adopción" ? (<table>
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
                                <td><Link to={`view/${element.id}/${formtypes[0].id}`}><button>Ver Formulario</button></Link></td>
                                <td>{element.petId}</td>
                                <td><button>Accion1</button><button>Accion2</button></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<td>{forms}</td>): (<h1>Cargando...</h1>)}
                        </tbody>
                </table>):
                
                typeform === "Trnánsito" ?(<table>
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
                                <td><Link to={`view/${element.id}/${formtypes[1].id}`}><button>Ver Formulario</button></Link></td>
                                <td><button>Accion1</button><button>Accion2</button></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<td>{forms}</td>): (<h1>Cargando...</h1>)}
                    </tbody>
            </table>):(<h1>Error</h1>)}
                
            </StyledDashboardForms>
    )
}