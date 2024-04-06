// setSelectedMarker.js

import { useContext } from 'react';
import { SelectMarkerContext } from './SelectMarkerContext';

// This function takes a value as input and updates the selectedMarker value in the context
export const setSelectedMarker = (value) => {
  const { setSelectedMarker } = useContext(SelectMarkerContext);
  setSelectedMarker(value);
};
