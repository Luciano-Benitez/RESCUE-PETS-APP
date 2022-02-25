import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormAdoption } from "../Redux/Actions/index";

const FormTransit = ({ id }) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formAdoption);

  const [input, setInput] = useState([])


  useEffect(() => {
    if (form.length === 0) {
      dispatch(getFormAdoption(id, 2))
    } 
  }, []);


  function handleChange(event) {

    if(input.length === 0){
      setInput([...input,
        {idquestion:event.target.name,answer:event.target.value}
      ])
    }else{ 
      input.map((e,index) => {
        if(Number(e.idquestion) === Number(event.target.name)){
            input[index].answer = event.target.value
            return e
        }else if(!input.find(e => Number(e.idquestion) === Number(event.target.name))){
          setInput([...input,
            {idquestion:event.target.name,answer:event.target.value}
          ])
        }
      })  
    }
  };

  function handleClick(event){
    event.preventDefault()
    

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
