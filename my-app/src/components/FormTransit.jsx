import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormAdoption, postRequestTransit } from "../Redux/Actions/index";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

//estilos
import {DivContainer} from '../Styles/StyledFormTransit'

const FormTransit = ({ id }) => {
  const dispatch = useDispatch();
  const history = useNavigate()
  const form = useSelector((state) => state.formAdoption);

  const [input, setInput] = useState([])


  useEffect(() => {
    if (form.length === 0) {
      dispatch(getFormAdoption(id, 2))
    } 

  }, [])


  function handleChange(event) {

    if(input.length === 0){
      setInput([...input,
        {idquestion:Number(event.target.name),answer:event.target.value}
      ])
    }else{ 
      input.map((e,index) => {
        if(Number(e.idquestion) === Number(event.target.name)){
            input[index].answer = event.target.value
            return e
        }else if(!input.find(e => Number(e.idquestion) === Number(event.target.name))){
          setInput([...input,
            {idquestion:Number(event.target.name),answer:event.target.value}
          ])
        }
      })  
    }
  };

  function handleClick(event){
    event.preventDefault()
    let payload = {
      idform: form[0].id,
      answer: input
    }
    dispatch(postRequestTransit(payload))
    Swal.fire('Genial!', 'Registro realizado correctamente. Si has sido seleccionado pronto nos comunicaremos contigo', 'sucess');
    setInput([]);
    history(`/shelters/${form[0].shelterId}`)
  }

  return (
    <DivContainer>
      <h1>FORMULARIO DE TRÁNSITO</h1>
      <p>Estas a un paso de cambiar una vida</p>
      <form className="formulario">
        {form[0] &&
          form[0].questions.map((e) => (
            <div key={e.id}>
              <label>{`${e.question}: `}</label>
              <textarea
              name={e.id}
              onChange={(event)=>handleChange(event)}
              cols="60"
              rows="5"
              required
              />
            </div>
          ))}
          <button onClick={handleClick}>Enviar Formulario</button>
      </form>
    </DivContainer>
  );
};

export default FormTransit;
