import { Link, useNavigate } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="grid grid-cols-2 gap-10 border-2 border-white h-[60vh] w-[80vw]">
                <div className="border-2 border-red-500">
                    <div className="text-white flex flex-col justify-center h-full w-full pl-5 border-2 border-red-500">
                        <h1 className="mb-5 text-5xl">VOTE</h1>
                        <h2 className="mb-5">VOTE IN 2025 NOMINEES</h2>
                        <div className="mb-5 flex flex-row gap-10">
                            <h3 className="bg-amber-500">VOTE</h3>
                            <Link to="/categories"
                                className="transition-colors duration-200 border-2 border-amber-500 bg-[#1d2632]/15 hover:cursor-pointer hover:border-amber-500/50 hover:bg-[#1d2632]">
                                VIEW ALL CATEGORIES
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