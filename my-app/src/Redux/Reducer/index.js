import { GET_COUNTRIES, GET_STATES, GET_CITIES } from "../Actions/types";

const initialState = {
  countries: [],
  states: [],
  cities: []
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

    case GET_CITIES:
      return {
        ...state,
        cities: payload,
      };
    default:
      return state;
  }
}
