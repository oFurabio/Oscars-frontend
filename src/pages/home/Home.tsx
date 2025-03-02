import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="grid grid-cols-2 gap-1 h-[85vh] w-full">
                <div className="">
                    <div className="flex flex-col justify-center h-full w-full pl-40">
                        <h1 className="mb-5 text-4xl xl:text-8xl font-[Futura PT] font-bold text-[#b8943c]">INDICADOS</h1>
                        <h2 className="mb-5 text-2xl xl:text-4xl font-[Futura PT] font-bold text-gray-300">VEJA E VOTE NOS INDICADOS DE 2025</h2>
                        <div className="mb-5 flex flex-col lg:flex-row gap-10">
                            <Link to="/nominees/category/1">
                                <div className="group relative inline-block">
                                    <div className="relative px-6 py-2 text-center uppercase font-bold text-black tracking-widest cursor-pointer border-2 border-transparent duration-200 bg-[#b8943c] hover:bg-[#D5AC46]">
                                        <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#ffffd4] transition-all duration-500 group-hover:w-full group-hover:h-full"></span>
                                        <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#ffffd4] transition-all duration-500 group-hover:w-full group-hover:h-full"></span>
                                        Votar
                                    </div>
                                </div>
                            </Link>
                            <Link to="/categories">
                            <div className="group relative inline-block">
                                    <div className="relative px-6 py-2 text-center uppercase font-bold text-white tracking-widest cursor-pointer border-2 border-transparent duration-200 bg-[#1d2632]/10 hover:bg-[#1d2632]">
                                        <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#ffffd4] transition-all duration-500 group-hover:w-full group-hover:h-full"></span>
                                        <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#ffffd4] transition-all duration-500 group-hover:w-full group-hover:h-full"></span>
                                        Ver Categorias
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className=""></h1>
                </div>
            </div>
        </>
    )
}

export default Home