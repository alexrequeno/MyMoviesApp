import React from 'react'
import { Text, View } from 'react-native'
import { loginStyle } from '../theme/appTheme'
import { Logo } from './Logo'

export const Background = () => {
    return (
        <View
            style={loginStyle.loginHeader}
        >
            <Logo />
            <Text style={loginStyle.loginTitle}>MyMovies App</Text>
        </View>
    )
}