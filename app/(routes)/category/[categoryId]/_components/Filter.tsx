"use client";

import { Color, Size } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "querystring";
interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValeu = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null as any;
    }

    const url = qs.stringify(
      {
        url: window.location.href,
        query,
      } as any,
      { skipNull: true } as any
    );

    router.push(url);
  };
  return <div></div>;
};

export default Filter;
