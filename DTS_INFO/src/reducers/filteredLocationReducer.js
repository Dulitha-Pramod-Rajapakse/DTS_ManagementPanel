// reducers/locationReducer.js
import { SET_LOCATIONS } from "../constants/filtredLocationConstants";

const initialState = {
  locations: [
    { location: "HUC", available: 35 },
    { location: "HUR", available: 80 },
    { location: "Piping", available: 30 },
    { location: "Afloat", available: 35 },
    { location: "Scaffolding", available: 8 },
  ],
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return { ...state, locations: action.payload };
    default:
      return state;
  }
};
