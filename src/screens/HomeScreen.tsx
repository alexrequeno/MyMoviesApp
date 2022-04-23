import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeHeader from '../components/HomeHeader';
import { MovieItemList } from '../components/MovieItemList';
import { MovieLoading } from '../components/MovieLoading';
import { TitleBar } from '../components/TitleBar';
import { AuthContext } from '../context/authContext';
import { useMovies } from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({navigation/* , route */}: Props) => {

    const insets = useSafeAreaInsets();

    const { popularMovies, isLoading } = useMovies();

    const onLogout= async () => {
      await AsyncStorage.removeItem('token');
    }

    if (isLoading){
    return (
            <MovieLoading />
        )
    }else {
        return (
            <View style={{
                marginTop: insets.top+5,
            }}>
                <View style= {{
                    backgroundColor: '#333',
                    
                }}>
                    <HomeHeader />
                    <TouchableOpacity
                        onPress={ () => onLogout}
                        style={{
                            marginBottom:10,
                            position: 'relative',
                            justifyContent: 'flex-end',
                            flexDirection: 'row',
                            marginRight: 20
                        }}
                    >
                        <Icon 
                            name='logout'
                            size={20}
                            color="white"
                        
                        />
                        <Text style={{
                            color:'white',
                           
                        }}>Salir</Text>
                    </TouchableOpacity>
                </View>
                <TitleBar 
                        title='Peliculas Populares'
                />
                {/*  <Text style={styles.title}>
                        {JSON.stringify(route.params, null, 3)}
                </Text> */}
                <FlatList 
                    data={ popularMovies }
                    renderItem={ ({item}:any) => (
                        <MovieItemList 
                            movie={item}
                            navigation={navigation} 
                        />
                    ) }
                    keyExtractor={ (item) => item.id.toString() }
                />
                
            </View>
        );

    }

    
};