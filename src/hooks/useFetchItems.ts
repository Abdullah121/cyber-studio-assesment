import { useState, useEffect, useMemo } from "react";
import { fetchItems } from "../services/itemService";
import { Item, FetchItemsResponse } from "../types";
import { useItemStore } from "@/store/useItemsStore";


export const useFetchItems = () => {

  const {setItems} =useItemStore()
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);

  useEffect(() => {
    fetchInitialItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchInitialItems = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, totalPages }: FetchItemsResponse = await fetchItems(page);
      setItems(data);
      setPage((prev) => prev + 1);
      setHasMore(page < totalPages);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreItems = async () => {
    if (!hasMore || isFetchingMore) return;

    setIsFetchingMore(true);
    try {
      const { data, totalPages }: FetchItemsResponse = await fetchItems(page);
      setItems([...useItemStore.getState().items, ...data]);
      setPage((prev) => prev + 1);
      setHasMore(page < totalPages);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setIsFetchingMore(false);
    }
  };

  return useMemo(
    () => ({
      isLoading,
      hasMore,
      error,
      isFetchingMore,
      fetchInitialItems,
      loadMoreItems,
    }),
    [isLoading, hasMore, error, isFetchingMore]
  );
};
