import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {postPets, getShelters, gettTemperaments,
       getAllSpecies, getAllAges, getAllPetStatus, getGenres} from '../Redux/Actions/index';

export function CreatePets() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
      dispatch(getAllSpecies());
    }, [dispatch]);

    const Allspecies = useSelector(state => state.allspecies);

    useEffect(() => {
            dispatch(getShelters());
        },[dispatch]);

    const Shelters = useSelector(state => state.Shelters);

    useEffect(() => {
        dispatch(gettTemperaments());
    },[dispatch]);

    const ttemperaments = useSelector(state => state.ttemperaments);

    useEffect(() => {
        dispatch(getAllAges());
    },[dispatch]);

    const AllAges = useSelector(state => state.allAges);

    useEffect(() => {
        dispatch(getAllPetStatus());
    },[dispatch]);

    const Status = useSelector(state => state.petStatus);

    useEffect(() => {
        dispatch(getGenres());
    },[dispatch]);

    const Genres = useSelector(state => state.allGenres);

    const [state, setState] = useState({
        name: '',
        sterilization: '',
        weight: '',
        description: '',
        image:'',
        speciesId: '',
        shelterId: '',
        temperamentId: '',
        ageId : '',
        petStatusId: '',
        genreId:'',
    });
    console.log('Estado Local: ', state)

    const handleChanges = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const handleSelectBoolean = (e) => {
        setState({
            ...state,
            sterilization: e.target.value
        })
    };

    const handleSelectSpecies = (e) => {
        setState({
            ...state,
            speciesId: e.target.value
        })
    };

    const handleSelectShelter = (e) => {
        setState({
            ...state,
            shelterId: e.target.value
        })
    };

    const handleSelectTemperament = (e) => {
        setState({
            ...state,
            temperamentId: e.target.value
        })
    };

    const handleSelectAge = (e) => {
        setState({
            ...state,
            ageId: e.target.value
        })
    };

    const handleSelectState = (e) => {
        setState({
            ...state,
            petStatusId: e.target.value
        })
    };

    const handleSelectGenres = (e) => {
        setState({
            ...state,
            genreId: e.target.value
        })
    };

    const handleSelectImg = (e) => {
        setState({
            ...state,
            image: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postPets(state));
        setState({name:'',sterilization:'',weight: '',description: '',image:'',speciesId:'',shelterId:'',
                temperamentId:'',ageId:'',petStatusId:'',genreId:''})
        alert('¡La mascota fue creada con exito!');
        // navigate('/dashboard/pets');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <label >Nombre:
                <input type="text" name="name" value={state.name} onChange={handleChanges} />
            </label>

            <label >Esterilizado/a:
                <select onChange={handleSelectBoolean} >
                    <option disabled selected>-- Seleccione --</option>
                    <option name='true' value={true}>Si</option>
                    <option name='false' value={false}>No</option>
                </select>
            </label>

            <label >Peso:
                <input type="text" name="weight" value={state.weight} onChange={handleChanges} />
            </label>

            <label >Descripcion:
                <input type="text" name="description" value={state.description} onChange={handleChanges} />
            </label>

            <label >Especie:
                <select onChange={handleSelectSpecies} >
                <option disabled selected>-- Seleccione --</option>
                {Allspecies?.map((e) => (
                <option value={e.id} key={e.id }>{e.specie}</option>
              ))}
                </select>
            </label>

            <label >Refugio:
            <select onChange={handleSelectShelter} >
                <option disabled selected>-- Seleccione --</option>
                {Shelters?.map((e) => (
                <option value={e.id} key={e.id}>{e.name }</option>
              ))}
            </select>
            </label>

            <label >Temperamento:
            <select onChange={handleSelectTemperament} >
                <option disabled selected>-- Seleccione --</option>
                {ttemperaments?.map((e) => (
                <option value={e.id} key={e.id}>{e.temperament }</option>
              ))}
            </select>
            </label>

            <label >Edad:
            <select onChange={handleSelectAge} >
                <option disabled selected>-- Seleccione --</option>
                {AllAges?.map((e) => (
                <option value={e.id} key={e.id}>{e.age}</option>
              ))}
            </select>
            </label>

            <label >Estado:
            <select onChange={handleSelectState} >
                <option disabled selected>-- Seleccione --</option>
                {Status?.map((e) => (
                <option value={e.id} key={e.id}>{e.status}</option>
              ))}
            </select>
            </label>
            
            <label >Genero:
            <select onChange={handleSelectGenres} >
                <option disabled selected>-- Seleccione --</option>
                {Genres?.map((e) => (
                <option value={e.id} key={e.id}>{e.genre}</option>
              ))}
            </select>
            </label>
            <input type='file' name='img' value={state.image} onChange={handleSelectImg}/>
            <button type="submit">¡Crear Mascota!</button>
            </form>
        </div>
    )
};

export default CreatePets;