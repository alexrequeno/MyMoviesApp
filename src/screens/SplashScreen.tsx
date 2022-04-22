import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/authContext';

interface Props extends StackScreenProps<any, any>{};

export const SplashScreen = ({navigation}: Props) => {

    const { status } = useContext( AuthContext );

    if (status !== 'AUTH') {
        return (
            <View style={styles.splash}>
                <LottieView 
                    source={require('../assets/animations/splash-screen-animation.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={ () => {
                        navigation.navigate('Login'/* , { id: 11} */);
                    }}
                />
            </View>
        )
    }
    else {
        return (
            <View style={styles.splash}>
                <LottieView 
                    source={require('../assets/animations/splash-screen-animation.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={ () => {
                        navigation.replace('Home'/* , { id: 11} */);
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    splash: {
      flex: 1,
      alighItems: 'center',
      margin: 0
    }
  });
