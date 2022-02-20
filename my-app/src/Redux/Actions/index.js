import axios from 'axios'
import {GET_COUNTRIES, 
    GET_STATES, 
    GET_CITIES,
    CLEAN_STATE_FORM,
    GET_PETS,
    POST_FORM_REGISTER,
    GET_PETS_FILTER} from './types.js'

    
 



    export const getPets = () => {
        return async function (dispatch) {
            try {
            let json = await axios(`http://localhost:3001/pets`);
            let size = json.data.length/4;
            let NewPets = function (myArray, Size){
                var results = [];
                while (myArray.length) {
                    results.push(myArray.splice(0, Size));
                }
                return results;
            }
           let newpets= NewPets(json.data, size);
            console.log([newpets]  , "partido")
            dispatch({type: GET_PETS, payload: newpets[0]}); // de momento solo muestra el primer array
           // dispatch({type: GET_PETS, payload:json.data}); //Pets sin división
            
           
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

export const getPetsFilter = (id) => {
    return async function (dispatch){
        try{
            let response = await fetch(`http://localhost:3001/pets`)
            .then(response => response.json())
            return dispatch({type:GET_PETS_FILTER,
            payload: {response,d:Number(id)}})
        }catch(error){

        }
    }
}