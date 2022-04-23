import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
import { MovieItemList } from '../components/MovieItemList';
import { MovieLoading } from '../components/MovieLoading';
import { TitleBar } from '../components/TitleBar';
import { useMovies } from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({navigation/* , route */}: Props) => {

    const insets = useSafeAreaInsets();

    const { popularMovies, isLoading } = useMovies();
    const token = AsyncStorage.getItem('token');
    console.log('token');
    
    if (isLoading){
    return (
            <MovieLoading />
        )
    }else {
        return (
            <View style={{
                marginTop: insets.top + 20
            }}>
                <HomeHeader />
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