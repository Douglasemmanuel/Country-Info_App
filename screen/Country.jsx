import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView  , Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../context/ThemeContext'
import { API_KEY, API_URL } from '../core/credentials'
import { useEffect , useState , useContext } from 'react'
import { useRoute } from '@react-navigation/native'
const Country = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { country } = route.params;
  function move(){
    navigation.goBack()
  }
  console.log('COUNTRY',country.name)
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
   <SafeAreaView style={{flex:1}}>
     <View style={[styles.container , isDarkMode ? styles.darkModeContainer : styles.lightModeContainer]}>
      <View style={{flexDirection:'row' , paddingTop:10}}>
      <Pressable onPress={move}>
      <FontAwesomeIcon icon={faArrowLeft} size={22}   color={isDarkMode ? "white" : "black"}  />
      </Pressable>
      <View  style={{justifyContent: 'center', alignItems: 'center' , flex:1 }}>
      <Text style={[styles.title, isDarkMode ? styles.darkModeText : styles.lightModeText]}>{country.name}</Text>
      </View>
      </View>
     <View style={{marginTop:15}}>
      <Crod country={country}/>
      <View style={{paddingTop:20}} >
      <One/>
     <Two/>
     <Three/>
     <Four/>
      </View>
     </View>
    </View>
   </SafeAreaView>
  )
}
const Crod =({country})=>{
  return (
    <View style={styles.RecentImagecontainer}>
      <Image 
          source={{ uri: country.flag }} 
          style={styles.RecentroundImage}
          />
    </View>
  )
}
const One =()=>{
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row',marginTop:8 }}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Population:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey' ,marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Region:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Capital:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text  style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Motto:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey' ,marginLeft:5}}>333333</Text>
      </View>
    </View>
  )
}
const Two =()=>{
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Official language:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Ethic group:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Religion:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Government:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
    </View>
  )
}
const Three =()=>{
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row'  , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Independence:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Area:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Currency:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GDP:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
    </View>
  )
}
const Four =()=>{
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Time Zone:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Date format:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Dailing format:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:8}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Driving side:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
    </View>
  )
}
export default Country

const styles = StyleSheet.create({
  darkModeText:{
    color:'white'
  },
  lightModeText:{
    color:'black',
  },
  darkModeContainer:{
    backgroundColor:'black'
  },
  lightModeContainer:{
    backgroundColor:'white',
  },
  container:{
    paddingLeft:10 ,
    paddingRight:10 , 
    paddingTop:10 ,
    flex: 1,
  },
  title:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center'
  },
  pagtitle:{
    fontWeight:'bold',
    fontSize:18,
  },
  RecentImagecontainer: {
    flex: 1,
    // backgroundColor: 'transparent', 
  },
  RecentroundImage: {
    width: 400,  // You can set any width you want
    height: 200, // Same as width for a perfect circle
    borderRadius: 10,  // Half of the width or height for a round effect
    resizeMode: 'cover', // Or 'contain' depending on your preference
  },
})