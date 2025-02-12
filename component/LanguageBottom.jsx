import { StyleSheet, Text, View , Pressable , TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Modal } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const LanguageBottom = ({  setIsLanguageModalVisible }) => {
    const Finish= ()=>{
        setIsLanguageModalVisible(false)
    }
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
      <Nod Finish={Finish}/>
    
  )
  
}
const Nod =({Finish})=>{
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <View >
            <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
            <Text style={[styles.tagd, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Languages</Text>
            <View >
            <TouchableOpacity  onPress={Finish} >
            <View style={styles.ifobar1}>
             <FontAwesomeIcon icon={faXmark}  size={15}/>
            </View>
           </TouchableOpacity>
            </View>
            </View>
            <View style={{marginTop:6}}>
            <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between'}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between'}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Deutsch</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>English</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:7}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
            </View>

        </View>
    )
}

export default LanguageBottom

const styles = StyleSheet.create({
    ifobar1:{
        // flex:1,
        alignItems: 'center',
        backgroundColor: '#C0C0C0',
        borderRadius: 5, // Makes the container round
        elevation: 5, // Optional: Adds shadow for Android
        shadowColor: '#000', // Optional: Adds shadow for iOS
        shadowOpacity: 0.1, // Optional: Adds shadow for iOS
        shadowRadius: 10, // Optional: Adds shadow for iO
        marginRight:15,
        padding:7,
      },
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
      tagd:{
        fontSize:20,
        fontWeight:'800'
        // paddingLeft:10 ,
        // paddingRight:10 , 
        // paddingTop:10 ,
        // flex: 1,
      },
      pagtitle:{
        fontWeight:'bold',
        flex:1,
        fontSize:18,
      }
})