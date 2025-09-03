// components/StatusFilter.tsx
import { useItemStore } from "../../store/useItemsStore";
import { ItemStatus } from "../../types";

export default function StatusFilter() {
  const { filterStatus, setFilterStatus } = useItemStore();

  return (
    <select
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value as ItemStatus | "All")}
      className="border rounded px-3 py-2"
    >
      <option value="All">All</option>
      <option value={ItemStatus.Active}>Active</option>
      <option value={ItemStatus.Inactive}>Inactive</option>
    </select>
  );
}
