import { AxiosError } from "axios";
import React,{ createContext, useReducer } from "react";
import authApi from "../api/authApi";
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

    const [state, dispatch] = useReducer(authReducer, authInitState)

    const signIn = async ({email, password}: LoginSender) => {
        try {
            const res = await authApi.post<Login>('/', {email, password});
            //console.log(res.data);
            dispatch({
                type: 'signIn',
                payload: { token: res.data.token,  user: res.data.usuario}
            });
            
        } catch (error) {
            const err = error as AxiosError
            dispatch({
                type:'addError',
                payload: err.response?.data[0] || 'Informacion incorrecta'
            })
            
        }
    };
    const logOut = () => {}
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