import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView  , Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
const Country = () => {
  const navigation = useNavigation()
  function move(){
    navigation.goBack()
  }
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
   <SafeAreaView style={{flex:1}}>
     <View style={[styles.container , isDarkMode ? styles.darkModeContainer : styles.lightModeContainer]}>
      <View style={{flexDirection:'row' , paddingTop:10}}>
      <Pressable onPress={move}>
      <FontAwesomeIcon icon={faArrowLeft} size={22}   color={isDarkMode ? "white" : "black"}  />
      </Pressable>
      <View  style={{justifyContent: 'center', alignItems: 'center' , flex:1 }}>
      <Text style={[styles.title, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Country</Text>
      </View>
      </View>
     <View style={{marginTop:15}}>
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
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return(
    <View style={{ marginTop:8}}>
      <View style={{flexDirection:'row',marginTop:5 }}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Population:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey' ,marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Region:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Capital:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
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
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Official language:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Ethic group:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Religion:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
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
      <View style={{flexDirection:'row'  , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Independence:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Area:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Currency:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
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
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Time Zone:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Date format:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
        <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Dailing format:</Text>
        <Text style={{ fontWeight:'bold' , fontSize:18 , color:'grey',marginLeft:5}}>333333</Text>
      </View>
      <View style={{flexDirection:'row' , marginTop:5}}>
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
  }
})