import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {addFollowUp, getIndividualForm, sendEmailAccepted, sendEmailRejected} from "../Redux/Actions/index"

export const AnswerFormView = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {formid,formtypeid,petId} = useParams()
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

    const handleAllow = () => {
        alert('Petición aceptada')
        dispatch(addFollowUp({
            followUpStatusId:1,
            profileId:1,
            shelterId:shelterid,
            petId:Number(petId),
            adoptionId:Number(formid)}))
        dispatch(sendEmailAccepted({email:'email@gmail.com',type:Number(formtypeid)}))         
    }

    const handleDeny = () => {
        alert('Petición denegada')
        dispatch(sendEmailRejected({email:'email@gmail.com',type:Number(formtypeid)}))
    }

    return (<>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <button onClick={handleClick}>{"<"}volver</button>
    <h1>{'formid: '+formid+'| petId: '+petId+'| ShelterId: '+shelterid}</h1>
    {detailform ? detailform.map(e => (
        <div key={e.answer}>
            <h2>{e.question}</h2>
            <h3>{e.answer}</h3>
            <hr></hr>
        </div>
    )): <h1>Loading..</h1>}
    <button onClick={handleAllow}>Aceptar ✔</button>
    <button onClick={handleDeny}>Denegar ✘</button>
    </>
    )
}