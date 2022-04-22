import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../../interfaces/movie'
import { RelMovie} from '../../interfaces/relatedMovies'
import { RelMovieItem } from './RelMovieItem'

interface Props {
    related: RelMovie[]
    movie: Movie
    navigation: any
}

export const RelatedMovies = ({related, movie, navigation}: Props) => {
    
    return (
        <View>
            <Text style={styles.title}>Recomendaciones</Text>
            <FlatList 
                data={related}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}: any) => (
                    <RelMovieItem 
                        related={ item } 
                        movie={ movie }
                       navigation={ navigation }
                    />
                )} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})