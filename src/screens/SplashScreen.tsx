import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const SplashScreen = ({navigation}: Props) => {
    return (
        <View style={styles.splash}>
            <LottieView 
                source={require('../assets/animations/splash-screen-animation.json')}
                autoPlay
                loop={false}
                onAnimationFinish={ () => {
                    navigation.navigate('Home'/* , { id: 11} */);
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
