import { memo, RefObject } from "react";
import { FixedSizeList as List, ListOnItemsRenderedProps } from "react-window";
import ListItem from "../molecules/ListItem";
import { Item } from "../../types";

interface ItemListProps {
  listItems: Item[];
  handleItemsRendered: (props: ListOnItemsRenderedProps) => void;
  listRef: RefObject<List>;
}

const ItemList: React.FC<ItemListProps> = ({
  listItems,
  handleItemsRendered,
  listRef,
}) => {
  return (
    <List
      ref={listRef}
      height={600}
      itemCount={listItems.length}
      itemSize={120}
      width="100%"
      onItemsRendered={handleItemsRendered}
      itemKey={(index:number) => listItems[index]?.id ?? index} // ✅ stable key here
    >
      {({ index, style }:{index:number, style:any}) => (
        <ListItem
          item={listItems[index]}
          style={style}   // ✅ pass style from react-window
        />
      )}
    </List>
  );
};

export default memo(ItemList);
