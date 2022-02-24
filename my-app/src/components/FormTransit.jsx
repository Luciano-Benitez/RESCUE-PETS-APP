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

    if(idquestion.length){
      idquestion.map(e => {
          if(e !== event.target.name){
              setIdquestion([...idquestion, event.target.name])
          }else{
              let temp = idquestion.filter(e => e!==event.target.name)
              setIdquestion(temp.concat(event.target.name))
          }
      })
    }else {
      setIdquestion([...idquestion, event.target.name])
    }


    if(answer.length){
        answer[Number(event.target.name)-1] = event.target.value
    }else {
        if((Number(event.target.name)-1) === 0)setAnswer([...answer, event.target.value])
        else  answer[Number(event.target.name)-1] = event.target.value
    }
    
    setInput([...input, {idquestion: event.target.name, answer: event.target.value}])
  };

  function handleClick(event){
    event.preventDefault()
    let ids = form[0].questions.map(e => e.id)

    let final = []

    for (let i = 0; i < ids.length; i++) {
      let filtered = input.filter(el => el.idquestion == ids[i])
      final.push(filtered[filtered.length-1])
    }
    console.log(input)
    console.log(final)
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
