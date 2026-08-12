import Nominee from "../../../models/Nominee";

interface nomineeBlockProps {
    nominee: Nominee;
    hasWinner: boolean;
}

function NomineeBlock({ nominee, hasWinner }: nomineeBlockProps) {
    const shouldBeGrayscale = hasWinner && !nominee.winner;

    return (
        <div className="text-white grid grid-rows-[3fr_1fr] h-[720px]">
            <div className="relative overflow-hidden hover:scale-102 duration-200">
                <img
                    src={nominee.photoUrl}
                    alt={`Foto de ${nominee.name} em ${nominee.info}`}
                    className={`absolute inset-0 w-full h-full object-cover object-bottom ${shouldBeGrayscale ? "grayscale" : ""
                        }`}
                />

                <span className="absolute bottom-0 left-0 right-0 font-extrabold text-black text-center uppercase bg-[#b8943c]/75 tracking-widest font-[Futura PT] px-2 py-4">
                    Faça Login para votar
                </span>
            </div>

            <div className="flex flex-col px-2 py-1">
                <h1 className="uppercase text-2xl font-[Futura PT] font-bold">
                    {nominee.name}
                </h1>

                <p className="text-lg font-serif capitalize font-extralight">
                    {nominee.info}
                </p>
            </div>
        </div>
    );
}

export default NomineeBlock;
