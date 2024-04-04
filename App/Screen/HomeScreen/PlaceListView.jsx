import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import Placeitem from './Placeitem';
import { SelectMarkerContext } from '../../Context/SelectMarkerContext';
  
export default function PlaceLitView({placeList}) {
 const FlatListRef = useRef(null);
 const {selectedMarker,setSelectedMarker}=useContext(SelectMarkerContext);

 useEffect(()=>{
  selectedMarker&&scrollToIndex(selectedMarker)
   
  },[selectedMarker])


  const scrollToIndex = (index)=>{
    FlatListRef.current?.scrollToIndex({animated:true,index})
  }
 const getItemLayout= (_,index)=>({
  length:Dimensions.get('window').width,
  offset:Dimensions.get('window').width*index,
  index
 });

  return (
    <View>
      <FlatList
      data={placeList}
      horizontal={true}
      pagingEnabled
      ref={FlatListRef}
      getItemLayout={getItemLayout}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View key={index}>
       <Placeitem place={item} />
        </View>
      )}
      />
    </View>
  )
} 
