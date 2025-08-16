// actions/locationActions.js
import { SET_LOCATIONS } from "../constants/filtredLocationConstants";

export const setLocations = (locations) => ({
  type: SET_LOCATIONS,
  payload: locations,
});
