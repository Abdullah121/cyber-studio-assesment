import React, { memo } from "react";
import { Item } from "../../types";
import { useItemStore } from "@/store/useItemsStore";

interface ListItemProps {
  item: Item;
  style: React.CSSProperties; // ✅ accept style
}

const ListItem: React.FC<ListItemProps> = ({ item, style }) => {

  const {openItemModal} = useItemStore()
  return (
    <div style={style}>
      <div
        style={{
          padding: "10px",
          borderBottom: "1px solid #ccc",
          height: "100%",         // ✅ inner box handles padding/border
          boxSizing: "border-box" // ensures height stays consistent
        }}
        onClick={() => openItemModal(item)}
      >
        <h3 style={{ margin: 0 }}>{item.title}</h3>
        <p style={{ margin: "8px 0 0 0" }}>{item.status}</p>
        <p style={{ margin: "8px 0 0 0" }}>{item.description}</p>
      </div>
    </div>
  );
};

export default memo(ListItem);
