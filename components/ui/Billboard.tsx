import { Billboard as BTypes } from "@/lib/types";

interface BillboardProps {
  data: BTypes;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 xm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
        style={{ background: `url${data?.imageUrl}` }}
      >
        <div className="h-full w-full flex flex-col jutify-center items-center">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
