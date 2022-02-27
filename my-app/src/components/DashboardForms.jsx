import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteAnswerForm, getForms, getFormtypes, getPetsForDashboard} from '../Redux/Actions/index'
//import './DashboardForms.css'
import { Link, useNavigate } from 'react-router-dom'

import { StyledDashboardForms } from '../Styles/StyledDashboardForms'

export const DashboardForms= () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const iduser = useSelector((state) => state.id)
    const forms = useSelector((state) => state.forms)
    const formtypes = useSelector((state) => state.formtypes)
    const pet = useSelector( state => state.petsForDashboard )
    const routeInfo = useSelector(state => state.ShelterAndCityId)
    const route = `http://localhost:3001/pets/${routeInfo.cityId}?shelterId=${routeInfo.shelterId}`
    const [typeform, settypeform] = useState()

    useEffect(() => {
        dispatch(getFormtypes())
        // if(iduser)dispatch(getForms(iduser,1))
        if(routeInfo)dispatch(getPetsForDashboard(route))
        // if(typeof(forms) !== 'string'){
        //     if(forms[0].form.formtypeId === 1) settypeform('Adopción')
        //     else settypeform('Trnánsito')
        // }
    }, [])

    let filterimages = pet.map(e => {return {id:e.id,image:e.image}})

    const handleSubmitGetForm = (e) => {
        settypeform(e.target[e.target.value].attributes.name.nodeValue)
        dispatch(getForms(iduser,e.target.value))
    }

    const handleClick = ()=> {
        navigate('/dashboard')
    }

    const handleDeleteAdoption = (e) => {
        dispatch(deleteAnswerForm(Number(e),'adoption'))
        dispatch(getForms(iduser,1))
    }

    const handleDeleteRequest = (e) => {
        dispatch(deleteAnswerForm(Number(e),'request'))
        dispatch(getForms(iduser,2))
    }

    useEffect(() => {
        if(forms.length && typeof(forms) !== 'string' && !typeform){
            let temp = forms[0].form.formtypeId === 1 ? 'Adopción' : forms[0].form.formtypeId === 2 ? 'Trnánsito' : 'otro'
            settypeform(temp)
        }
    },[typeform])

    return (
            <StyledDashboardForms>
                    <button onClick={handleClick}>{"<"}volver</button>
                    <h1>Tabla de formularios de {typeform}</h1>
                    
                    <select name='opcion' onChange={e => handleSubmitGetForm(e)}>
                        <option disabled selected>
                            -- Seleccione --
                        </option>
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
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {typeof(forms) !== 'string'? forms.map(element => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td><Link to={`view/${element.id}/${formtypes[0].id}/${element.petId}`}><button>Ver Formulario</button></Link></td>
                                <td>
                                {filterimages ? filterimages.map(e => {
                                    if(e.id === Number(element.petId))
                                    {return (<div><h4>{element.petId}</h4><img src={`${e.image}`} width="100" height="100" /></div>)
                                    }
                                }): <h1>No lo obtiene</h1>}
                                </td>
                                <td><h4>Por revisar</h4></td>
                                <td><button onClick={() => handleDeleteAdoption(element.id)}>✘</button></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<td>{forms}</td>): (<h1>Cargando...</h1>)}
                        </tbody>
                </table>):
                
                typeform === "Trnánsito" ?(<table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Respuestas</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {typeof(forms) !== 'string'? forms.map(element => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td><Link to={`view/${element.id}/${formtypes[1].id}`}><button>Ver Formulario</button></Link></td>
                                <td><h4>Por revisar</h4></td>
                                <td><button onClick={() => handleDeleteRequest(element.id)}>✘</button></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<td>{forms}</td>): (<h1>Cargando...</h1>)}
                    </tbody>
            </table>):(<h1>Error</h1>)}
                
            </StyledDashboardForms>
    )
}