import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({navigation/* , route */}: Props) => {
    return (
        <View>
            <Text>Home</Text>
           {/*  <Text style={styles.title}>
                {JSON.stringify(route.params, null, 3)}
            </Text> */}
        </View>
    );
};