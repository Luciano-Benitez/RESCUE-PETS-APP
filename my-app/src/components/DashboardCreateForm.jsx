import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { StyledDashboardForms } from '../Styles/StyledDashboardForms'
import { getFormtypes } from '../Redux/Actions/index'
import { useState } from "react"

export const DashboardCreateForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formtypes = useSelector((state) => state.formtypes)
    const [type, settype] = useState()
    const [questions, setquestions] = useState()

    useEffect(() => {
        dispatch(getFormtypes())
    }, [])
    

    const handleClick = ()=>{
        navigate('/dashboard')
    }
    let titleFormType = type ? formtypes.find(e => Number(e.id) === Number(type)).typeName : 'No seleccionado'
    const handleSubmitChange = (e) => {
        if(e.target[e.target.value].attributes.name.nodeValue === formtypes[0].typeName){
            settype(e.target.value)
            
        }if(e.target[e.target.value].attributes.name.nodeValue === formtypes[1].typeName){
            settype(e.target.value)
        }
        
    }
    return (
        <StyledDashboardForms>
            <button onClick={handleClick}>{'<'}Volver</button>
            <h1>Crear formulario</h1>
            <div>
                <div>
                    <select onChange={(e) => handleSubmitChange(e)}>
                        <option disabled selected>
                            Tipo formulario
                        </option>
                        {typeof(formtypes) !== 'string' ? formtypes.map(e => (
                            <option key={e.id} value={e.id} name={e.typeName}>{e.typeName}</option>
                        )):'Cargando'}
                    </select>
                        <br></br>
                        <br></br>
                    <select>
                        <option disabled selected>
                            Pregunta
                        </option>
                        <option>¿pregunta 1?</option>
                        <option>¿pregunta 2?</option>
                    </select>
                    <br></br>
                    <br></br>
                    <button>Borrar todo</button>
                    <br></br>
                    <br></br>
                    <button>Crear</button>
                </div>
                <br></br>
                <br></br>
                <div>
                    {<h2>{titleFormType}</h2>}
                    <table>
                        <th>#</th>
                        <th>Pregunta</th>
                        <th>Acción</th>
                        <tbody>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tbody>
                    </table>
                </div>
            
            </div>
        </StyledDashboardForms>
    )
}

