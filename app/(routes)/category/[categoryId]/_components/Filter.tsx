"use client";

import Button from "@/components/ui/Button";
import { Color, Size } from "@/lib/types";
import { cn } from "@/lib/utlis";
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
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    // Parse current search params into an object
    const currentParams = qs.parse(searchParams.toString());

    // Update the value of the key
    if (currentParams[valueKey] === id) {
      delete currentParams[valueKey]; // Remove the parameter if it matches the selected id
    } else {
      currentParams[valueKey] = id; // Add/Update the parameter
    }

    // Construct the query string
    const queryString = qs.stringify(currentParams);

    // Update the URL with the new query string
    router.replace(`${window.location.pathname}?${queryString}`);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div className="flex items-center" key={filter.id}>
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white boder border-gray-300",
                selectedValue === filter.id && " bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
