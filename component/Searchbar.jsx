import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { useState } from 'react'
const Searchbar = () => {
    const [searchText, setSearchText] = useState('');
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
          onChangeText={setSearchText}
        />
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
})