import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {getIndividualForm} from "../Redux/Actions/index"

export const AnswerFormView = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {formid,formtypeid} = useParams()
    const cityandshelter = useSelector((state) => state.ShelterAndCityId)
    const detailform = useSelector((state) => state.individualform)
    const shelterid = cityandshelter.shelterId

    useEffect(()=>{
        dispatch(getIndividualForm(shelterid,formtypeid,formid))
        console.log(detailform)
    },[])


    const handleClick = ()=>{
        navigate('/dashboard/forms')
    }
    return (<>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <button onClick={handleClick}>{"<"}volver</button>
    {shelterid? <h1>
    Shelter ID: {shelterid}| FormType ID: {formtypeid} | FormID: {formid} </h1>: null}
    {detailform ? detailform.map(e => (
        <div>
            <h2>{e.question}</h2>
            <h3>{e.answer}</h3>
            <hr></hr>
        </div>
    )): <h1>Loading..</h1>}
    <button>Aceptar ✔</button>
    <button>Denegar ✘</button>
    </>
    )
}