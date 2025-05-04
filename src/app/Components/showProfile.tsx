import React from 'react';
import { useBooks } from '../hooks/useBooks';


export default function ProfileInformation() {
      const { selectedBook, readingList, alreadyReadList, wantToReadList, setSelectedBook, filterBooks, addToList, setReadingList, setAlreadyReadList, setWantToReadList, loadFromLocalStorage } = useBooks();
    
  return (
    <div className="flex items-center max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
        <button type="button" key={book.isbn} className="border p-4 mb-4 rounded shadow hover:bg-gray-100 w-full flex flex-col items-start"
                onClick={() => setSelectedBook(book.isbn)}>
                  {/* <img src={book.cover} alt={book.title} className="w-16 h-24 mb-2" /> */}
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-gray-700">Author: {book.author}</p>
                  <p className="text-gray-700">ISBN: {book.isbn}</p>
              </button>

      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300">Manage books</button> <br />
      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300">Manage Movies</button> <br />
      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mx-2 mb-4 hover:bg-gray-300">Manage TV Shows</button>
    </div>
  );
}