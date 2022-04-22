import { User } from "../interfaces/user"

export interface authState {
    status: 'INPROCC' | 'AUTH' | 'NOTAUTH'
    errorMessage: string
    token: string | null
    user: User | null
}

type AuthAction = 
    | {type: 'signIn', payload: { token: string, user: User }}
    | {type: 'addError', payload: string}
    | {type: 'removeError'}
    | {type: 'authFail'}
    | {type: 'logout'}

export const authReducer = (state: authState, action: AuthAction): authState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'NOTAUTH',
                token: null,
                errorMessage: action.payload
            }
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }
        case 'signIn':
            return {
                ...state,
                user: action.payload.user,
                status: 'AUTH',
                token: action.payload.token,
                errorMessage: ''
            }
        case 'logout':
        case 'authFail':
            return {
                ...state,
                user: null,
                status: 'NOTAUTH',
                token: null,
            }
                
    
        default:
            return state;
    }
}
