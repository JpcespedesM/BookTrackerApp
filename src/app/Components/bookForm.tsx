/**
 * BookForm Component
 * 
 * A form component that allows users to search for books by title, ISBN, or author.
 * The component includes a search input field and displays search results through
 * the SearchedBook child component.
 * 
 * @component
 * @returns {JSX.Element} A form with search functionality for books
 * 
 * State:
 * - searchTitle: String containing the current search term
 * 
 * Child Components:
 * - SearchedBook: Displays search results based on searchTitle prop
 */


'use client';

import React, { useState } from "react";
import SearchedBook from "./searchedBook";
export default function BookForm() {
    const [searchTitle, setSearchTitle] = useState('');

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title, ISBN, Author
          </label>
          <input
            type="text"
            id="title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter book title"
          />
        </div>
        <SearchedBook title = {searchTitle}/>
      </form>
    </div>
  );
}