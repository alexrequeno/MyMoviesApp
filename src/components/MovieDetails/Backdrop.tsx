import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, StyleSheet,  Text,  View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native-gesture-handler'
import { apiConf } from '../../config/api'
import { RootStackParams } from '../../helpers/navigator'
import Icon from 'react-native-vector-icons/MaterialIcons'

const screenH = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailsMovie'>{}

export const Backdrop = ({ route }: Props) => {
    const movie = route.params
    const imgUri = `${apiConf.movieImagesUrl}${movie.poster_path}`;    
    
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <FastImage 
                        style={styles.posterImage}
                        resizeMode='cover'
                        source={{
                            uri: imgUri
                        }}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            <View style={styles.marginContainer}>
                <Icon 
                    name='star-rate'
                    size={20}
                    color="orange"

                />
                <Text style={styles.rate}>{movie.vote_average}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenH * 0.6,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,

       
    },
    posterImage: {
        flex: 1
    },
    marginContainer: {
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    imageBorder: {
        flex: 1,
        overflow:'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    rate: {
        fontSize: 18,
        marginLeft: 10
    }
})