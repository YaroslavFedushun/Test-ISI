export interface User {
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    confirmPassword?: string,
    user_type: string
}
