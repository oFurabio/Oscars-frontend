import { Link, useNavigate } from "react-router-dom"

function Navbar() {
    return (
        <div className='bg-[#171e27] text-white w-full h-[12vh] px-6 py-1 bg-backgroundHeader flex justify-center'>
            <div className="w-full flex justify-between text-lg">
                <div className="self-center">
                    <Link to="/home">
                        <img
                            src="https://www.oscars.org/themes/custom/ampas_cms/logo2x.png"
                            alt="Oscars Logo"
                            className="w-20 my-1 hover:scale-105 duration-100"
                        />
                    </Link>
                </div>

                <Link to="/login" className="self-center">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Navbar;