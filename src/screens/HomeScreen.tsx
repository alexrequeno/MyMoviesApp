import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MovieLoading } from '../components/MovieLoading';
import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({navigation/* , route */}: Props) => {

    const insets = useSafeAreaInsets();

    const { popularMovies, isLoading } = useMovies();
    if (isLoading){
        return (
            <MovieLoading />
        )
    }
    else {
        return (
            <View style={{
                marginTop: insets.top + 20
            }}>
                <Text style={styles.title}>Home</Text>
               {/*  <Text style={styles.title}>
                    {JSON.stringify(route.params, null, 3)}
                </Text> */}
            </View>
        );

    }
};