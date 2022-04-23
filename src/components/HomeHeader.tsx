import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableWithoutFeedback, Text, TextInput, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useForm } from "../hooks/useForms";
import { styles } from "../theme/appTheme";

const HomeHeader = () => {
    const navigation = useNavigation();
    
    const { searching, onChange } = useForm({
        searching: '',
    });

    const onSearch = () => {
        Keyboard.dismiss();
    }
    return (
        <View>
            <View style={{ 
            margin: 10, 
            flexDirection: "row", 
            alignItems: 'center',
            justifyContent: 'center',
            }}>
                <TextInput 
                    placeholder='Buscar Pelicula...'
                    placeholderTextColor='#fff'
                    style={styles.inputSearch}
                    underlineColorAndroid="#fff"
                    onChangeText={ (value)  => onChange(value, 'searching')}
                    value={searching}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={ onSearch }
                />
                <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate('SearchMovie' as never, 
                         searching as never)}
                >
                    <Icon name={'search'} size={30} style={{ color: 'white' }} />
                </TouchableWithoutFeedback>
            </View>
            <View style={{
                alignItems:'center'
            }}>
                <Text style={[styles.homeTitle, {paddingBottom: 10}]}> MyMovies App</Text>
            </View>
        </View>
    );
}

export default HomeHeader;
