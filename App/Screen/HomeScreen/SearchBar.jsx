import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import colors from '../../Utils/colors';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar({searchedLocation}) {
   
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        marginTop:15,
        paddingHorizontal:5,
        backgroundColor:colors.WHITE,
        borderRadius:6,
        borderColor:colors.BLACK
    }}>
        <FontAwesome name="map-marker" size={24}
        color={colors.GRAY} style={{paddingTop:10}}
        />
  <GooglePlacesAutocomplete
      placeholder='Search EV Charging Stations'
      fetchDetails={true}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        
        searchedLocation(details?.geometry?.location)
      }}
      query={{
        key: 'AIzaSyA_lNtcigK_bRLyvEQoBlmWgRukF42S69w',
        language: 'en',
      }}
    />
    </View>
  )
}