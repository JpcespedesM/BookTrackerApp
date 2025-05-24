'use client';

import React from 'react';
import books from '../books.json';

interface Props {
  list: string[];
  setSelectedBook: (isbn: string) => void;
  setActiveCategory: (category: 'reading' | 'alreadyRead' | 'wantToRead') => void;
  listName: string;
}

export default function List({ list, setSelectedBook, setActiveCategory, listName }: Props) {
  const getBookDetails = (isbn: string) => books.find((book) => book.isbn === isbn);

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">{listName}</h3>
      {list.length > 0 ? (
        list.map((isbn) => {
          const book = getBookDetails(isbn);
          return (
            <button
              type="button"
              key={isbn}
              className="border p-4 mb-4 rounded shadow hover:bg-gray-100 w-full flex flex-col items-start"
              onClick={() => {
                if (book) {
                  setSelectedBook(book.isbn);
                  setActiveCategory(listName === "📖 Reading Now" ? 'reading' : 
                                  listName === "📚 Already Read" ? 'alreadyRead' : 
                                  'wantToRead');
                }
              }}
            >
              {book ? (
                <>
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-gray-700">Author: {book.author}</p>
                  <p className="text-gray-700">ISBN: {book.isbn}</p>
                </>
              ) : (
                <p className="text-gray-500">Book details not available.</p>
              )}
            </button>
          );
        })
      ) : (
        <p className="text-gray-500">No books in this list.</p>
      )}
    </div>
  );
}
