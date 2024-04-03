import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Placeitem from './Placeitem';
  
export default function PlaceLitView({placeList}) {
  console.log("***",placeList);
  return (
    <View>
      <FlatList
      data={placeList}
      horizontal={true}
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