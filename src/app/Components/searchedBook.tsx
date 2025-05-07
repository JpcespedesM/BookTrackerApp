'use client';

import { useBooks } from '../hooks/useBooks';
import React from "react";

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
        {filteredBooks.map((book) => {
            
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
        <button type="button" disabled={!selectedBook} className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => addToList(alreadyReadList, setAlreadyReadList, 'already read')}>
            Already Read
        </button>
        <button type="button" disabled={!selectedBook} className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => addToList(wantToReadList, setWantToReadList, 'want to read')}>
            Want to Read
        </button>
    </>
    );
      
}