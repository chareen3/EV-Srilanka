import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Utils/colors';
import GlobalApi from '../../Utils/GlobalApi';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function Placeitem({place}) {
  
    const PLACE_PHOTO_BASE_URL="https://places.googleapis.com/v1/";
  return (
    <View style={{
        backgroundColor:Colors.WHITE,
        margin:5,
        borderRadius:10,
        width:Dimensions.get('screen').width*0.9
        
        
        }}>
           <LinearGradient colors={['transparent','#ffffff','#ffffff']}
>
     <Image source={
    place?.photos?
    {uri:PLACE_PHOTO_BASE_URL+place?.photos[0]?.name+
     "/media?key="+GlobalApi?.API_KEY+"&maxHeightPx=800&maxWidthPx=1200"}
     :require('../../../assets/images/login-bg.jpg')}
      style={{width:'100%',height:130,borderRadius:10,zIndex:-1}}
        />
        <View style={{padding:15}} >
         <Text style={{
          fontSize:23,
          fontFamily:'Poppins-SemiBold',
         }}>{place.displayName?.text} </Text>


         <Text style={{
            fontSize:15,
            fontFamily:'Poppins-Regular',
            color:Colors.GRAY,
         }}>{place?.formattedAddress} </Text>
              
              <View style={{
           
            marginTop:5,
            
                
        
            
        }}>
         <Text style={{
            fontSize:17,
            color:Colors.GRAY,
            fontFamily:'Poppins'
         }}>Connectors</Text>
         <Text style={{
            fontFamily:'Poppins-SemiBold',
            fontSize:20,
            marginTop:2
         }}>{place?.evChargeOptions?.connectorCount || '🔌'} Points</Text>
        </View>
        <View style={{
            padding:12,
            backgroundColor:Colors.PRIMARY,
            borderRadius:6,
            paddingHorizontal:14,
            marginLeft:Dimensions.get('screen').width*0.7,
            marginTop:-40,
            }}>
              <FontAwesome name="location-arrow"
              size={25} color="white" />

        </View>
         </View>
   
       
        </LinearGradient>
    </View>
    
  )
}