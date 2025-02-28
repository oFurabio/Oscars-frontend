import { UserCircle } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='w-full h-[12vh] px-6 py-1 bg-backgroundHeader flex justify-center'>
            <div className="w-full flex justify-between text-lg">
                <div className="self-center">
                    <Link to="/home">
                        <img
                            src="https://www.oscars.org/themes/custom/ampas_cms/logo2x.png"
                            alt="Oscars Logo"
                            className="w-fit my-1 hover:scale-105 duration-100"
                        />
                    </Link>
                </div>

                <div className="flex gap-4 text-primary self-center font-bold">
                    <div className="flex self-center items-center gap-8 text-xl">
                        <Link to="/categories" className="hover:hoverPrimary text-3xl">
                            Categorias
                        </Link>
                    </div>
                </div>

                <Link to="/login" className="">
                Login
                </Link>
            </div>
        </div>
    );
}

export default Navbar;