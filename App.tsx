/**
 * MyMoviesApp
 * https://github.com/alexrequeno/mymoviesapp
 *
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/helpers/navigator';
import { AuthProvider } from './src/context/authContext';

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MyStack />
      </AppState>
    </NavigationContainer>
    
  );
};

export default App;
