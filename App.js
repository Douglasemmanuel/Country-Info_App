import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movement from './Movement';
import { ThemeProvider } from './context/ThemeContext';

// import AppLoading
import { useState, useEffect } from 'react';
export default function App() {
  // const [loaded, error] = useFonts({
  //   'Inter-Black': require('fonts/FiraSans.otf'),
  // });
  // const [fontLoaded, setFontLoaded] = useState(false);

  // // Load the fonts asynchronously
  // useEffect(() => {
  //   async function loadFonts() {
  //     await Font.loadAsync({
  //       'FiraSans': require('./fonts/FiraSans-Regular.ttf'),
  //       'FiraSans-Bold': require('./fonts/FiraSans-Bold.ttf'),
  //     });
  //     setFontLoaded(true);
  //   }
  //   loadFonts();
  // }, []);
  // if (!fontLoaded) {
  //   return <AppLoading />;
  // }
  return (
  <>
   <ThemeProvider>
  <Movement/>
  </ThemeProvider>
  </>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
