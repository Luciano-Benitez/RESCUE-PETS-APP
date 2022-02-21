import React from "react";
import { useNavigate } from "react-router-dom";
import {getSearchShelters} from '../Redux/Actions';
import { useDispatch } from "react-redux";
import {IoAdd} from "react-icons/io5";

export function SearchBar() {
const dispatch = useDispatch();
const navigate = useNavigate();
const [name, setName] = React.useState();

  const handleInputChange = (e) => (
      setName(e.target.value)
);
   
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearchShelters(name));  
    setName('');
    navigate('/Shelters');
};

    return (
    <div  >
        <form onSubmit={handleSubmit} >
        <input  name='buscar' type='text' placeholder='Buscar' value={name} onChange={handleInputChange}/>
        <button  type="submit"><IoAdd/></button>
        </form>
    </div>
    );
};

export default SearchBar;