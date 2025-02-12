import { StyleSheet, Text, View , SafeAreaView, KeyboardAvoidingView , TouchableWithoutFeedback , Pressable , TouchableOpacity , ScrollView  , Image  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Searchbar from '../component/Searchbar'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const Search = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
   <SafeAreaView style={{flex:1}}>
        <View  style={[styles.container , isDarkMode ? styles.darkModeContainer : styles.lightModeContainer]}>
    <Searchbar/>
    <Detail/>
    </View>
   </SafeAreaView>
  )
}
const Detail =()=>{
    const navigation = useNavigation()
    function move(){
      navigation.navigate('country')
    }
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
      return (
          <View style={{marginLeft:10 , marginTop:20}}>
              <Text style={{fontWeight:'bold' , color:'gray' , fontSize:18}}>A</Text>
              <TouchableWithoutFeedback onPress={move}>
              <View style={{flexDirection:'row' , marginTop:10}} >
                   <View style={styles.RecentImagecontainer} >
                  <Image 
                  source={require('../images/HNGPIX.jpg')} 
                  style={styles.RecentroundImage}
                  />
               </View>
                  <View style={{flex:5 , marginTop:5}}>
                  <Text style={[styles.county_name, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Nigeria</Text>
                  <Text style={{fontWeight:'500' , color:'gray' , fontSize:16}}>Abuja</Text>
                  </View>
              </View>
  
              </TouchableWithoutFeedback>
          </View>
      )
  }
export default Search

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
      county_name:{
        fontWeight:'bold',
        fontSize:18
      },
      RecentImagecontainer: {
        flex: 1,
        backgroundColor: 'transparent', 
      },
      RecentroundImage: {
        width: 50,  // You can set any width you want
        height: 50, // Same as width for a perfect circle
        borderRadius: 10,  // Half of the width or height for a round effect
        resizeMode: 'cover', // Or 'contain' depending on your preference
      },
})