import React from 'react'
import { Image, View } from 'react-native'
import { loginStyle } from '../theme/appTheme'

export const Logo = () => {
    return (
        <View style={loginStyle.logo}>
           <Image 
            source={ require('../assets/icons/logo.png') }
            style={loginStyle.logoImg}
           />
        </View>
        
    )
}