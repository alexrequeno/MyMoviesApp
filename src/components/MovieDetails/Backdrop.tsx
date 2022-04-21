import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet,  View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  Icon from 'react-native-vector-icons/MaterialIcons'

const screenH = Dimensions.get('screen').height
interface Props {
    imgUri:string
}
export const Backdrop = ({imgUri}:Props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.imageContainer}>
            <View style={styles.imageBorder}>
                <View style={styles.backButton}>
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
                <FastImage 
                    style={styles.posterImage}
                    resizeMode='cover'
                    source={{
                        uri: imgUri
                    }}
                />
            </View>
        </View>
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
    imageBorder: {
        flex: 1,
        overflow:'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation:9,
        top: 40,
        left: 5
    }
})