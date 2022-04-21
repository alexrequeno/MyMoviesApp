import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../helpers/navigator'

interface Props extends StackScreenProps<RootStackParams, 'DetailsMovie'>{}

export const DetailsMovieScreen = ({ navigation, route }: Props) => {
    const movie = route.params;
    
    return (
        <View>
            <Text>Details Moview</Text>
        </View>
    )
}