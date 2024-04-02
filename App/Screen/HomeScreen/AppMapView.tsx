import { View, Image, Text,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewStyle from '../../Utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext';


export default function App() {
  const {location,setLocation}=useContext(UserLocationContext);
    return location?.latitude && (

    <View style={styles.container}>

        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
          coordinate={{
            latitude:location?.latitude,
            longitude: location?.longitude
          }}
          >
            <Image source= {require('../../../assets/images/car-marker.png')} 
            
            style={{width:60,height:60}}
            
            />

          </Marker>
            </MapView>
   
    </View>
    )
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