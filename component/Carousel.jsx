import { StyleSheet, Text, View ,Image , Dimensions, Animated, Button , TouchableOpacity } from 'react-native'
import React from 'react'
import { useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons/faCircleChevronLeft'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons/faCircleChevronRight'
const MAX_WIDTH = Dimensions.get('screen').width / 1.1


const Carousel = ({ images }) => {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);

  const handleAnimationForward = () => {
    let newCurrentImage = currentImage + 1;
    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }
    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();
    setCurrentImage(newCurrentImage);
  };

  const handleAnimationBackward = () => {
    let newCurrentImage = currentImage - 1;
    if (newCurrentImage < 0) {
      newCurrentImage = images.length - 1;
    }
    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();
    setCurrentImage(newCurrentImage);
  };

  return (
    <React.Fragment>
      <View style={{}}>
        <Animated.View style={[styles.container, { transform: [{ translateX: animation.current }] }]}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </Animated.View>
        <View style={styles.indicatorcontainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.indicator, index === currentImage ? styles.activeIndicator : undefined]}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity  onPress={handleAnimationBackward}>
        <FontAwesomeIcon icon={faCircleChevronLeft}  size={25} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleAnimationForward}>
        <FontAwesomeIcon icon={faCircleChevronRight}  size={25} color='white'/>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};
export default Carousel

const styles = StyleSheet.create({
    image:{
        resizeMode:'cover',
        height:200,
        width:MAX_WIDTH,
        borderRadius:10,
    },
    container:{
      flexDirection:'row',
      gap:20,
    
    },
    indicatorcontainer:{
      position:'absolute',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      width:MAX_WIDTH,
      bottom:10,
      zIndex:2,
    },
    buttoncontainer:{
      position:'absolute',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:MAX_WIDTH,
      bottom:90,
      zIndex:2,
      paddingLeft:10,
      paddingRight:10,
    },
    indicator :{
      width:15,
      height:15,
      borderRadius:7.5,
      borderWidth:1,
      borderColor:'white',
      marginHorizontal:10,
      marginBottom:10,
    },
    activeIndicator :{
      backgroundColor:'white',
    }
})