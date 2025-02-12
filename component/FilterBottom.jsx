import { StyleSheet, Text, View , Pressable , TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Modal } from 'react-native'

const FilterBottom = () => {
  return (
    <View>
      <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
            <Text style={{fontSize:20 , fontWeight:'800' }}>Languages</Text>
            <View >
            <TouchableOpacity  onPress={Finish} >
            <View style={styles.ifobar1}>
             <FontAwesomeIcon icon={faXmark}  size={15}/>
            </View>
           </TouchableOpacity>
            </View>
            </View>
    </View>
  )
}

export default FilterBottom

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
})