import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Search } from "../../../services/Service";

import Category from "../../../models/Category";
import CategoryBlock from "../categoryBlock/CategoryBlock";

function CategoryList() {
    const [category, setCategory] = useState<Category[]>([]);
    const [isLoading, setIsLoading ] = useState<boolean>(true);

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    async function searchCategory() {
        setIsLoading(true);
        try {
            await Search("/categories", setCategory, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                alert("Error!")
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (token === "") {
            // alert("Sessão expirada...")
            // navigate("/login");
        }
    }, [token]);

    useEffect(() => {
        searchCategory();
    }, [category.length]);

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
                <div>
                    <div className="flex pl-10 my-5">
                        <h1 className="text-[#b8943c] font-normal text-6xl uppercase font-[Futura PT]">Categorias</h1>
                    </div>

                    <div className="grid grid-cols-8 gap-10 px-10 pb-10">
                        {category.length === 0}
                        {category.map((category) => (
                            <>
                                <CategoryBlock key={category.id} category={category} />
                            </>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default CategoryList;
