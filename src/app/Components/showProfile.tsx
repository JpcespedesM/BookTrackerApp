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

import React, { useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import List from './list';

export default function ProfileInformation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    readingList,
    alreadyReadList,
    wantToReadList,
    selectedBook,
    activeCategory,
    setReadingList,
    setAlreadyReadList,
    setWantToReadList,
    deleteFromList,
    setSelectedBook,
    setActiveCategory,
    moveToList
  } = useBooks();
  
  const handleDelete = () => {
    let list: string[] = [];
    let setList: React.Dispatch<React.SetStateAction<string[]>> = () => {};
    let listName = '';
  
    switch (activeCategory) {
      case 'reading':
        list = readingList;
        setList = setReadingList;
        listName = 'reading';
        break;
      case 'alreadyRead':
        list = alreadyReadList;
        setList = setAlreadyReadList;
        listName = 'alreadyRead';
        break;
      case 'wantToRead':
        list = wantToReadList;
        setList = setWantToReadList;
        listName = 'wantToRead';
        break;
    }
  
    deleteFromList(list, setList, listName);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded shadow-lg p-4">
          <List list={readingList} setSelectedBook={setSelectedBook} setActiveCategory={setActiveCategory} listName="📖 Reading Now" />
        </div>
        <div className="border rounded shadow-lg p-4">
          <List list={alreadyReadList} setSelectedBook={setSelectedBook} setActiveCategory={setActiveCategory} listName="📚 Already Read" />
        </div>
        <div className="border rounded shadow-lg p-4">
          <List list={wantToReadList} setSelectedBook={setSelectedBook} setActiveCategory={setActiveCategory} listName="📖 Want to Read" />
        </div>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleDelete}
          disabled={!selectedBook}
        >
          Delete from list
        </button>

        <div className="relative">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            disabled={!selectedBook}
          >
            Move to list
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
              <div className="py-1">
                {activeCategory !== 'reading' && (
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      moveToList('reading');
                      setIsDropdownOpen(false);
                    }}
                  >
                    📖 Reading Now
                  </button>
                )}
                {activeCategory !== 'alreadyRead' && (
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      moveToList('alreadyRead');
                      setIsDropdownOpen(false);
                    }}
                  >
                    📚 Already Read
                  </button>
                )}
                {activeCategory !== 'wantToRead' && (
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      moveToList('wantToRead');
                      setIsDropdownOpen(false);
                    }}
                  >
                    📖 Want to Read
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}