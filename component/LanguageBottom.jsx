import { StyleSheet, Text, View , Pressable , TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Modal } from 'react-native'
import { useContext , useState } from 'react'
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
    const [selectedValue, setSelectedValue] = useState(false);
    const handlePress = () => {
    setSelectedValue(prevState => !prevState);
        };
    return (
        <View >
            <View style={{flexDirection:'row' , justifyContent:'space-between' , gap:48}}>
            <Text style={[styles.tagd, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Languages</Text>
            <View >
            <TouchableOpacity  onPress={Finish} >
            <View style={styles.ifobar1}>
             <FontAwesomeIcon icon={faXmark}  size={15}/>
            </View>
           </TouchableOpacity>
            </View>
            </View>
            <View style={{marginTop:24}}>
            <View style={{flexDirection:'row' , marginTop:12, justifyContent:'space-between' , gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Bahasa</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'row' , marginTop:12, justifyContent:'space-between', gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Deutsch</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12, gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>English</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12 , gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Español</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12,gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>italiano</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12 , gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>português</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12 , gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>pycckuu</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12, gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>svenska</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12,gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>türkçe</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12 ,gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}> 语 漢語</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12,gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}> العربية</Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row' , marginTop:12,gap:48}}>
            <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>मानक </Text>
            <TouchableOpacity onPress={handlePress}>
          <View style={styles.radioButton}>
          <View style={styles.radioButtonInner} />
           
          </View>
        </TouchableOpacity>
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
        // marginRight:15,
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
        fontWeight:'800',
      },
      pagtitle:{
        fontWeight:'600',
        flex:1,
        fontSize:18,
      },
      radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginVertical: 10,
      },
      radioButton: {
        width: 20,
        height: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
      },
      radioButtonInner: {
        width: 15,
        height: 15,
        borderRadius: 8,
        backgroundColor: 'black',
      },
})