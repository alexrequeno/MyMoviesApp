//import { useNavigation } from '@react-navigation/native'
//import { StackNavigationProp } from '@react-navigation/stack'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { apiConf } from '../../config/api'
//import { RootStackParams } from '../../helpers/navigator'
import { Movie } from '../../interfaces/movie'
import { RelMovie } from '../../interfaces/relatedMovies'

interface Props{
    related: RelMovie
    movie: Movie
    navigation: any
}

//type DetailsProp = StackNavigationProp<RootStackParams, 'DetailsMovie'>;

export const RelMovieItem = ({ related, movie, navigation}: Props) => {

    const imgUri = `${apiConf.movieImagesUrl}${related.poster_path}`; 
    const route = useRoute().name;
    //const navigation = useNavigation<DetailsProp>();
    return (
        <View style={_styles.mainContainer}>
            <TouchableOpacity
                onPress={ () => {
                    console.log(movie.title);
                    
                    navigation.push( route, related as Movie)
                }}
            >
                <View style={_styles.container}>
                    <FastImage 
                        style={{ height: 75, width: 75, borderRadius: 10 }}
                        resizeMode='cover'
                        source={{
                            uri: imgUri
                        }}
                    />
                </View>
            </TouchableOpacity>
            <View style={_styles.containerNameCast}>
                <Text style={_styles.nameCast} numberOfLines={2}>{related.title}</Text>
            </View>

        </View>
    )
}

const _styles = StyleSheet.create({
    mainContainer: {
        marginBottom:10
    },
    container: {
        marginRight: 10,
        marginTop: 15,
        marginHorizontal: 20,
    },
    containerNameCast: {
        fontWeight:'bold',
        fontSize: 12,
        color: 'black',
        flexDirection: 'column'
    },
    nameCast: {
        fontWeight:'bold',
        fontSize: 12,
        color: 'black'
    }
})