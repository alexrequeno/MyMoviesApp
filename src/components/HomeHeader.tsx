import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableWithoutFeedback, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "../theme/appTheme";

const HomeHeader = () => {
    const navigation = useNavigation()
    
    return (
        <View style={{ margin: 16, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.homeTitle}> MyMovies App</Text>
            <TextInput />
            <TouchableWithoutFeedback 
                onPress={() => navigation.navigate('SearchMovie' as never)}
            >
                <Icon name={'search'} size={20} />
            </TouchableWithoutFeedback>
        </View>
    );
}

export default HomeHeader;
