/**
 * ProfileInformation Component
 * 
 * Displays a user's reading lists and book details, allowing interaction with books
 * across different reading status categories.
 * 
 * @component
 * @returns {JSX.Element} A profile view showing reading lists and book details
 * 
 * States (from useBooks hook):
 * - readingList: Array of ISBNs for books currently being read
 * - alreadyReadList: Array of ISBNs for completed books
 * - wantToReadList: Array of ISBNs for future reading
 * - setSelectedBook: Function to set currently selected book
 * 
 * Helper Functions:
 * - getBookDetails: Retrieves full book details from ISBN
 * 
 * Sections:
 * - Reading Now: Shows books currently being read
 * - Already Read: Shows completed books (not shown in truncated view)
 * - Want to Read: Shows books planned for future (not shown in truncated view)
 * 
 * Features:
 * - Clickable book entries to select books
 * - Book details including title, author and ISBN
 * - Empty state handling for lists with no books
 */


'use client';

import React from 'react';
import { useBooks } from '../hooks/useBooks';
import ReadingList from './readingList';

export default function ProfileInformation() {
  const {
    readingList,
    alreadyReadList,
    wantToReadList,
    selectedBook,
    setReadingList,
    addToList,
    deleteFromList,
    setSelectedBook
  } = useBooks();    
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
      <ReadingList readingList={readingList} setSelectedBook={setSelectedBook} />

      {/* Ahora los botones pueden trabajar directamente con readingList y setReadingList */}
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300"
        onClick={() => deleteFromList(readingList, setReadingList, 'reading')}
      >
        Delete from list
      </button>

      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300">
        Manage Movies
      </button>

      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300">
        Manage TV Shows
      </button>
    </div>
  );
}