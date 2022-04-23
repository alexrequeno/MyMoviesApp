/**
 * MyMoviesApp
 * https://github.com/alexrequeno/mymoviesapp
 *
 *
 * @format
 */
 import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/helpers/navigator';
import { AuthProvider } from './src/context/authContext';
import { LogBox } from 'react-native';

const AppState = ({children}: {children: any}) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
const App = () => {

  LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",]);



  return (
    <NavigationContainer>
      <AppState>
        <MyStack />
      </AppState>
    </NavigationContainer>
    
  );
};

export default App;
