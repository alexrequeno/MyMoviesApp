import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { apiConf } from '../../config/api'
import { Movie } from '../../interfaces/movie'

interface Props{
    foundMovie: Movie
}

export const ListResultItem = ({foundMovie}: Props) => {

    const imgUri = `${apiConf.movieImagesUrl}${foundMovie.poster_path}`;  
    const navigation = useNavigation();
    return (
        <View style={_styles.mainContainer}>
            <View style={_styles.container}>
                <TouchableOpacity
                activeOpacity={0.7}
                onPress={ () => navigation.navigate('DetailsMovie' as never, foundMovie as never) }
                >
                    <FastImage 
                        style={{ height: 75, width: 75, borderRadius: 10 }}
                        resizeMode='cover'
                        source={{
                            uri: imgUri
                        }}
                    />

                </TouchableOpacity>
                <View style={{
                    marginLeft: 30,
                    justifyContent: 'center',
                }}>
                    <Text style={_styles.nameCast} numberOfLines={2}>{foundMovie.title}</Text>
                </View>
            </View>
        </View>
    )
}

const _styles = StyleSheet.create({
    mainContainer: {
        marginBottom:10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        top: 20
    },
    container: {
        marginRight: 15,
        marginTop: 15,
        marginHorizontal: 20,
        flexDirection:'row',
        paddingBottom:15,
        
    },
    containerNameCast: {
        fontWeight:'bold',
        fontSize: 12,
        color: 'black',

    },
    nameCast: {
        fontWeight:'bold',
        fontSize: 16,
        color: 'black'
    }
})