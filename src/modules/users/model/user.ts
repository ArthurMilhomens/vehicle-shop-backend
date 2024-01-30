export interface User {
    id: string;
    email: string;
    password?: string;
}

export interface LoginUser {
    email: string;
    password: string;
}