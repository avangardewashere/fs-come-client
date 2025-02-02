"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
  value: number | string;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

const Currency: React.FC<CurrencyProps> = ({ value }) => {

  //avoid hydration error
  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
