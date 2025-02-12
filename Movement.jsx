import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from './screen/Home';
import Country from './screen/Country';
import Search from './screen/Search';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
const Stack = createStackNavigator()
const Movement = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home'screenOptions={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: 'black' }}>
        <Stack.Screen name='home' component={Home} options={{headerShown:false , headerLeft: () => null , gestureEnabled:false}} />
        <Stack.Screen name='country' component={Country}  options={{headerShown:false }} />
        <Stack.Screen name='search' component={Search}  options={{headerShown:false }} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Movement

const styles = StyleSheet.create({})