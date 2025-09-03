// hooks/useFilteredItems.ts
import { useItemStore } from "../store/useItemsStore";

export const useFilteredItems = () => {
  const { items, searchQuery, filterStatus } = useItemStore();

  return items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
};
