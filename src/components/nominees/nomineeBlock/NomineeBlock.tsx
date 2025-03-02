import { useEffect, useState } from "react";
import Nominee from "../../../models/Nominee";

interface nomineeBlockProps {
    nominee: Nominee
}

function NomineeBlock({ nominee }: nomineeBlockProps) {
    const [isWinner, setIsWinner] = useState<boolean>(true);

    useEffect(() => {
        setIsWinner(nominee.winner);
    })

    return (
        <div className="text-white">
            <div className="relative mb-2 cursor-pointer group hover:scale-105 duration-300">
                <>
                    {isWinner ? (
                        <img
                            src={nominee.photoUrl}
                            alt={`Foto de ${nominee.name} em ${nominee.info}`}
                            className="w-full h-[400px] object-cover group-hover:brightness-75 transition-all duration-300"
                        />
                    ) : (
                        <img
                            src={nominee.photoUrl}
                            alt={`Foto de ${nominee.name} em ${nominee.info}`}
                            className="w-full h-[400px] object-cover group-hover:brightness-75 transition-all duration-300"
                        />
                    )}
                </>
                <div className="absolute bottom-0 w-full bg-[#b8943c] text-center py-3">
                    <span className="uppercase text-lg tracking-widest font-[FUTURA PT] font-bold text-black">
                        Faça Login para votar
                    </span>
                </div>
            </div>
            <h1 className="text-2xl mb-2 font-[Futura PT] uppercase font-bold">{nominee.name}</h1>
            <p className="text-lg mt-2 font-[Times] capitalize font-extralight">{nominee.info}</p>
        </div>
    )
}

export default NomineeBlock;