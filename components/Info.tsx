import { Product } from "@/lib/types";
import Currency from "./ui/Currency";

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
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Size:</h3>
        <div>{data?.size?.name}</div>
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Color:</h3>
        <div
          className="h-6 w-6 rounded-full border border-gray-600"
          style={{ backgroundColor: data?.color?.value }}
        />
      </div>
    </div>
  );
};

export default Info;