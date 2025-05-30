import { UserCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="bg-[#171e27] text-white w-full h-[9vh] px-6 py-1 bg-backgroundHeader flex justify-center">
            <div className="w-full flex justify-between mx-10 text-lg">
                <div className="self-center">
                    <Link to="/home">
                        <img
                            src="https://www.oscars.org/themes/custom/ampas_cms/logo2x.png"
                            alt="Oscars Logo"
                            className="w-10 my-1 hover:scale-105 duration-100"
                        />
                    </Link>
                </div>
                <h1 className="self-center uppercase font-extrabold text-base md:text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl text-[#b8943c]">
                    Oscar 2025
                </h1>
                    <Link to="/login" className="flex flex-row items-center uppercase text-4xl lg:text-5xl hover:animate-pulseq">
                        <UserCircle />
                        <h1 className="hidden xl:contents xl:text-2xl 2xl:text-4xl">Entrar</h1>
                    </Link>
            </div>
        </div>
    );
}

export default Navbar;