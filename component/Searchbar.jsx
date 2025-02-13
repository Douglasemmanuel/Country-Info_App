import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { useState , useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../context/ThemeContext'
const Searchbar = ({searchText , setSearchText}) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    // const [searchText, setSearchText] = useState('');
    const navigation = useNavigation()
    const handleClearText = () => {
      setSearchText('');
      navigation.goBack(); // Assuming you're using React Navigation to navigate
    };
  return (
    <View style={styles.container2}>
      <View style={styles.searchBarContainer}>
        {/* Search Icon */}
        <FontAwesomeIcon icon={faMagnifyingGlass} size={20}   color="#888"    style={styles.icon}/>  
      
         

        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search Country"
          placeholderTextColor="#888"
          value={searchText}
          textAlignVertical="center"
          textAlign="center"
          onChangeText={setSearchText}
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
})