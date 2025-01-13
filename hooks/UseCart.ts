import { create } from "zustand";
import { Product } from "@/lib/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";
interface UseCartStore {
  items: Product[];

  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useUseCart = create(
  persist<UseCartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);

        if (existingItem) return toast("Item already in cart.");

        set({ items: [...get().items, data] });
        toast.success("Item added in the cart.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useUseCart;
