import { toast } from 'sonner';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Car } from '../generated/prisma';

interface UseLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item: Car) => item.id === data.id,
        );

        if (existingItem)
          return toast('El coche ya existe en la lista de favoritos.');
        set({
          lovedItems: [...get().lovedItems, data],
        });
        toast('Coche agregado a la lista de favoritos.');
      },
      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter(item => item.id !== id)],
        });
        toast('El choce se elimino de la lista de favoritos.');
      },
    }),
    {
      name: 'loved-products-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
