import { StyleSheet, Text, View , KeyboardAvoidingView , TouchableWithoutFeedback,Platform , Pressable , TouchableOpacity , ScrollView , Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView  , Image , Modal , Dimensions , SectionList , ActivityIndicator} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe'
import { faMoon} from '@fortawesome/free-solid-svg-icons/faMoon'
import {faFilter} from '@fortawesome/free-solid-svg-icons/faFilter'
import Searchbar from '../component/Searchbar'
import { useNavigation } from '@react-navigation/native'
import { API_KEY, API_URL } from '../core/credentials'
import { useEffect , useState , useContext , useCallback } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import LanguageBottom from '../component/LanguageBottom'
import FilterBottom from '../component/FilterBottom'
import axios from 'axios'
import { FlatList } from 'react-native'
import _ from 'lodash';
const Home = () => {
  // const headers = {
  //   'Authorization': `Bearer ${API_KEY}`,
  // };
  const [islanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [isDetail1Expanded, setIsDetail1Expanded] = useState(false);
  const [isDetail2Expanded, setIsDetail2Expanded] = useState(false);
  const handleDetail1Click = () => {
    setIsDetail1Expanded(prevState => !prevState);
  };

  const handleDetail2Click = () => {
    setIsDetail2Expanded(prevState => !prevState);
  };
  const navigation = useNavigation()
  const openModal1 = () => {
    setIsLanguageModalVisible(true);
    console.log('hiiiii')
  };
  const openModal2 = () => {
    setIsFilterModalVisible(true);
    console.log('hiiiii')
  };

  const closeModal1 = () => {
    setIsLanguageModalVisible(false);
    console.log('fffff')
  };
  const move =()=>{
    navigation.navigate('search')
  }
const screenHeight = Dimensions.get('window').height;
const modalHeight = screenHeight / 1.6;
const Expand1Height = screenHeight / 2;
const Expand2Height = screenHeight / 1.9;
const FilterHeight = screenHeight / 4;
const ActualHeight = screenHeight / 1.3;
const bottomSheetHeight = screenHeight / 1.8; // Calculate the height of the bottom sheet
const { isDarkMode, toggleTheme } = useContext(ThemeContext);
const [countries, setCountries] = useState([]);
const [carouselImages , setCarouselImages] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        
        // Extract country names, capitals, and flags
        const countryData = response.data.map((country, index) => {
          // Initialize an array to store images (flag and coatOfArms)
          const images = [];
        
          // Add flag if it exists
          if (country.flags && country.flags.png) {
            images.push(country.flags.png);
          }
        
          // Add coat of arms if it exists
          if (country.coatOfArms && country.coatOfArms.png) {
            images.push(country.coatOfArms.png);
          }
        
          return {
            index: index,
            name: country.name.common,
            capital: country.capital ? country.capital[0] : 'N/A', // Some countries may not have a capital
            images: images, // Array containing flag and coat of arms
            population: country.population,
            currency: country.currencies ? Object.values(country.currencies)[0] : 'N/A',
            driving: country.car ? country.car.side : 'N/A',
            timezone: country.timezones ? country.timezones.join(', ') : 'N/A', // Ensure it's a string
            root: country.idd ? country.idd.root : 'N/A',
            suffix: country.idd && country.idd.suffixes ? country.idd.suffixes[0] : 'N/A',
            area: country.area,
            flag: country.flags.png,
            coatOfArms : country.coatOfArms.png,
            region: country.region,
            independent: country.independent,
            language: country.languages ? Object.values(country.languages).join(', ') : 'N/A',
            map: country.maps ? country.maps.googleMaps : 'N/A',
          };
        });
        
        // const countryData = response.data.map((country,index) => (
          
         
        // {
        //   index: index,
        //   name: country.name.common,
        //   capital: country.capital ? country.capital[0] : 'N/A', // Some countries may not have a capital
        //   flag: country.flags.png,
        //   population:country.population,
        //   currency : country.currencies ? Object.values(country.currencies)[0] : 'N/A',
        //   driving: country.car.side ,
        //   timezone:country.timezones,
        //   root: country.idd.root ,
        //  suffix : country.idd.suffixes ? country.idd.suffixes[0] : 'N/A',
        //   area:country.area,
        //   region:country.region,
        //   independent:country.independent,
        //   language:country.languages ? Object.values(country.languages).join(', ') : 'N/A',
        //   coatOfArms : country.coatOfArms.png,
        //   map:country.maps.googleMaps,
        //   // map:country.maps ? Object.values(country.map).join(', '):'N/A'
        // }));
        // console.log('RESPONSE',countryData)
        
        // Sort countries by their name's first letter
        const sortedCountries = countryData.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });

        // Group countries by their first letter
        const groupedCountries = groupByFirstLetter(sortedCountries);

       
  
        setCountries(groupedCountries); // Set the sorted and grouped country data
      } catch (error) {
        console.error('Error fetching countries data:', error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchCountries();
  }, []);

  // Helper function to group countries by their first letter
  

  const groupByFirstLetter = (countryData) => {
    const grouped = countryData.reduce((acc, country) => {
      const firstLetter = country.name.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(country);
      return acc;
    }, {});

    // Convert the object into an array of sections
    return Object.keys(grouped).map(letter => ({
      title: letter,
      data: grouped[letter],
    }));
  };
  const [searchText, setSearchText] = useState('');
  const [countryName, setCountryName] = useState(''); // State to store user input
  const [countryDetails, setCountryDetails] = useState(null);
  const [showButton , setButtonDetail] = useState(true)
  const toggleSwitch = ()=>{
    // setButtonDetail((previous)=> !previous)
    setButtonDetail(true)
    console.log('hiiii')
  }
// Function to fetch country details

const debouncedSearch = useCallback(
  _.debounce((value) => {
    fetchCountryDetails(value); // Trigger the API call with debounced value
  }, 1000), // Adjust the delay (in milliseconds) as needed
  []
);
useEffect(() => {
  debouncedSearch(searchText );
}, [searchText , debouncedSearch]); // Dependency array
const handleInputChange = (text) => {
 setSearchText(text);
  debouncedSearch(text); // Trigger debounce function with input value
 
};
const fetchCountryDetails = async (searchText) => {
  if (!searchText) return; // Don't fetch if input is empty
  setLoading(true);
  setError(null); // Reset previous error

  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${searchText}/`);
    const country = response.data[0];  // Since we're expecting only one country in the response

// Initialize an array to store images (flag and coatOfArms)
const images = [];

// Add flag if it exists
if (country.flags && country.flags.png) {
  images.push(country.flags.png);
}

// Add coat of arms if it exists
if (country.coatOfArms && country.coatOfArms.png) {
  images.push(country.coatOfArms.png);
}

const countryInfo = {
  index: 0,  // Index is usually not needed in this case, since there's just one country
  name: country.name.common,
  capital: country.capital ? country.capital[0] : 'N/A', // Some countries may not have a capital
  images: images, // Array containing flag and coat of arms
  population: country.population,
  currency: country.currencies ? Object.values(country.currencies)[0] : 'N/A',
  driving: country.car ? country.car.side : 'N/A',
  timezone: country.timezones ? country.timezones.join(', ') : 'N/A', // Ensure it's a string
  root: country.idd ? country.idd.root : 'N/A',
  suffix: country.idd && country.idd.suffixes ? country.idd.suffixes[0] : 'N/A',
  area: country.area,
  flag: country.flags ? country.flags.png : 'N/A',
  coatOfArms: country.coatOfArms ? country.coatOfArms.png : 'N/A',
  region: country.region,
  independent: country.independent,
  language: country.languages ? Object.values(country.languages).join(', ') : 'N/A',
};

console.log(countryInfo);  // You can use this object to display in your UI


    // Update state with the selected country data
    setCountryDetails(countryInfo);
    setLoading(false);
    console.log('COUNTRY' , countryData)
  } catch (err) {
    setError('Country not found!'); // Set error if fetch fails
    setLoading(false);
  }
};

  return (
   <SafeAreaView style={{flex: 1}} >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex:1}}>
      <View style={[styles.container , isDarkMode ? styles.darkModeContainer : styles.lightModeContainer]}>
      <View style={{flexDirection:'row', marginLeft:10 , justifyContent:'space-between' , marginTop:3}}>
        {/* <Image source={require('../images/logo1.jpg')} style={styles.RecentroundImage2}/> */}
      <Text  style={[styles.exploretext, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Explore</Text>
      <View  style={{marginRight:10 , marginTop:5}}>
        <TouchableOpacity onPress={toggleTheme}>
          {isDarkMode ? 
            <FontAwesomeIcon icon={faMoon} size={20}   color="white"   />  
            :
            <FontAwesomeIcon icon={faSun} size={20}   color="grey"   />  
        }
      
        </TouchableOpacity>
      </View>
      </View>
      {/* <Searchbar /> */}
      <Searchbar searchText={searchText} setSearchText={setSearchText}   handleInputChange={handleInputChange} toggle={toggleSwitch} showButton={showButton} setButtonDetail={setButtonDetail} />
     {/* <Searchbar   countryName={countryName}  setCountryName={setCountryName}  fetchCountryDetails={fetchCountryDetails}/>  */}
      <View style={{flexDirection:'row', marginLeft:10 , marginTop:20, justifyContent:'space-between' }}>
      <TouchableOpacity onPress={openModal1}>
       <View style={[styles.ifobar, isDarkMode ? styles.darkModeContainer : styles.lightModeContainer]}>
      <View style={{padding:10 , flexDirection:'row'}}>
        <FontAwesomeIcon icon={faGlobe} color={ isDarkMode ?  'white' : 'black'} />
          <Text style={[styles.enf, isDarkMode ? styles.darkModeText : styles.lightModeText]}>ENG</Text>
        </View>
       </View>
      </TouchableOpacity>
       <TouchableOpacity onPress={openModal2}>
       <View style={[styles.ifobar1, isDarkMode ? styles.darkModeContainer : styles.lightModeContainer]}>
       <View style={{padding:10 , flexDirection:'row'}}>
        <FontAwesomeIcon icon={faFilter}  color={ isDarkMode ?  'white' : 'black'} />
          <Text style={[styles.enf, isDarkMode ? styles.darkModeText : styles.lightModeText]}>Filter</Text>
        </View>
       </View>
       </TouchableOpacity>
      </View>
      {searchText !== ''  && countryDetails ? (
           <View>
           {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <SearchDetail  item={countryDetails} />
              
            
          )}
           </View> 
      ):(
        
        <View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={countries}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{marginLeft:20}}>
                {/* Render section header for each letter */}
                {renderHeader(item.title)}
                {item.data.map((country, idx) => (
               <Detail key={idx} item={country} />
              ))}
              </View>
            )}
          />
        )}
        </View>
      
      )}
       
      <Modal
      transparent={true}
      animationType="slide"
      visible={islanguageModalVisible}
      onRequestClose={()=>  setIsLanguageModalVisible(false)}
    >
       <View style={[styles.modalContainer, { height: modalHeight }, isDarkMode ? styles.darkModeContainer : styles.lightModeContainer,isDarkMode && styles.searchwidth]}>
      <LanguageBottom  setIsLanguageModalVisible={setIsLanguageModalVisible}/>
      </View>
    </Modal>
    <Modal
      transparent={true}
      animationType="slide"
      visible={isFilterModalVisible}
      onRequestClose={()=>  setIsFilterModalVisible(false)}
    >
      <View style={[styles.modalContainer, 
       isDarkMode && styles.searchwidth,
        // { height: FilterHeight },
        {
          height: (() => {
            if (isDetail1Expanded && isDetail2Expanded) {
              return ActualHeight;
            }else if(isDetail1Expanded){
              return Expand1Height;
            }else if (isDetail2Expanded) {
              return Expand2Height;
            } else {
              return FilterHeight; // Default to initial state (FilterHeight)
            }
          })()
        }, 
         isDarkMode ? styles.darkModeContainer : styles.lightModeContainer]}>
      <FilterBottom setIsFilterModalVisible={setIsFilterModalVisible} isDetail1Expanded={isDetail1Expanded}  isDetail2Expanded={isDetail2Expanded} handleDetail1Click={handleDetail1Click} handleDetail2Click={handleDetail2Click} setIsDetail1Expanded={setIsDetail1Expanded} setIsDetail2Expanded={setIsDetail2Expanded} />
      </View>
    </Modal>
    {/* <Modal
      transparent={true}
      animationType="slide"
      visible={islanguageModalVisible}
      onRequestClose={()=>  setIsLanguageModalVisible(false)}
    >
       <View style={[styles.modalContainer, { height: modalHeight }]}>
      <LanguageBottom  setIsLanguageModalVisible={setIsLanguageModalVisible}/>
      </View>
    </Modal> */}
    </View>
      </TouchableWithoutFeedback>
     
     
   </SafeAreaView>
  )
}
 // Function to render section header (first letter)
 const renderHeader = (letter) => (
  <View>
    <Text style={{fontWeight:'bold' , color:'gray' , fontSize:18 , paddingTop:20}}>{letter}</Text>
  </View>
);
const Detail =({item})=>{
  const navigation = useNavigation()
  const countryId = item.name
  // console.log('COUNTRY',countryName)
  function move(){
    navigation.navigate('country' ,{ country: item })
  }
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <View style={{ marginTop:25}}>
            {/* <Text style={{fontWeight:'bold' , color:'gray' , fontSize:18}}>hhh</Text> */}
            <TouchableWithoutFeedback onPress={move}>
            <View style={{flexDirection:'row' }} >
                 <View style={styles.RecentImagecontainer} >
                <Image 
                source={{ uri: item.flag }}  
                style={styles.RecentroundImage}
                />
             </View>
                <View style={{flex:5 , marginTop:5}}>
                <Text style={[styles.county_name, isDarkMode ? styles.darkModeText : styles.lightModeText]}>{item.name}</Text>
                <Text style={{fontWeight:'500' , color:'gray' , fontSize:16}}>{item.capital}</Text>
                </View>
            </View>

            </TouchableWithoutFeedback>
        </View>
    )
}
const SearchDetail =({item})=>{
  const navigation = useNavigation()
  const countryId = item.name
  const title =  item.name.slice(0,1)
  // console.log('COUNTRY',countryName)
  function move(){
    navigation.navigate('country' ,{ country: item })
  }
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <View style={{ marginTop:20}}>
            <Text style={{fontWeight:'bold' , color:'gray' , fontSize:18}}>{title}</Text>
            <TouchableWithoutFeedback onPress={move} >
            <View style={{flexDirection:'row',marginTop:10 }} >
                 <View style={styles.RecentImagecontainer} >
                <Image 
                source={{ uri: item.flag }}  
                style={styles.RecentroundImage}
                />
             </View>
                <View style={{flex:5 , marginTop:5}}>
                <Text style={[styles.county_name, isDarkMode ? styles.darkModeText : styles.lightModeText]}>{item.name}</Text>
                <Text style={{fontWeight:'500' , color:'gray' , fontSize:16}}>{item.capital}</Text>
                </View>
            </View>

            </TouchableWithoutFeedback>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
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
      RecentroundImage2: {
        width: 200,  // You can set any width you want
        height: 40, // Same as width for a perfect circle
        borderRadius: 10,  // Half of the width or height for a round effect
        resizeMode: 'cover', // Or 'contain' depending on your preference
      },
      ifobar:{
        // flex:1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5, // Makes the container round
        elevation: 5, // Optional: Adds shadow for Android
        shadowColor: '#000', // Optional: Adds shadow for iOS
        shadowOpacity: 0.1, // Optional: Adds shadow for iOS
        shadowRadius: 10, // Optional: Adds shadow for iO
      },
      ifobar1:{
        // flex:1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5, // Makes the container round
        elevation: 5, // Optional: Adds shadow for Android
        shadowColor: '#000', // Optional: Adds shadow for iOS
        shadowOpacity: 0.1, // Optional: Adds shadow for iOS
        shadowRadius: 10, // Optional: Adds shadow for iO
        marginRight:15,
      },
      modalContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // top:0,
        // backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'#D3D3D3' 
      },
      exploretext:{
          flex:3,
          fontSize:25,
          color:'black',
          fontWeight:'bold',
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
      enf:{
        fontWeight:'450',
        fontSize :14,
        marginLeft:5
      },
      searchwidth:{
        borderWidth:1,
        borderColor:'gray'
      },
      icon:{

      }
      

})