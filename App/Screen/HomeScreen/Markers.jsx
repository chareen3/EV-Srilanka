import { View, Text, Image } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
export default function Markers({place}) {
  return (
    <Marker
          coordinate={{
            latitude:place.location?.latitude,
            longitude:place.location?.longitude,
          }}
        >
          <Image 
            source={require('../../../assets/images/location.png')}
            style={{ width: 40, height: 40 }}
          />
        </Marker>
  )
}