import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyA_lNtcigK_bRLyvEQoBlmWgRukF42S69w";

const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': API_KEY,
    'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.location,places.evChargeOptions,places.photos'
  }
};

const newNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
  newNearByPlace, 
  API_KEY,
};
