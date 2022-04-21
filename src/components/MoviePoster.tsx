import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import FastImage from 'react-native-fast-image'
import { apiConf } from '../config/api'
import { Movie } from '../interfaces/movie'

interface Props {
    movie: Movie
    height: number
    width: number
    navigation: any
};

const MoviePoster = ({movie, height, width, navigation}:Props) => {

    const imgUri = apiConf.movieImagesUrl + movie.poster_path;
    
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('DetailsMovie', { id: movie.id });
            }}
        >
            <View style={styles.imageContainer}>
                <FastImage 
                    style={{ height, width }}
                    resizeMode='cover'
                    source={{
                        uri: imgUri
                    }}
                    />
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
      margin: 4,
      backgroundColor: 'gray',
      borderRadius: 10,
      overflow: "hidden",
    },
  });

export default MoviePoster;