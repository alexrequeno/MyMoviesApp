import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export const SplashScreen = () => {
    return (
        <View style={styles.splash}>
            <LottieView 
                source={require('../assets/animations/splash-screen-animation.json')}
                autoPlay
                loop
                onAnimationFinish={() => {
                    console.log('animation finished')
                }}
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
  