/**
 * MyMoviesApp
 * https://github.com/alexrequeno/mymoviesapp
 *
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  //useColorScheme,
} from 'react-native';

//import {Colors} from 'react-native/Libraries/NewAppScreen';
import { SplashScreen } from './src/screens/SplashScreen';
const App = () => {
  /* const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }; */

  return (
    <SafeAreaView>
      <SplashScreen />
    </SafeAreaView>
  );
};

export default App;
