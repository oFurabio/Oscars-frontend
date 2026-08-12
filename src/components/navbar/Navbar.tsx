import { UserCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom"

function Navbar() {
    let data = new Date().getFullYear()

    return (
        <div className="bg-[#171e27] text-white w-full py-4 bg-backgroundHeader flex justify-center">
            <div className="w-full flex justify-between mx-5 xl:mx-14 text-lg">
                <div className="self-center">
                    <Link to="/home">
                        <img
                            src="https://www.oscars.org/themes/custom/ampas_cms/logo2x.png"
                            alt="Oscars Logo"
                            className="w-10 my-1 hover:scale-105 duration-100"
                        />
                    </Link>
                </div>
                <h1 className="self-center uppercase font-bold text-3xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-[#b8943c]">
                    OSCAR {data}
                </h1>
                <Link to="/login" className="flex hover:text-gray-400 gap-2 duration-200 items-center">
                    <h1 className="hidden xl:contents xl:text-xl 2xl:text-2xl font-semibold uppercase">Entrar</h1>
                    <UserCircle className="text-5xl 2xl:text-4xl items-center" />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;