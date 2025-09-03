import React, { useEffect, useRef, useCallback, useState } from "react";
import { useFetchItems } from "../hooks/useFetchItems";
import ItemList from "../components/organisms/ItemList";
import Loader from "../components/atoms/Loader";
import Message from "../components/atoms/Message";
import SearchBar from "@/components/atoms/SearchBar";
import StatusFilter from "@/components/atoms/StatusFilter";
import { useFilteredItems } from "@/hooks/useFilteredItems";
import { useItemStore } from "@/store/useItemsStore";
import ItemDetailModal from "@/components/molecules/ItemDetailModal";
import AddItemModal from "@/components/molecules/AddItemModal";

// If ItemList has known props, define them here for better type safety
interface ItemListRef {
  scrollToItem: (index: number) => void;
}

const Home: React.FC = () => {
  const {items,setItems, openAddModal, isAddModalOpen, closeAddModal, closeItemModal, selectedItem} = useItemStore()
  const { isLoading, error, hasMore, isFetchingMore, loadMoreItems } =
    useFetchItems();

      const filteredItems = useFilteredItems();

  const listRef = useRef <ItemListRef>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToItem(0);
    }

    setItems(items)
  }, []);

  const handleItemsRendered = useCallback(
    ({ visibleStopIndex }: { visibleStopIndex: number }) => {
      if (visibleStopIndex >= items.length - 1 && hasMore && !isFetchingMore) {
        loadMoreItems();
      }
    },
    [items.length, hasMore, isFetchingMore, loadMoreItems]
  );

  return (
    <div>
      <h1>Cyber Studio: Paginated List {items.length}</h1>

      <div className="flex gap-4">
        <SearchBar />
        <StatusFilter />
        <button
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={openAddModal}
      >
        + Add Item
      </button>
      </div>

      {items.length > 0 && (
        <ItemList
          listItems={filteredItems}
          handleItemsRendered={handleItemsRendered}
          listRef={listRef}
        />
      )}
      {isLoading && <Loader text="Loading initial posts..." />}
      {isFetchingMore && <Loader text="Loading more posts..." />}
      {!hasMore && <Message text="No more posts to load." />}

      <AddItemModal />
      <ItemDetailModal/>
    </div>
  );
};

export default Home;
