import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MovieLoading } from '../components/MovieLoading'
import { ListResult } from '../components/SearchMovie/ListResult'
import { NoResults } from '../components/SearchMovie/NoResults'
import { RootStackParams } from '../helpers/navigator'
import { useSearchMovies } from '../hooks/useSearchMovies'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'SearchMovie'>{}

export const SearchMovieScreen = ({ route, navigation }: Props) => {
    
    const searching = route.params;
    const {isLoading, foundMovies} = useSearchMovies(searching);
    

    console.log(foundMovies);
    if (isLoading){
        return (
            <MovieLoading />
        )
    }
    else {
        return (
            <>
            <View
                style={styles.searchHeader}
            >
                 <View style={{
                     position: 'absolute',
                     zIndex: 999,
                     elevation:9,
                     top: 40,
                     left: 5
                 }}>
                    <TouchableOpacity
                        onPress={ () => navigation.goBack()}
                    >
                        <Icon 
                            name='arrow-back'
                            size={50}
                            color="white"
                        
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    color:'white',
                    fontSize:22,
                    top: '40%'
                }}>Buscando: {searching}</Text>
            </View>
            <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: '30%'
            }}  
            >
                {
                    (foundMovies.length > 0)
                    ?<ListResult foundMovies={foundMovies} />
                    : <NoResults />
                }
            </View>
            </>
        )
        
    }
}