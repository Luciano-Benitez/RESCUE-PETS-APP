import {GET_COUNTRIES, GET_STATES} from "../Actions/types";

const initialState = {
 
  countries : [],
  states: []
 
};

export default function rooReducer(state = initialState, {type, payload }) {
    switch (type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: payload
        };
        case GET_STATES:
        return {
          ...state,
          states: payload
        };

        default:
            return state;
        }
    };
    