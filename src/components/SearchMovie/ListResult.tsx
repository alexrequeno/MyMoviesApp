import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import {  Movie } from '../../interfaces/movie'
import { ListResultItem } from './ListResultItem'
interface Props {
    foundMovies: Movie[]
}
export const ListResult = ({foundMovies}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado:</Text>
            <FlatList 
                data={foundMovies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>  <ListResultItem foundMovie={ item } />}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 20,
    }
})