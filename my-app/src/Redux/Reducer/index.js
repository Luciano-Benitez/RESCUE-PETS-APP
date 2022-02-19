import {GET_COUNTRIES} from "../Actions/types";

const initialState = {
 
  countries : []
 
};

export default function rooReducer(state = initialState, {type, payload }) {
    switch (type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: payload
        };

        default:
            return state;
        }
    };
    