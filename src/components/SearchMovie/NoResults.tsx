import React from 'react'
import { Image, Text, View } from 'react-native'
import { loginStyle, styles } from '../../theme/appTheme'

export const NoResults = () => {
    return (
        <View>              
            <View style={styles.containerGreyLogo}>
                <Image
                    source={require('../../assets/icons/logogris.png')}
                    style={loginStyle.logoImg} />
                <Text>No hay resultados disponible...</Text>
            </View>
        </View>
    )
}