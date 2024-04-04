import { View, Image, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewStyle from '../../Utils/MapViewStyle.json';
import { UserLocationContext } from '../../Context/UserLocationContext';
import Markers from './Markers';

export default function App({ placeList }) {
  const { location } = useContext(UserLocationContext);

  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.522,
          longitudeDelta: 0.0421,
        }}
      >
         <Marker
          coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude,
          }}
        >
          <Image
            source={require('../../../assets/images/car-marker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>

  
        {placeList && placeList.map((item, index) => (
          <Markers 
          key={index}  
          place={item} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
