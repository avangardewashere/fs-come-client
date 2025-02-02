"use client";

import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";
import useUseCart from "@/hooks/UseCart";
import { Product } from "@/lib/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data?: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useUseCart();
  const onRemove = () => {
    cart.removeItem(data?.id ?? "")
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data?.images[0].url ?? ""}
          alt=""
          className="object-cover obkect-center"
        />
      </div>
      <div className=" sm:mt-6 relative ml-4 flex felx-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="realtive pr- sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data?.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data?.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data?.size.name}
            </p>
          </div>
          <Currency value={data?.price ?? 0} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
