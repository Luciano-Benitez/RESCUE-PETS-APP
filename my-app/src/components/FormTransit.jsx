import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormAdoption } from "../Redux/Actions/index";

const FormTransit = ({ id }) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formAdoption);

  const [idquestion, setIdquestion] = useState([])
  const [answer, setAnswer] = useState([])
  const [input, setInput] = useState([])

  useEffect(() => {
    if (form.length === 0) {
      dispatch(getFormAdoption(id, 2));
    }
  }, []);

  function handleChange(event) {

    if(idquestion){
      idquestion.map(e => {
          if(e !== event.target.name){
              setIdquestion([...idquestion, event.target.name])
          }else{
              let temp = event.target.name
            
          }
      })
  }
    setIdquestion([...idquestion, event.target.name])
    setAnswer([...answer, event.target.value])
    setInput([...input, {idquestion: event.target.name, answer: event.target.value}])
  };

  function handleClick(event){
    console.log(input)
  }

  return (
    <div>
      <h1>formulario de Tránsito</h1>
      <form>
        {form[0] &&
          form[0].questions.map((e) => (
            <div key={e.id}>
              <label>{`${e.question}: `}</label>
              <input 
              name={e.id}
              onChange={(event)=>handleChange(event)}
              />
            </div>
          ))}
          <button onClick={handleClick}>Enviar Formulario</button>
      </form>
    </div>
  );
};

export default FormTransit;
