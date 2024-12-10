'use client';

import { useState } from "react";

const PaginationWithSearch = () => {
  const items = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Get filtered items based on search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Slice filtered items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="pagination-container">
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1); // Reset to page 1 when a new search is performed
        }}
        placeholder="Search items..."
        className="border rounded px-3 py-2 mb-4 w-full"
      />

      {/* Items Display */}
      <div className="items-list grid grid-cols-1 gap-2">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="item p-4 border rounded bg-gray-100 text-center"
          >
            {item.name}
          </div>
        ))}
        {currentItems.length === 0 && <p>No items found on this page.</p>}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationWithSearch;
