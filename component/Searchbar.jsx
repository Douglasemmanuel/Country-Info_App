import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { useState , useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../context/ThemeContext'
const Searchbar = ({searchText , setSearchText,handleInputChange , toggle , setButtonDetail}) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    // const [searchText, setSearchText] = useState('');
    const navigation = useNavigation()
    const handleClearText = () => {
      setSearchText('');
      toggle()
      setButtonDetail(true)
      // navigation.goBack(); // Assuming you're using React Navigation to navigate
    };
    // const handleSearchChange = (text) => {
    //   setSearchText(text);
    //   if (text.length === 0) {
    //     setButtonDetail(false); // If search is cleared, show normal component
    //   } else {
    //     setSearchText(true); // If text exists, we are in search mode
    //   }
    console.log('COUNTY-NAME', searchText)
  return (
    <View style={styles.container2}>
      <View style={[styles.searchBarContainer,isDarkMode ? styles.darkModeContainer : styles.lightModeContainer ]}>
        {/* Search Icon */}
        <FontAwesomeIcon icon={faMagnifyingGlass} size={20}   color="#888"    style={styles.icon}/>  
      
         

        {/* Search Input */}
        <TextInput
          style={[styles.searchInput, isDarkMode ? styles.darkModeText : styles.lightModeText]}
          placeholder="Search Country"
          placeholderTextColor="#888"
          value={searchText}
          textAlignVertical="center"
          textAlign="center"
          onChangeText={handleInputChange}
        />
        {searchText.length > 0 && (
        <TouchableOpacity onPress={ handleClearText}>
        <FontAwesomeIcon icon={faXmark} size={20}   color="#888"    style={styles.icon}/>  
        </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container2: {
        marginTop:25,
        marginLeft:10,
      },
      searchwidth:{
        borderWidth:1,
        borderColor:'white'
      },
      searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5, // Makes the container round
        paddingHorizontal: 15,
        width: '97%', // Adjust the width as needed
        height: 50, // Height of the search bar
        elevation: 5, // Optional: Adds shadow for Android
        shadowColor: '#000', // Optional: Adds shadow for iOS
        shadowOpacity: 0.1, // Optional: Adds shadow for iOS
        shadowRadius: 10, // Optional: Adds shadow for iO
    },
     icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1, // Makes the input take up remaining space
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  darkModeText:{
    color:'white'
  },
  lightModeText:{
    color:'black',
  },
  darkModeContainer:{
    backgroundColor:'#2F3A4D'
  },
  lightModeContainer:{
    backgroundColor:'white',
  },
})