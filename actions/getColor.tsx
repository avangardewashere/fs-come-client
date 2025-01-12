import {Color} from "@/lib/types"

const URL = `${process.env.PUBLIC_API_URL}/colors`


const getColors = async ():Promise<Color[]>=> {
    const res = await fetch(URL);

    return res.json();
}

export default getColors