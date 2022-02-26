import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { StyledDashboardForms } from '../Styles/StyledDashboardForms'
import { getAllQuestions, getFormtypes, postCreateForm } from '../Redux/Actions/index'
import { useState } from "react"

export const DashboardCreateForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const shelterid = useSelector(state => state.ShelterAndCityId)
    const questions = useSelector((state) => state.allQuestions)
    const formtypes = useSelector((state) => state.formtypes)
    const [type, settype] = useState()
    const [question, setquestion] = useState([])
    const [form, setform] = useState()

    useEffect(() => {
        dispatch(getFormtypes())
        dispatch(getAllQuestions())
        setform({idshelter: shelterid.shelterId,type:Number(type), questions: question})
    }, [type,question])
    

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
        setform({idshelter: shelterid.shelterId,type:Number(type), questions: question})  
    }

    const handleSubmitQuestion = (e) => {
        if(question.length === 0)setquestion([...question,Number(e.target.value)])
        else {
            let temp = question.filter(f => Number(f) === Number(e.target.value))
            if(temp.length === 0) setquestion([...question, Number(e.target.value)])
        }
        setform({idshelter: shelterid.shelterId,type:Number(type), questions: question})
    }

    const handleClickDelete = (e) => {
        if(typeof(e) !== 'number') setquestion([])
        else{
            let temp2 = question.filter(f => f !== e)
            setquestion(temp2)
        }
    }

    const handleSubmitFormCreated = () => {
        if(!type || question.length === 0){
            alert('deben llenarse los campos')
        }else{
            dispatch(postCreateForm(form))
            setquestion([])
        } 
    }


    return (
        <StyledDashboardForms>
            <button onClick={handleClick}>{'<'}Volver</button>
            <h1>Crear formulario</h1>
            <div>
                <div>
                    <select name='type' onChange={(e) => handleSubmitChange(e)}>
                        <option disabled selected>
                            Tipo formulario
                        </option>
                        {typeof(formtypes) !== 'string' ? formtypes.map(e => (
                            <option key={e.id} value={e.id} name={e.typeName}>{e.typeName}</option>
                        )):'Cargando'}
                    </select>
                        <br></br>
                        <br></br>
                    <select onChange={(e) => handleSubmitQuestion(e)}>
                        <option disabled selected>
                            Preguntas
                        </option>
                        {questions ? questions.map(e => (
                            <option key={e.id} value={e.id}>{e.question}</option>
                        )):'No cargó preguntas'}
                    </select>
                    <br></br>
                    <br></br>
                    <button onClick={(e) => handleClickDelete(e)} value='all'>Delete ✘</button>
                    <br></br>
                    <br></br>
                    <button onClick={() => handleSubmitFormCreated()}>Crear</button>
                </div>
                <br></br>
                <br></br>
                <div>
                    {<h2>{titleFormType}</h2>}
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Pregunta</th>
                            <th>Acción</th>
                        </tr>
                        <tbody>
                            {question.length > 0? question.map(e => (
                                <tr key={e}>
                                    <td>{questions.filter(q => q.id === Number(e))[0].id}</td>
                                    <td>{questions.filter(q => q.id === Number(e))[0].question}</td>
                                    <td><button onClick={() => handleClickDelete(e)}>✘</button></td>
                                </tr>
                            )):null}
                        </tbody>
                    </table>
                </div>
            
            </div>
        </StyledDashboardForms>
    )
}

