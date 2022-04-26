import { AxiosError } from "axios";
import React,{ createContext, useEffect, /* useEffect, */ useReducer } from "react";
import authApi from "../api/authApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login, LoginSender, User } from "../interfaces/user";
import { authReducer, authState } from "./authReducer";

type AuthCtxProps = {
    errorMessage: string
    token: string | null
    user: User | null
    status: 'INPROCC' | 'AUTH' | 'NOTAUTH'
    signIn: (loginSender: LoginSender) => void
    logOut: () => void
    removeError: () => void
};

const authInitState: authState = {
    status: 'INPROCC',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthCtxProps);

export const AuthProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitState);
 
    useEffect(() => {
       verifyToken();
    }, []);

    const verifyToken = async () => {
        const token = await AsyncStorage.getItem('token');
        
        if ( !token ) return dispatch({ type: 'authFail' });
    } 
    //const token = AsyncStorage.getItem('token');
   // console.log(token);
    

    const signIn = async ({email, password}: LoginSender) => {
        try {
            const res = await authApi.post<Login>('/login', {email, password});
            //console.log(res.data);
            dispatch({
                type: 'signIn',
                payload: { token: res.data.token,  user: res.data.usuario}
            });
            await AsyncStorage.setItem('token', res.data.token );
            
        } catch (error) {
            //console.log(error);
            const err = error as AxiosError
            dispatch({
                type:'addError',
                payload: err.response?.data[0] || 'Informacion incorrecta'
            })
        }
    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };
    
    const removeError = () => {
        dispatch({type: 'removeError'})
    };

    
    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError
        }}>
            {children}
        </AuthContext.Provider>
    )
}