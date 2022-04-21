import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import { Backdrop } from '../components/MovieDetails/Backdrop'
import { RootStackParams } from '../helpers/navigator'

interface Props extends StackScreenProps<RootStackParams, 'DetailsMovie'>{}

export const DetailsMovieScreen = ({ route }: Props) => {
    
    return (
        <View>
           <Backdrop route={route} />        
        </View>
    )
}