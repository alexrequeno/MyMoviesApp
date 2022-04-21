import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../../interfaces/movie'
import { CastItem } from './CastItem'
interface Props {
    cast: Cast[]
}
export const Casting = ({cast}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Actores</Text>
            <FlatList 
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>  <CastItem cast={ item } />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
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