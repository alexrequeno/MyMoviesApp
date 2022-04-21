import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const RelatedMovies = () => {
    return (
        <View>
            <Text style={styles.title}>Recomendaciones</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})