import axios from 'axios'
import {GET_COUNTRIES, 
    GET_STATES, 
    GET_CITIES,
    CLEAN_STATE_FORM,
    POST_FORM_REGISTER} from './types.js'



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