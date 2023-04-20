import React, { useContext, createContext, useState, useEffect,useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SelectList } from 'react-native-dropdown-select-list'
import SplashScreen from './components/SplashScreen'
import Welcome from './components/Welcome'
import CarouselOne from './components/carouselone'
import CarouselTwo from './components/carouseltwo'
import CarouselThree from './components/carouselthree'
import AccountSetup from './components/accountsetup/Setup'


const MyContext = createContext();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const contextValue = useContext(MyContext);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showCarouselTwo, setShowCarouselTwo] = useState(false);
  const [showCarouselThree, setShowCarouselThree] = useState(false);
  const [accountSetup, setShowAccountSetup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3500); // 3500ms = 3.5s
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
      setShowCarousel(true);
    }, 5000); // 5000ms = 5s
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowCarousel(false);
      setShowCarouselTwo(true);
    }, 15000); // 15000ms = 5s
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowCarouselTwo(false);
      setShowCarouselThree(true)
    }, 20000); // 20000ms = 5s
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowCarouselThree(false);
      setShowAccountSetup(true)
    }, 25000); // 25000ms = 5s
  }, []);

  return (
    <MyContext.Provider value={contextValue}>
      {showSplash && <SplashScreen />}
      {showWelcome && (
        <Welcome />
      )}
      {showCarousel && (
        <CarouselOne />
      )}
      {showCarouselTwo && (
        <CarouselTwo />
      )}
      {showCarouselThree && (
        <CarouselThree />
      )}
      {setShowAccountSetup && (
        <AccountSetup />
      )}
      
    </MyContext.Provider>
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