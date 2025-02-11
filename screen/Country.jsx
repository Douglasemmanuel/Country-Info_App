import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView  , Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { useNavigation } from '@react-navigation/native'
const Country = () => {
  const navigation = useNavigation()
  function move(){
    navigation.goBack()
  }
  return (
   <SafeAreaView>
     <View style={{marginLeft:10 , marginRight:10 , marginTop:20}}>
      <View style={{flexDirection:'row'}}>
      <Pressable onPress={move}>
      <FontAwesomeIcon icon={faArrowLeft} size={22}   color="#888"  />
      </Pressable>
      <View  style={{justifyContent: 'center', alignItems: 'center' , flex:1 }}>
      <Text style={{  fontWeight:'bold' , fontSize:18,textAlign:'center' }}>Country</Text>
      </View>
      </View>
     <View style={{marginTop:10}}>
      <Crod/>
     <One/>
     <Two/>
     <Three/>
     <Four/>
     </View>
    </View>
   </SafeAreaView>
  )
}
const Crod =()=>{
  return (
    <View>
      <Image 
                source={require('../images/HNGPIX.jpg')}
                />
    </View>
  )
}
const One =()=>{
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row',marginTop:5 }}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Population:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey' ,marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Region:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Capital:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Motto:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey' ,marginLeft:5}}>333333</Text>
      </View>
    </View>
  )
}
const Two =()=>{
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Official language:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Ethic group:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Religion:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Government:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
    </View>
  )
}
const Three =()=>{
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row'  , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Independence:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Area:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Currency:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>GDP:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
    </View>
  )
}
const Four =()=>{
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Time Zone:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Date format:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Dailing format:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'black'}}>Driving side:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
    </View>
  )
}
export default Country

const styles = StyleSheet.create({})