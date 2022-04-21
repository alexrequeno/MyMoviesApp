import React from 'react'
import { Text, View } from 'react-native'

interface Props {
    overview: string
}

export const Overview = ({overview}:Props) => {
    return (        
        <View>
            <Text>{overview}</Text>
        </View>
    )
}