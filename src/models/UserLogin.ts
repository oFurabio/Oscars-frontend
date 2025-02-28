export default interface UserLogin {
    id: number;
    username: string;
    email: string;
    password: string;
    token: string;
    role: UserRole;
}

enum UserRole {
    ADMIN,
    CLIENT
}