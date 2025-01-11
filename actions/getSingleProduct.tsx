import { Product  } from "@/lib/types";

const URL = `${process.env.PUBLIC_API_URL}/products`;

const getSingleProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getSingleProduct
