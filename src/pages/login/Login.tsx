import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UserLogin from "../../models/UserLogin";

export function Login() {
    const navigate = useNavigate();
    const { user, handleLogin, isLoading } = useContext(AuthContext);

    const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin);

    useEffect(() => {
        if (user.token !== "") {
            navigate("/home");
        }
    }, [user]);

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(userLogin);
    }

    return (
        <div className="flex flex-grow bg-backgroundLight max-w-sm align-middle rounded-3xl px-10 py-8">
            <form
            className="max-w-[400px] w-full mx-auto" onSubmit={login}
            >
                <div className="flex justify-center p-6">
                    <img 
                    src="https://www.oscars.org/themes/custom/ampas_cms/logo2x.png"
                    alt="Ícone"
                    className="max-h-20"
                    />
                </div>

                <div className="flex flex-col pb-6">
                    <label 
                    htmlFor="email"
                    className="text-xl text-primary font-bold pb-2 pl-5"
                    >
                        E-mail
                    </label>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    className="p-1 border border-gray-300 rounded-2xl px-3 focus:outline-none"
                    placeholder="Email@example.com"
                    value={userLogin.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>

                <div className="flex flex-col pb-6">
                    <label
                    htmlFor="password"
                    className="text-xl text-primary font-bold pb-2 pl-5"
                    >Senha
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    className="p-1 border border-gray-300 rounded-2xl px-3 focus:outline-none"
                    placeholder="Digite a senha"
                    value={userLogin.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>

                <div className="flex justify-center">
                    <button
                    type="submit"
                    className="text-3xl text-white pb-1 font-bold rounded-3xl pt-[5px] px-4 bg-[#13DBB7] hover:bg-[#0F9D84]"
                    >
                        {isLoading ? (
                            <p>Carregando</p>
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;