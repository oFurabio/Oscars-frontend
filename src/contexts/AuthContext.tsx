import { createContext, ReactNode, useState } from "react";
import { Login } from "../services/Service"
import UserLogin from "../models/UserLogin";

interface AuthContextProps {
    user: UserLogin
    handleLogout(): void
    handleLogin(user: UserLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserLogin>({
        id: 0,
        username: "",
        email: "",
        password: "",
        token: "",
        role: 1
    });

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin:UserLogin) {
        setIsLoading(true)
        try {
            await Login(`/users/login`, userLogin, setUser)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUser({
            id: 0,
            username: "",
            email: "",
            password: "",
            token: "",
            role: 1
        });
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}