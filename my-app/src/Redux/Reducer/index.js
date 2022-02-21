import {
  GET_COUNTRIES,
  GET_STATES,
  GET_CITIES,
  CLEAN_STATE_FORM,
  POST_FORM_REGISTER,
  GET_PETS_FILTER,
  GET_PETS,
  GET_TEMPERAMENTS,
  GET_ID_CITY
  
} from "../Actions/types";

const initialState = {
  countries: [],
  states: [],
  cities: [],
  petsfilter: [], 
  pets: [],
  temperaments: [],
  cityId: []

};

export default function rooReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };

    case GET_STATES:
      return {
        ...state,
        states: payload,
      };

      case GET_PETS:
      return {
        ...state,
        pets: payload,
      };

    case GET_CITIES:
      return {
        ...state,
        cities: payload,
      };
    case CLEAN_STATE_FORM:
      return {
        ...state,
        states: payload,
        cities: payload,
      };
    case POST_FORM_REGISTER:
      return {
        ...state,
      };

    case GET_PETS_FILTER:
      return {
        ...state,
        petsfilter : payload
      } 
    case GET_TEMPERAMENTS:
      let filteredTemperaments = []

      state.petsfilter.map(el => {
        if(!filteredTemperaments.length) return filteredTemperaments.push(el.temperament)
        let temp = el.temperament.id
        let obj = filteredTemperaments.find( temperamento => temperamento.id === temp )
        if(!obj) return filteredTemperaments.push(el.temperament)
      })
      return {
        ...state,
        temperaments : filteredTemperaments
      } 
      case GET_ID_CITY:
        return {
          ...state,
          cityId : payload
        } 


    default:
      return state;
  }
}
