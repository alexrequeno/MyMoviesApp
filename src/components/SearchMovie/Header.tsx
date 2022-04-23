import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const Header = (searching:string) => {
    return (
        <View
            style={styles.searchHeader}
        >
            <Text>{searching}</Text>
        </View>
    )
}