/**
 * SearchedBook Component
 * 
 * Displays search results for books and provides buttons to add books to different reading lists.
 * The component filters books based on the search title and allows users to select a book
 * and add it to their "Reading", "Already Read", or "Want to Read" lists.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Search term to filter books
 * @returns {JSX.Element} A list of filtered books with action buttons
 * 
 * States (from useBooks hook):
 * - selectedBook: Currently selected book's ISBN
 * - readingList: Array of books currently being read
 * - alreadyReadList: Array of completed books
 * - wantToReadList: Array of books to read in future
 * 
 * Actions:
 * - setSelectedBook: Sets the currently selected book
 * - addToList: Adds selected book to specified list
 * 
 * Rendering:
 * - Shows "Start typing" when search term is empty
 * - Shows "No books found" when no matches are found
 * - Displays matching books with title, author and ISBN
 * - Shows three buttons to add selected book to different lists
 */


'use client';

import { useBooks } from '../../hooks/useBooks';
import React from "react";

interface Book {
  isbn: string;
  title: string;
  author: string;
}

export default function SearchedBook(props: { title: string; }) {
  
  const { selectedBook, readingList, alreadyReadList, wantToReadList, setSelectedBook, filterBooks, addToList, setReadingList, setAlreadyReadList, setWantToReadList } = useBooks();

  if(props.title === ''){
    return <p>Start typing</p>;
  }
  
  const filteredBooks = filterBooks(props.title);
  
  if (filteredBooks.length === 0) {
    return <p>No books found</p>;
  }
  
    return (
    <>
        {filteredBooks.map((book: Book) => {
            
          return (
              <button type="button" key={book.isbn} className="border p-4 mb-4 rounded shadow hover:bg-gray-100 w-full flex flex-col items-start"
                onClick={() => setSelectedBook(book.isbn)}>
                  {/* <img src={book.cover} alt={book.title} className="w-16 h-24 mb-2" /> */}
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-gray-700">Author: {book.author}</p>
                  <p className="text-gray-700">ISBN: {book.isbn}</p>
              </button>
          );
            
        })}
        <button type="button" disabled={!selectedBook} className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => addToList(readingList, setReadingList, 'reading')}>
            Reading
        </button>
        <button type="button" disabled={!selectedBook} className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => addToList(alreadyReadList, setAlreadyReadList, 'alreadyRead')}>
            Already Read
        </button>
        <button type="button" disabled={!selectedBook} className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => addToList(wantToReadList, setWantToReadList, 'wantToRead')}>
            Want to Read
        </button>
    </>
    );
      
}