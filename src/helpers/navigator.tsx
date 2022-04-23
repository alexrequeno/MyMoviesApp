import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailsMovieScreen } from '../screens/DetailsMovieScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SearchMovieScreen } from '../screens/SearchMoviesScreen';
import { SplashScreen } from '../screens/SplashScreen';

import { Movie } from '../interfaces/movie';
import { AuthContext } from '../context/authContext';
import { MovieLoading } from '../components/MovieLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type RootStackParams = {
    Home: undefined
    DetailsMovie: Movie
    Splash: undefined
    Login: undefined
    SearchMovie: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const MyStack = () => {

    const { status } = useContext( AuthContext );
    const token =  AsyncStorage.getItem('token');
    //

    return (
        
        <Stack.Navigator
            //initialRouteName='Splash'
            screenOptions={{
              headerShown: false,
              cardStyle: {
                  backgroundColor: 'white'
              }
            }}
        >
            {
                (token === null)
                ? (
                    <>
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
                    </>
                )
                : (
                    <>
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
                    </>
                )
            }
        </Stack.Navigator>
    );
}