import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useContext, createContext, useState } from 'react';

const CarouselOne = () => {
    return (
          <ImageBackground 
              style={styles.section}    
              source={{
                uri: require('../assets/carouselone.png')
            }}
          >
      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    section: {
        width: '100%',
        height: '100%',
        fontFamily: 'Urbanist',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '48px',
        lineHeight: '150%',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        flex: 'none',
        order: 0,
        flexGrow: 0,
    }
});

export default CarouselOne