import { StyleSheet, Text, View , Pressable , TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons/faCircleChevronUp'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons/faCircleChevronDown'
import { Modal } from 'react-native'
import { useContext , useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Checkbox from 'expo-checkbox';
const FilterBottom = ({setIsFilterModalVisible ,isDetail1Expanded,isDetail2Expanded,handleDetail1Click,handleDetail2Click,setIsDetail1Expanded,setIsDetail2Expanded}) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const Finish= ()=>{
    setIsFilterModalVisible(false)
    setIsDetail1Expanded(false)
    setIsDetail1Expanded(false)
}

  return (
    <View>
      <View style={{flexDirection:'row' , justifyContent:'space-between' , gap:48}}>
            <Text  style={[styles.bofo, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Filter</Text>
            <View >
            <TouchableOpacity  onPress={Finish} >
            <View style={styles.ifobar1}>
             <FontAwesomeIcon icon={faXmark}  size={15}/>
             {/* <FontAwesomeIcon icon={faCircleChevronDown} /> */}
            </View>
           </TouchableOpacity>
            </View>
      </View>
      <View  style={{marginTop:24}}>
        <Continent isDetail1Expanded={isDetail1Expanded}        handleDetail1Click={handleDetail1Click} />
        <TimeZone isDetail2Expanded={isDetail2Expanded}          handleDetail2Click={handleDetail2Click}/>
          {isDetail1Expanded || isDetail2Expanded ? 
            <View style={{flexDirection:'row' , justifyContent:'space-between' , marginTop:24 , gap:40}}>
            <TouchableOpacity style={[ !isDarkMode? styles.buttonWithBorder :styles.buttonWithBorder2  , isDarkMode ? styles.darkModeContainer : styles.lightModeContainer]}>
            <Text style={[styles.buttonText1, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithoutBorder}>
            <Text style={styles.buttonText}>Show results</Text>
          </TouchableOpacity>
           </View>
          :
          <View></View>
          }
      </View>
    </View>
  )
}
const Continent =({isDetail1Expanded , handleDetail1Click})=>{
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);
  const [isChecked7, setChecked7] = useState(false);
  return (
    <View style={{marginTop:16}}>
       <View style={{flexDirection:'row' , justifyContent:'space-between' , gap:48}}>
            <Text style={[isDetail1Expanded ? styles.bofo : styles.tagd, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Continent</Text>
            <View >
            <TouchableOpacity onPress={handleDetail1Click}  >
              {isDetail1Expanded ? 
             <FontAwesomeIcon icon={faCircleChevronDown}  size={15} color={isDarkMode ? 'white' : 'grey'}/>
                :
              <FontAwesomeIcon icon={faCircleChevronUp}  size={15} color={isDarkMode ? 'white' : 'grey'}/> 
                        }
           </TouchableOpacity>
            </View>
            </View>
            {isDetail1Expanded && (
                <View style={{marginTop:6}}>
    <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Africa</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked1}
          onValueChange={setChecked1}
          color={isChecked1 ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7,justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Antarctica</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked2}
          onValueChange={setChecked2}
          color={isChecked2 ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Asia</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked3}
          onValueChange={setChecked3}
          color={isChecked3 ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7 , justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Australia</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked7}
          onValueChange={setChecked7}
          color={isChecked7 ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7,justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Europe</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked4}
          onValueChange={setChecked4}
          color={isChecked4 ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>North America</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked5}
          onValueChange={setChecked5}
          color={isChecked5 ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>South America</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked6}
          onValueChange={setChecked6}
          color={isChecked6 ? 'black' : undefined}
        />
    </View>
</View>

    </View> 
            )}
    {/* <View style={{marginTop:6}}>
    <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Africa</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7,justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Antarctica</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Asia</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7 , justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Australia</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7,justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Europe</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>North America</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'black' : undefined}
        />
    </View>
</View>
<View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
    <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>South America</Text>
    <View style={{}}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'black' : undefined}
        />
    </View>
</View>

    </View> */}
    </View>
  )
}
const TimeZone =({isDetail2Expanded , handleDetail2Click})=>{
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setChecked] = useState(false);
  // const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);
  const [isChecked7, setChecked7] = useState(false);
  return (
    <View style={{marginTop:22}}>
       <View style={{flexDirection:'row' , justifyContent:'space-between',gap:48}}>
            <Text style={[ isDetail2Expanded ? styles.bofo : styles.tagd, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Time Zone</Text>
            <View >
            <TouchableOpacity onPress={handleDetail2Click}  >
            {isDetail2Expanded ? 
             <FontAwesomeIcon icon={faCircleChevronDown}  size={15} color={isDarkMode ? 'white' : 'grey'}/>
                :
              <FontAwesomeIcon icon={faCircleChevronUp}  size={15} color={isDarkMode ? 'white' : 'grey'}/> 
                        }
           </TouchableOpacity>
            </View>
            </View>
            {isDetail2Expanded && (
              <View style={{marginTop:6}}>
              <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
              <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GMT+1:00</Text>
              <View style={{}}>
              <Checkbox
                    style={styles.checkbox}
                    value={isChecked1}
                    onValueChange={setChecked1}
                    color={isChecked1 ? 'black' : undefined}
                  />
              </View>
          </View>
          <View style={{flexDirection:'row' , marginTop:7,justifyContent:'space-between',gap:48}}>
              <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GMT+2:00</Text>
              <View style={{}}>
              <Checkbox
                    style={styles.checkbox}
                    value={isChecked2}
                    onValueChange={setChecked2}
                    color={isChecked2 ? 'black' : undefined}
                  />
              </View>
          </View>
          <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
              <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GMT+3:00</Text>
              <View style={{}}>
              <Checkbox
                    style={styles.checkbox}
                    value={isChecked3}
                    onValueChange={setChecked3}
                    color={isChecked3 ? 'black' : undefined}
                  />
              </View>
          </View>
          <View style={{flexDirection:'row' , marginTop:7 , justifyContent:'space-between',gap:48}}>
              <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GMT+4:00</Text>
              <View style={{}}>
              <Checkbox
                    style={styles.checkbox}
                    value={isChecked4}
                    onValueChange={setChecked4}
                    color={isChecked4 ? 'black' : undefined}
                  />
              </View>
          </View>
          <View style={{flexDirection:'row' , marginTop:7,justifyContent:'space-between',gap:48}}>
              <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GMT+5:00</Text>
              <View style={{}}>
              <Checkbox
                    style={styles.checkbox}
                    value={isChecked5}
                    onValueChange={setChecked5}
                    color={isChecked5 ? 'black' : undefined}
                  />
              </View>
          </View>
          <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
              <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GMT+6:00</Text>
              <View style={{}}>
              <Checkbox
                    style={styles.checkbox}
                    value={isChecked6}
                    onValueChange={setChecked6}
                    color={isChecked6 ? 'black' : undefined}
                  />
              </View>
          </View>
          <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
              <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GMT+7:00</Text>
              <View style={{}}>
              <Checkbox
                    style={styles.checkbox}
                    value={isChecked7}
                    onValueChange={setChecked7}
                    color={isChecked7 ? 'black' : undefined}
                  />
              </View>
          </View>
          <View style={{flexDirection:'row' , marginTop:7, justifyContent:'space-between',gap:48}}>
              <Text style={[styles.pagtitle, isDarkMode ? styles.darkModeText : styles.lightModeText]}>GMT-6:00</Text>
              <View style={{}}>
              <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? 'black' : undefined}
                  />
              </View>
          </View>
          
              </View>
            )}
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
        // marginRight:15,
        padding:7,
      },
      pagtitle:{
        fontWeight:'400',
        // flex:4,
        fontSize:16,
      },
      bofo:{
        fontSize:20,
        fontWeight:'800'
      },
      tagd:{
        fontSize:16,
        fontWeight:'400'
      },
      tagd2:{
        fontSize:20,
        fontWeight:'800'
      },
      buttonWithBorder: {
        // backgroundColor: 'white', // Green background
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2, // Add border
        borderColor: 'black', // Border color
        marginBottom: 10,
      },
      buttonWithBorder2: {
        // backgroundColor: 'white', // Green background
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2, // Add border
        borderColor: 'white', // Border color
        marginBottom: 10,
      },
      buttonWithoutBorder: {
        backgroundColor: '#FF5733', // Orange background
        paddingVertical: 10,
        paddingHorizontal: 45,
        borderRadius: 5,
        marginBottom: 10,
        // marginRight:20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'bold',
      },
      buttonText1: {
        // color: 'black',
        fontSize: 16,
        textAlign: 'center',
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
      searchwidth:{
        borderWidth:1,
        borderColor:'white'
      },
})