import { useContext, useEffect, useState } from "react";
import Category from "../../../models/Category";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { Search } from "../../../services/Service";

function CategoryList() {
    const [category, setCategory] = useState<Category[]>([]);

    const navigate = useNavigate();

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    async function searchCategory() {
        try {
            await Search("/categories", setCategory, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                alert("Error!")
                handleLogout();
            }
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
            <div className="font-bold container z-0 w-[80vw] px-[1vw] mx-auto my-0 grid grid-cols-3 gap-4">
                <div className="col-span-3 flex justify-between items-center mt-8 mb-10">
                    <div className="px-4 py-2 text-2xl text-white bg-white hover:[#0F9D84]"></div>
                        <h1 className="text-center text-6xl text-[#DB5413] font-bold">
                            Categorias
                        </h1>
                    </div>

                    {category.length === 0}
                    {category.map((category) => (
                        <>
                        </>
                    ))}
            </div>
        </>
    );
}

export default CategoryList;