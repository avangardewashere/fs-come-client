import {Category} from "@/lib/types"

const URL = `${process.env.PUBLIC_API_URL}`


const getCategories = async ():Promise<Category[]>=> {
    const res = await fetch(URL);

    return res.json();
}

export default getCategories