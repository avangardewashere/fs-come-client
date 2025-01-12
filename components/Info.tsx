import { Product } from "@/lib/types";
import Currency from "./ui/Currency";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-500">{data.name}</h1>
      <div className="mt-3 flex items0end justify-between">
        <p className="text-2xl text-gray-500">
          <Currency value={data?.price} />
        </p>
      </div>
    </div>
  );
};

export default Info;
