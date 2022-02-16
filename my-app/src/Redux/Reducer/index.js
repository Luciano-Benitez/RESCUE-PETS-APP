import {TEST } from "../Actions/index";
const initialState = {
 
 
};

export default function rooReducer(state = initialState, {type, payload }) {
    switch (type) {
      case TEST:
        return {
          ...state,
          
        };

        default:
            return state;
        }
    };
    