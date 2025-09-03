// store/useItemStore.ts
import { create } from "zustand";
import { Item, ItemStatus } from "../types";

interface ItemState {
  items: Item[];
  setItems: (items: Item[]) => void;
  addItem: (item: Item) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterStatus: ItemStatus | "All";
  setFilterStatus: (status: ItemStatus | "All") => void;

  // modal state
  isAddModalOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;

  selectedItem: Item | null;
  openItemModal: (item: Item) => void;
  closeItemModal: () => void;
}

export const useItemStore = create<ItemState>((set) => ({
  items: [],
  setItems: (items) => set({ items }), 
  addItem: (item: Item) => set((state: ItemState) => ({ items: [...state.items, item] })),
  searchQuery: "",
  setSearchQuery: (query: string) => set(() => ({ searchQuery: query })),
  filterStatus: "All",
  setFilterStatus: (status: ItemStatus | "All") => set(() => ({ filterStatus: status })),
    isAddModalOpen: false,
  openAddModal: () => set({ isAddModalOpen: true }),
  closeAddModal: () => set({ isAddModalOpen: false }),
  selectedItem: null,
  openItemModal: (item) => set({ selectedItem: item }),
  closeItemModal: () => set({ selectedItem: null }),
}));
