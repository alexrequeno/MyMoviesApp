import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface Props {
    title: string
}

export const TitleBar = ({title}: Props) => {
    const {top} = useSafeAreaInsets();
    return (
        <View style={{ marginTop: top + 20, marginBottom: 20}}>
            <Text style={[
                styles.title,
                lstyles.title
            ]}>
                {title}
            </Text>
        </View>
    )
}

const lstyles = StyleSheet.create({
    title: {
        marginLeft:12
    }
})

