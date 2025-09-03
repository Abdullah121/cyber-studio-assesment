// components/SearchBar.tsx
import { useItemStore } from "../../store/useItemsStore";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useItemStore();
  return (
    <input
      type="text"
      placeholder="Search by title..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border rounded px-3 py-2 w-full"
    />
  );
}
