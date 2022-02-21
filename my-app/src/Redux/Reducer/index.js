import {
  GET_COUNTRIES,
  GET_STATES,
  GET_CITIES,
  CLEAN_STATE_FORM,
  POST_FORM_REGISTER,
  GET_PETS_FILTER,
  GET_PETS,
  GET_TEMPERAMENTS,
  GET_ID_CITY,
  GET_AGES,
  GET_STATUS,
  GET_SEARCH_SHELTERS
  
} from "../Actions/types";

const initialState = {
  countries: [],
  states: [],
  cities: [],
  petsfilter: [], 
  pets: [],
  temperaments: [],
  cityId: [],
  ages: [],
  status:[]

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
      case GET_AGES:
        let filteredAges = []
  
        state.petsfilter.map(el => {
          if(!filteredAges.length) return filteredAges.push(el.age)
          let temp = el.age.id
          let obj = filteredAges.find( age => age.id === temp )
          if(!obj) return filteredAges.push(el.age)
        })
        return {
          ...state,
          ages : filteredAges
        }
      case GET_ID_CITY:
        return {
          ...state,
          cityId : payload
        } 
        case GET_STATUS:
          let filteredStatus = []
    
          state.petsfilter.map(el => {
            if(!filteredStatus.length) return filteredStatus.push(el.petStatus)
            let ele = el.petStatus.id
            let obj = filteredStatus.find( sta => sta.id === ele )
            if(!obj) return filteredStatus.push(el.petStatus)
          })
          return {
            ...state,
            status : filteredStatus
          }

      case GET_SEARCH_SHELTERS:
          return{
            ...state,
            Shelters: payload
          };

    default:
      return state;
  }
}
