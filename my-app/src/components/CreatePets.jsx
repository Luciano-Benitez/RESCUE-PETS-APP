import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {postPets, getShelters, gettTemperaments,
       getAllSpecies, getAllAges, getAllPetStatus, getGenres, ModalDashboardOpen } from '../Redux/Actions/index';

      
       import {DivContainer} from "../Styles/StyledCreatePets";

import { StyleButton } from "../Styles/StyledButtons.js";
export function CreatePets() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'ImagesPets');
        setLoading(true);
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/pi-pets/image/upload',
            {
                method: 'POST',
                body: data,
            }
        )
        const file = await res.json();
        // console.log(res);
        setImage(file.securre_url);
        console.log(file.securre_url)
        setLoading(false);
    };
    
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
        dispatch(ModalDashboardOpen ("icos"))
        setState({name:'',sterilization:'',weight: '',description: '',image:'',speciesId:'',shelterId:'',
                temperamentId:'',ageId:'',petStatusId:'',genreId:''})
                
        alert('¡La mascota fue creada con exito!');
        // navigate('/dashboard/pets');
    };


    function handleClickCencel(e){
        e.preventDefault();
        dispatch(ModalDashboardOpen ("icos"))
        
    
      }
    return (
        
           
           <DivContainer>
            <form onSubmit={handleSubmit} ><br/><br/>
         
                <input type="text" placeholder="Nombre de mascota" name="name" value={state.name} onChange={handleChanges} />
         
                <br/>   <br/>
           
                <select onChange={handleSelectBoolean} >
                    <option disabled selected>¿Esterilizado/a?</option>
                    <option name='true' value={true}>Si</option>
                    <option name='false' value={false}>No</option>
                  </select>
          
                  <br/><br/>
          
                <input type="text" placeholder="Escriba el  Peso" name="weight" value={state.weight} onChange={handleChanges} />
           
                <br/><br/>
         
                <input type="text" placeholder="Escriba Descripción" name="description" value={state.description} onChange={handleChanges} />
           
                <br/><br/>
            
                <select onChange={handleSelectSpecies} >
                <option disabled selected>-- Seleccione Especie --</option>
                {Allspecies?.map((e) => (
                <option value={e.id} key={e.id }>{e.specie}</option>
              ))}
                </select>
                <br/><br/>

            <select onChange={handleSelectShelter} >
                <option disabled selected>-- Seleccione Refugio --</option>
                {Shelters?.map((e) => (
                <option value={e.id} key={e.id}>{e.name }</option>
              ))}
            </select>
            <br/><br/>

        
            <select onChange={handleSelectTemperament} >
                <option disabled selected>-- Seleccione Temperamento --</option>
                {ttemperaments?.map((e) => (
                <option value={e.id} key={e.id}>{e.temperament }</option>
              ))}
            </select>
            
            <br/><br/>
            <select onChange={handleSelectAge} >
                <option disabled selected>-- Seleccione Edad --</option>
                {AllAges?.map((e) => (
                <option value={e.id} key={e.id}>{e.age}</option>
              ))}
            </select>
           
            <br/><br/>
           
            <select onChange={handleSelectState} >
                <option disabled selected>-- Seleccione Estado --</option>
                {Status?.map((e) => (
                <option value={e.id} key={e.id}>{e.status}</option>
              ))}
            </select>
            <br/>
            <br/>
      
            <select onChange={handleSelectGenres} >
                <option disabled selected>-- Seleccione Genero--</option>
                {Genres?.map((e) => (
                <option value={e.id} key={e.id}>{e.genre}</option>
              ))}
            </select>
           
            <> <br/> <br/>
            <input  className="custom-file-upload" type='file' name='file' value={state.image} placeholder='Inserte Imagen'
                    onChange={uploadImage,  handleSelectImg}/>
                    {loading ? (<h3>Cargando Imagenes... </h3>) : (<img src={image} style={{width:'300px'}} />)}
            </>
            <br/> <br/>< StyleButton  type="submit">¡Crear Mascota!</StyleButton >   <StyleButton  onClick={(event)=>handleClickCencel(event)} >Cancelar</StyleButton >
            </form>

            </DivContainer>
         
            
    )
};

export default CreatePets;