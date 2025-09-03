# Cyber Studio Assessment -- Paginated Dashboard App

## 🚀 Steps to Run the Project

1.  **Clone the repository**

2.  **Install dependencies**

    ``` bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**

    ``` bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open <http://localhost:3000> in your browser.

------------------------------------------------------------------------

## 📋 Features Implemented

This project fulfills the requirements of the Cyber Studio assessment:

-   **Item List Page**
    -   Displays a **scrolling list** of items (virtualized for
        performance).
    -   Shows `ID`, `Title`, `Description`, and `Status`.
-   **Pagination**
    -   Implemented **API-side pagination** via `/api/items`.
    -   Frontend fetches more items on scroll (infinite scrolling).
-   **Search & Filter**
    -   Search items by **title** (case-insensitive).
    -   Filter items by **status** (`Active`, `Inactive`, `All`).
-   **Item Details**
    -   Clicking an item opens a **modal dialog** with its full details.
-   **Add Item Form**
    -   Modal-based form to add new items.
    -   Items are stored in **Zustand state management** for global
        access.
-   **Mock API**
    -   Next.js API route (`/api/items`) serves JSON from in-memory mock
        data.
    -   Supports pagination using `?page` and `?limit` query params.
-   **State Management**
    -   Implemented with **Zustand** to handle:
        -   Items list
        -   Selected item
        -   Search/filter state
        -   Modal open/close state
-   **UX Enhancements**
    -   Loading indicators while fetching.
    -   Graceful empty state (`No more items to load`).
    -   TailwindCSS styling for responsiveness.

------------------------------------------------------------------------

## 🔧 Possible Improvements (with more time)

-   **Pagination Controls**
    -   Add `Previous / Next` buttons or numbered pagination in addition
        to infinite scroll.
-   **React Query**
    -   Replace manual fetching with **React Query** for caching,
        background refetching, retries, etc.
-   **UI/UX Polish**
    -   Use a **side drawer** for item details instead of a modal
        (dashboard-style).
    -   Add smooth animations for modals and list rendering.
    -   Better empty/error states with icons or illustrations.
-   **Type Safety**
    -   Define stricter DTOs (API response models).
    -   Ensure all store/actions are fully typed.
-   **Testing**
    -   Add unit tests with Jest + React Testing Library:
        -   Rendering items
        -   Filtering/search
        -   Modal open/close
        -   Adding new items
-   **Accessibility**
    -   Ensure modals are fully keyboard accessible and screen reader
        friendly.

------------------------------------------------------------------------

## 🏗️ Tech Stack

-   **Next.js** (React + TypeScript)
-   **TailwindCSS** (UI styling)
-   **Zustand** (state management)
-   **Next.js API Routes** (mock backend)

------------------------------------------------------------------------

## ✅ Assumptions

-   Items are **in-memory mock data**, no database.
-   Pagination is handled **on the API side**.
-   Infinite scroll is used instead of pagination controls.
-   No authentication or user system is required for this assessment.
