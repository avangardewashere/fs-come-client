"use client";
import { Product } from "@/lib/types";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-500">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-500">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border block"
            style={{ background: data?.color?.value,content:" ",display:"block"}}
          >{" "} </div>

        </div>
        <div className="mt-10  w-[200px] flex items-center gap-x-3">
          <Button className="flex items-center gap-2 ">
            Add To Cart <ShoppingCart  />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
