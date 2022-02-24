import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormAdoption } from "../Redux/Actions/index";

const FormTransit = ({ id }) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formAdoption);

  const [input, setInput] = useState({})

  useEffect(() => {
    if (form.length === 0) {
      dispatch(getFormAdoption(id, 2));
    }
  }, []);



  function handleChange(event) {
  //  if (Object.hasOwnProperty(`${event.target.value}`)) console.log(true)
  //   else console.log(false)
  };

  return (
    <div>
      <h1>formulario de Tránsito</h1>
      <form>
        {form[0] &&
          form[0].questions.map((e) => (
            <div key={e.id}>
              <label>{`${e.question}: `}</label>
              <input 
              name={`Q${e.id}`}
              onChange={(event)=>handleChange(event)}/>
            </div>
          ))}
      </form>
    </div>
  );
};

export default FormTransit;
