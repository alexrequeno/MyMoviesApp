export interface Login {
    usuario : User
    token   : string
}

export interface User {
    id      : string
    nombre  : string
    correo  : string
    estado  : string
}

export interface LoginSender {
    email   : string
    password: string
}