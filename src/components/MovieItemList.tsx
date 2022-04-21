import React from 'react';
import { StyleSheet,  Text,  TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Movie } from '../interfaces/movie';
import MoviePoster from './MoviePoster';

interface Props {
    movie: Movie,
    navigation: any
}

export const MovieItemList = ({ movie, navigation }: Props) => {
    
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('DetailsMovie', movie);
                }}
            >
                <View style={styles.subContainer}>
                    <MoviePoster 
                        movie={movie}
                        height={150}
                        width={100}
                        navigation={navigation}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.movieTitle} numberOfLines={2}>
                            {movie.title}
                        </Text>
                        <View style={{padding: 5}}>
                            <Text style={styles.movieRDate} numberOfLines={2}>
                                Estreno: {movie.release_date}
                            </Text>
                            <View style={{ flexDirection: 'row'}}>
                                <Icon 
                                    name='star-rate'
                                    size={16}
                                    color="orange"

                                />
                                <Text style={styles.movieRate} numberOfLines={2}>
                                    {movie.vote_average}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.movieOverview} numberOfLines={3}>
                            {movie.overview}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
       marginHorizontal: 16,
       marginVertical: 8
   },
   subContainer: {
       flexDirection: 'row'
   },
   textContainer: {
        margin: 16,
        justifyContent: 'center',
        marginBottom: 24,
        flex: 1
   },
   movieTitle: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black'        
   },
   movieRDate: {
        fontSize: 12,
        marginBottom: 5,
        color: 'black'
   },
   movieOverview: {
       fontSize:12,
       color: 'black'
   },
   movieRate: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold'

   }
});
    
