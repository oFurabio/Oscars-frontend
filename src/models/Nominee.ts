import Category from "./Category";

export default interface Nominee {
    id: number;
    name: string;
    info: string;
    photoUrl: string;
    categories: Category[];
    winner: boolean
}