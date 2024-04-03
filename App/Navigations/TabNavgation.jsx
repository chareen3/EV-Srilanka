import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen'
import Favorite from '../Screen/FavoriteScreen/FavoriteScreen'
import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../Utils/colors'

const Tab = createBottomTabNavigator();
export default function TabNavgation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
    }}>
    <Tab.Screen name="Home" component={HomeScreen} 
        options={{
        tabBarLabel:'Search',
        tabBarActiveTintColor:colors.PRIMARY,
        tabBarIcon:({color,size})=>(
           <Ionicons name="search" size={size} color={color} />

        )
    }} />
    <Tab.Screen name="Favorite" component={Favorite} 
    options={{
        tabBarLabel:'Favorite',
        tabBarActiveTintColor:colors.PRIMARY,
        tabBarIcon:({color,size})=>(
            <Ionicons name="heart" size={size} color={color} />

        )
    }} />
    <Tab.Screen name="{Profile}" component={ProfileScreen} 
    options={{
        tabBarLabel:'Search',
        tabBarActiveTintColor:colors.PRIMARY,
        tabBarIcon:({color,size})=>(
            <FontAwesome name="user-circle" size={24} color="black" />

        )
    }}/>
  </Tab.Navigator>

  )
}