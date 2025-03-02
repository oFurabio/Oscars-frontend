import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nominee from "../../../models/Nominee";
import { Search } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import NomineeBlock from "../nomineeBlock/NomineeBlock";

function NomineeList() {
    const [nominee, setNominee] = useState<Nominee[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;
    const { id } = useParams<{ id: string }>();

    async function searchNominee(id: number) {
        setIsLoading(true);
        try {
            await Search(`/nominees/category/${id}`, setNominee, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                alert("Error!");
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            searchNominee(Number(id));
        }
    }, [id]);

    return (
        <>
            {isLoading ? (
                <div className="flex text-white">
                    <img
                        src="https://www.oscars.org/themes/custom/ampas_cms/logo2x.png"
                        alt="Carregando"
                        className="w-40 h-40 object-contain animate-pulse"
                    />
                </div>
            ) : (
                <div className="flex flex-col text-xl text-white font-[Futura PT]">
                    <div className="flex flex-row pl-10 my-5 gap-1 uppercase">
                        <h1 className="text-[#b8943c] font-thin text-7xl">Melhor {nominee[0]?.categories.find(c => c.id === Number(id))?.title}</h1>
                    </div>

                    {nominee.length === 0 && <p className="text-center text-white">Nenhum nomeado encontrado!</p>}
                    
                    <div className="pl-10">
                        <h1 className="uppercase">Indicados</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 px-10 pb-10">
                        {nominee.map((nominee) => (
                            <NomineeBlock key={nominee.id} nominee={nominee} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default NomineeList;
