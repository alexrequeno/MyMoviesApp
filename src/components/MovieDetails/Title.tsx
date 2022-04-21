import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    title:string
}

export const Title = ({title}:Props) => {
    return (
        <View style={styles.marginContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    marginContainer: {
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
})