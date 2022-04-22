import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { loginStyle } from '../../theme/appTheme'
import { useForm } from '../../hooks/useForms';
//import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../context/authContext';

//interface Props extends StackScreenProps<any, any>{};

export const LoginForm = (/* { navigation }: Props */) => {

    const { signIn, errorMessage, removeError } = useContext(AuthContext)

    const { email,  password, onChange } = useForm({
        email: 'eve.hoyl@reqres.in',
        password: 'cityslicka'
    });

    useEffect(() => {
        if (errorMessage.length === 0) return;
        Alert.alert(
            'Error de autenticacion', 
            errorMessage,
            [{ text: 'Ok', onPress: removeError }]
        );
    }, [errorMessage, removeError]);
    

    const onLogin= () => {
        Keyboard.dismiss();
        //navigation.replace('Home');
        signIn({email, password});
    }

    return (
        <View style={loginStyle.formContainer}>
            <Text style={loginStyle.label}>Usuario</Text>
            <TextInput 
                placeholder='Email'
                placeholderTextColor='#000'
                keyboardType={'email-address'}
                underlineColorAndroid="#333"
                style={loginStyle.input}
                onChangeText={ (value)  => onChange(value, 'email')}
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={ onLogin }
            />

            <Text style={loginStyle.label}>Password</Text>
            <TextInput 
                placeholder='********'
                placeholderTextColor='#000'
                secureTextEntry={true}
                underlineColorAndroid="#333"
                style={loginStyle.input}
                onChangeText={ (value) => onChange(value, 'password')  }
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={ onLogin }
            />
            <View style={loginStyle.btnContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyle.btnLogin}
                    onPress={ onLogin }
                >
                    <Text style={loginStyle.btnLoginTxt}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}