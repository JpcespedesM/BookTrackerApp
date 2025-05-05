'use client';

import React from 'react';
import { useBooks } from '../hooks/useBooks';
import books from '../books.json';



export default function ProfileInformation() {
      const { selectedBook, readingList, alreadyReadList, wantToReadList, setSelectedBook, filterBooks, addToList, setReadingList, setAlreadyReadList, setWantToReadList, loadFromLocalStorage } = useBooks();
    
      const getBookDetails = (isbn: string) => books.find((book) => book.isbn === isbn);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
        {/* Reading List */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">📖 Reading Now</h3>
        {readingList.length > 0 ? (
          readingList.map((isbn) => {
            const book = getBookDetails(isbn);
            return (
              <button type="button" key={isbn} className="border p-4 mb-4 rounded shadow hover:bg-gray-100 w-full flex flex-col items-start"
                onClick={() => book && setSelectedBook(book.isbn)}>
                  {book ? (
                    <>
                      {/* <img src={book.cover} alt={book.title} className="w-16 h-24 mb-2" /> */}
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
      </section>

      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300">Manage books</button>
      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300">Manage Movies</button>
      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300">Manage TV Shows</button>
    </div>
  );
}