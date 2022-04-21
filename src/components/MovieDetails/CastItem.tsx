import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { apiConf } from '../../config/api'
import { Cast } from '../../interfaces/movie'

interface Props{
    cast: Cast
}

export const CastItem = ({cast}: Props) => {

    const imgUri = `${apiConf.movieImagesUrl}${cast.profile_path}`;  

    return (
        <View style={_styles.mainContainer}>
            <View style={_styles.container}>
                <FastImage 
                    style={{ height: 75, width: 75, borderRadius: 10 }}
                    resizeMode='cover'
                    source={{
                        uri: imgUri
                    }}
                />
            </View>
            <View style={_styles.containerNameCast}>
                <Text style={_styles.nameCast} numberOfLines={2}>{cast.name}</Text>
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