import { Link } from "react-router-dom";
import Category from "../../../models/Category";

interface categoryBlockProps {
    category: Category
}

function CategoryBlock({ category }: categoryBlockProps) {
    return (
        <Link to={`/nominees/category/${category.id}`}>
            <div className="transition-colors duration-200 h-40 w-40 border-2 border-[#1d2632] bg-[#1d2632]/15 hover:cursor-pointer hover:bg-[#1d2632] flex items-center justify-center">
                <p className="text-white text-l font-[Futura PT] font-bold uppercase text-center m-3">{category.title}</p>
            </div>
        </Link>
    )
}

export default CategoryBlock;