import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Background } from '../components/Background';
import { LoginForm } from '../components/Forms/LoginForm';

export const LoginScreen = () => {

   
    return (
        <>
        <Background />
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
            behavior={
               (Platform.OS === 'ios' ) ? 'padding': 'height'
            }>
            <LoginForm />
        </KeyboardAvoidingView>
        </>
    )
}