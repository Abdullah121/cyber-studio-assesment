// src/pages/api/items.ts
import type { NextApiRequest, NextApiResponse } from "next";
import {Item, FetchItemsResponse} from '../../types'

// Mock data
const items: Item[] = Array.from({ length: 55 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `Item ${i + 1}`,
  description: `This is the description for item ${i + 1}`,
  status: i % 2 === 0 ? "Active" : "Inactive",
}));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FetchItemsResponse>
) {
  const { page = "1", limit = "10" } = req.query;

  const pageInt = parseInt(page as string, 10);
  const limitInt = parseInt(limit as string, 10);

  const startIndex = (pageInt - 1) * limitInt;
  const endIndex = startIndex + limitInt;

  const paginatedItems = items.slice(startIndex, endIndex);

  res.status(200).json({
    data: paginatedItems,
    page: pageInt,
    limit: limitInt,
    totalPages: Math.ceil(items.length / limitInt),
  });
}
