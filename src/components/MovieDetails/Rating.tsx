import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
    vote_average: number
}

export const Rating = ({vote_average}:Props) => {
    return (
        <View style={styles.marginContainer}>
            <Icon 
                name='star-rate'
                size={20}
                color="orange"

            />
            <Text style={styles.rate}>{vote_average}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    marginContainer: {
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    rate: {
        fontSize: 18,
        marginLeft: 10
    }
})