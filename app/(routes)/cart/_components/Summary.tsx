"use client";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useUseCart from "@/hooks/UseCart";

interface SumamryProps {}

const Summary: React.FC<SumamryProps> = () => {
  const cart = useUseCart();

  const items = useUseCart((state) => state.items);
  const removeAll = useUseCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div
      className="
    mt-16 rounded-lg text-gray-50 px-3 py-6 sm:p-6 lg:col-span-5 lg:mt-6 lg:p-8
    "
    >
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pl-4">
          <div className="text-base fon-mediumtet-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6">Checkout</Button>
    </div>
  );
};

export default Summary;
