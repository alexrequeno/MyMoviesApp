import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { DetailsMovieScreen } from '../screens/DetailsMovieScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SearchMovieScreen } from '../screens/SearchMoviesScreen';
import { SplashScreen } from '../screens/SplashScreen';

const Stack = createStackNavigator();

export const MyStack = () => {
    return (
        
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
              headerShown: false,
              cardStyle: {
                  backgroundColor: 'white'
              }
            }}
        >
            {/* Splash screen */}
            <Stack.Screen
                name='Splash'
                component={ SplashScreen }
             />
            {/* Login screen, only appear with user signin and logut */}
            <Stack.Screen
                name='Login'
                component={ LoginScreen }
            />
            {/* Home screen */}
            <Stack.Screen
                name='Home'
                component={ HomeScreen }
                options={{
                    title: "Home"
                }}
             />
            {/* Movie Details screen */}
            <Stack.Screen
            name='DetailsMovie'
            component={ DetailsMovieScreen }
            options={{
                title: "Movie Details"
            }}
            />
            {/* Search movie */}
            <Stack.Screen
                name='SearchMovie'
                component={ SearchMovieScreen }
                options={{
                    title: "Buscar Pelicula..."
                }}
             />
        </Stack.Navigator>
    );
}