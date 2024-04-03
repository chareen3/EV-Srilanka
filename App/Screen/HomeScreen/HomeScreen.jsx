import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppMapView from './AppMapView';
import Header from './Header';
import SearchBar from './SearchBar';
import { UserLocationContext } from '../../Context/UserLocationContext';
import GlobalApi from '../../Utils/GlobalApi';
import PlaceLitView from './PlaceListView';

export default function HomeScreen() {

const {location,setLocation}=useContext(UserLocationContext);
const [placeList,setPlaceList]=useState([]);
useEffect(()=>{
location&&GetNearByPlace();
},[location])

const GetNearByPlace=()=>{
  const data={
    "includedTypes": ["electric_vehicle_charging_station"],
  "maxResultCount": 10,
  "locationRestriction": {
    "circle": {
      "center": {
        "latitude": location?.latitude,
        "longitude": location?.longitude,
      },
      "radius": 10000.0
    }
  }
  }
  GlobalApi.newNearByPlace(data).then(resp=>{
    console.log(JSON.stringify(resp.data));
    setPlaceList(resp.data?.places);
  })
}

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location)=>console.log(location)}
        />
      </View>
      <AppMapView />
      <View style={styles.placeListContainer}>
        {placeList&&<PlaceLitView placeList={placeList} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 22,
    left: 0,
    right: 0,
    padding: 10,
    paddingHorizontal: 20,
  },
  placeListContainer: {
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    width: '100%',
  },
});
