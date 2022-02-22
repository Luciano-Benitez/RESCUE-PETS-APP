import axios from 'axios'
import { fetchConToken, fetchSinToken } from '../../helpers/fetch.js';
import {GET_COUNTRIES, 
    GET_STATES, 
    GET_CITIES,
    CLEAN_STATE_FORM,
    GET_PETS,
    POST_FORM_REGISTER,
    GET_PETS_FILTER,
    authLogin,
    authCheckingFinish,
    GET_TEMPERAMENTS,
    GET_ID_CITY, 
    GET_AGES,
    GET_STATUS,
    GET_SEARCH_SHELTERS,
    GET_SPECIES,
    GET_FILTER_SHELTERS,
    GET_ID_FROM_SHELTER_AND_CITY
    } from './types.js'


    



    export const getPets = () => {
        return async function (dispatch) {
            try {
            let json = await axios(`http://localhost:3001/pets`);
            let size = json.data.length/2;
            let NewPets = function (myArray, Size){
                var results = [];
                while (myArray.length) {
                    results.push(myArray.splice(0, Size));
                }
                return results;
            }
           let newpets= NewPets(json.data, size);
            console.log([newpets] , "Pets sin partir",json  , "partido")
            dispatch({type: GET_PETS, payload: newpets[0]}); // de momento solo muestra el primer array
          //dispatch({type: GET_PETS, payload:json.data}); //Pets sin división
            
           
            }
        catch (error) {
            console.log("ERROR NO DATA", error);
        }
    }
    };
    

export const getCountries = () => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/country`)
        return dispatch({
            type: GET_COUNTRIES, payload: json.data
        })
    } 
}

export const getStates = (id) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/states?countryId=${id}`)
        return dispatch({
            type: GET_STATES, payload: json.data
        })
    } 
}

export const getcities = (id) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/cities?stateId=${id}`)
        return dispatch({
            type: GET_CITIES, payload: json.data
        })
    } 
}

export const cleanStateForm = () => {
    return {
        type: CLEAN_STATE_FORM,
        payload: []
    }
}

export const postShelter = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`http://localhost:3001/createShelter`, payload)
        return response
    } 
}

export const getPetsFilter = (link) => {
    return async function (dispatch){
        try{
            let json = await axios(link)
            return dispatch({
                type: GET_PETS_FILTER, payload: json.data
            })
        }catch(error){
            return error
        }
    }
}


export const startLogin= (email, password) =>{
    return async(dispatch)=>{
        const resp= await fetchSinToken('login',{email, password}, 'POST')
        const body = await resp.json()
        if(body.ok){
            localStorage.setItem('token',body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(login({id: body.id, email: body.email}))
        }
        else{
            alert(body.msg)
        }
    }
}

export const startRegister= (name, phoneNumber, description, address, email, password ,cityId, role) =>{
    return async(dispatch)=>{
        const resp= await fetchSinToken('createShelter',{name, phoneNumber, description, address, email, password ,cityId, role}, 'POST')
        const body = await resp.json()
        if(body.ok){
            localStorage.setItem('token',body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(login({id: body.id, email: body.email}))
        }
        else{
            alert(body.msg)
        }
    }
}

export const startChecking = ( ) =>{
    return async(dispatch) =>{
       
        const resp= await fetchConToken('renew')
        const body = await resp.json()
        if(body.ok){
            localStorage.setItem('token',body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(login({id: body.id, email: body.email}))
        }
        else{
            dispatch(checkingFinish())
        }
    }
}

const checkingFinish = () => ({type: authCheckingFinish})

export const login= (user) =>({
    type: authLogin,
    payload: user
})


export const getTemperaments = () => {
    return {
        type: GET_TEMPERAMENTS, payload: null
    }
} 

export const getCityId = (id) => {
    return {
        type: GET_ID_CITY, payload: id
    }
}

export const getAges = () => {
    return {
        type: GET_AGES, payload: null
    }
} 

export const getStatus=()=>{
    return{
      type:GET_STATUS, payload:null
    }
}

export const getSearchShelters = (name) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/searchShelter?name=` + name);
        return dispatch({
            type: GET_SEARCH_SHELTERS,
            payload: json.data
        })
    } 
};

export const getSpecies = () => {
    return  {
            type: GET_SPECIES, payload: null
        }
}

export const getFilterShelters = () => {
    return  {
            type: GET_FILTER_SHELTERS, payload: null
        }

}


export const getIdFromShelterAndCity = (userId) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/sheltercityid/${userId}`);
        return dispatch({
            type: GET_ID_FROM_SHELTER_AND_CITY,
            payload: json.data
        })
    } 
};