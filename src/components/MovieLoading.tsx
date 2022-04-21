import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';


export const MovieLoading = () => {
    return (
        <View style={styles.splash}>
            <LottieView 
                source={require('../assets/animations/movie-loading.json')}
                autoPlay
                loop
            />
        </View>
    )
}

const styles = StyleSheet.create({
    splash: {
      flex: 1,
      alighItems: 'center',
      margin: 0
    }
  });
