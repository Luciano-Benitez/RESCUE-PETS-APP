import axios from 'axios'
import {GET_COUNTRIES} from './types.js'



export const getCountries = () => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/country`)
        return dispatch({
            type: GET_COUNTRIES, payload: json.data
        })
    } 
}