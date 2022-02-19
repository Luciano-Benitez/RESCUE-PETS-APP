import {
  GET_COUNTRIES,
  GET_STATES,
  GET_CITIES,
  CLEAN_STATE_FORM,
  POST_FORM_REGISTER,
  GET_PETS,
} from "../Actions/types";

const initialState = {
  countries: [],
  states: [],
  cities: [],
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
        states: payload,
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
    default:
      return state;
  }
}
