/**
 * SearchedBook Component
 * 
 * Displays search results for books and provides navigation to book details.
 * The component filters books based on the search title and allows users to
 * navigate to individual book pages.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Search term to filter books
 * @returns {JSX.Element} A list of filtered books with links to their details
 * 
 * Features:
 * - Real-time book search
 * - Links to individual book pages
 * - Displays book title, author and ISBN
 * 
 * States:
 * - Uses useBooks for book search functionality
 * - Uses ReadingListsContext for list management
 * 
 * Rendering:
 * - Shows "Start typing" when search term is empty
 * - Shows "No books found" when no matches are found
 * - Displays matching books with title, author and ISBN
 * - Each book is a clickable link to its details page
 */

'use client';

import { useBooks } from '../../hooks/useBooks';
import { useReadingLists } from '@/app/context/ReadingListsContext';
import React from "react";
import Link from 'next/link';

interface Book {
  isbn: string;
  title: string;
  author: string;
}

export default function SearchedBook(props: { title: string; }) {
  
  const { filterBooks } = useBooks();
  const { selectedBook, setSelectedBook, readingList, alreadyReadList, wantToReadList, addToList, setReadingList, setAlreadyReadList, setWantToReadList } = useReadingLists();

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
            <Link href={`/book/${book.isbn}`} key={book.isbn} className="border p-4 mb-4 rounded shadow hover:bg-gray-100 w-full flex flex-col items-start"
                onClick={() => setSelectedBook(book.isbn)}>
                  {/* <img src={book.cover} alt={book.title} className="w-16 h-24 mb-2" /> */}
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-gray-700">Author: {book.author}</p>
                  <p className="text-gray-700">ISBN: {book.isbn}</p>
              </Link>
          );
        })}
        {/* <button type="button" disabled={!selectedBook} className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => addToList(readingList, setReadingList, 'reading')}>
            Reading
        </button>
        <button type="button" disabled={!selectedBook} className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => addToList(alreadyReadList, setAlreadyReadList, 'alreadyRead')}>
            Already Read
        </button>
        <button type="button" disabled={!selectedBook} className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => addToList(wantToReadList, setWantToReadList, 'wantToRead')}>
            Want to Read
        </button> */}
    </>
    );
}