import { create } from "zustand";

const initialItems = [
  {
    id: 1,
    name: "good mood",
    packed: true,
  },
  {
    id: 2,
    name: "passport",
    packed: false,
  },
  {
    id: 3,
    name: "phone charger",
    packed: false,
  },
];

const useItemsStore = create((set) => ({
  items: initialItems,

  removeAllItems: () => set(() => ({ items: [] })),

  resetToInitial: () => set(() => ({ items: initialItems })),

  addItem: (newItemText) =>
    set((state) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        packed: false,
      };
      return { items: [...state.items, newItem] };
    }),

  markAllAsComplete: () =>
    set((state) => ({
      items: state.items.map((item) => ({ ...item, packed: true })),
    })),

  markAllAsIncomplete: () =>
    set((state) => ({
      items: state.items.map((item) => ({ ...item, packed: false })),
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  toggleItem: (id) =>
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      }),
    })),
}));

export default useItemsStore;
