import { StyleSheet, Text, View , Pressable , TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Modal } from 'react-native'
const LanguageBottom = ({  setIsLanguageModalVisible }) => {
    const Finish= ()=>{
        setIsLanguageModalVisible(false)
    }
  return (
      <Nod Finish={Finish}/>
    
  )
  
}
const Nod =({Finish})=>{
    return (
        <View>
            <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
            <Text style={{fontSize:16 , fontWeight:'500' }}>Languages</Text>
            <View >
            <TouchableOpacity  onPress={Finish}>
             <FontAwesomeIcon icon={faXmark}  size={20}/>
           </TouchableOpacity>
            </View>
            </View>
            <View style={{marginTop:6}}>
            <View style={{flexDirection:'row' , marginTop:5 , justifyContent:'space-between'}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5, justifyContent:'space-between'}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flexDirection:'row' , marginTop:5}}>
            <Text style={{color:'black' , fontSize:18 , flex:1}}>Bahasa</Text>
            <View style={{flex:1}}></View>
        </View>
            </View>

        </View>
    )
}

export default LanguageBottom

const styles = StyleSheet.create({})