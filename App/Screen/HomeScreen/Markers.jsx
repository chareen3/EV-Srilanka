// Markers.jsx

import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { SelectMarkerContext } from '../../Context/SelectMarkerContext';

export default function Markers({ index, place }) {
  const { selectedMarker, setSelectedMarker } = useContext(SelectMarkerContext);
  
  return place && (
    <Marker
      coordinate={{
        latitude: place.location?.latitude,
        longitude: place.location?.longitude
      }}
      onPress={() => setSelectedMarker(index)}
    >
      <Image 
        source={require('../../../assets/images/location.png')}
        style={{ width: 40, height: 40 }}
      />
    </Marker>
  );
}
