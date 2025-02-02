import {Size} from "@/lib/types"

const URL = `${process.env.PUBLIC_API_URL}/sizes`


const getSizes = async ():Promise<Size[]>=> {
    const res = await fetch(URL);

    return res.json();
}

export default getSizes