/**
 * MyMoviesApp
 * https://github.com/alexrequeno/mymoviesapp
 *
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
// import {
//   //useColorScheme,
// } from 'react-native';

//import {Colors} from 'react-native/Libraries/NewAppScreen';
import { SplashScreen } from './src/screens/SplashScreen';
const App = () => {
  /* const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }; */

  return (
    <NavigationContainer>
        <SplashScreen />
    </NavigationContainer>
    
  );
};

export default App;
