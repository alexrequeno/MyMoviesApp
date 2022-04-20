import { createStackNavigator } from '@react-navigation/stack';
import { DetailesMovieScreen } from '../screens/DetailsMovieScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SearchMovieScreen } from '../screens/SearchMoviesScreen';
import { SplashScreen } from '../screens/SplashScreen';

const Stack = createStackNavigator();

export const MyStack= () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: 'tomato'
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
            {/* Home screen as Main screen */}
            <Stack.Screen
                name='Home'
                component={ HomeScreen }
                options={{
                    title: "Home"
                }}
             />
            {/* Movie Details screen */}
            <Stack.Screen
            name='Details'
            component={ DetailesMovieScreen }
            options={{
                title: "Movie Details"
            }}
            />

            <Stack.Screen
                name='Search'
                component={ SearchMovieScreen }
                options={{
                    title: "Buscar Pelicula..."
                }}
             />
        </Stack.Navigator>
    );
}