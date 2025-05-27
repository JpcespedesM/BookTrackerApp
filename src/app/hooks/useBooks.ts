/**
   * Custom hook for managing book lists and book-related operations
   * @returns {Object} An object containing:
   * - selectedBook: Currently selected book's ISBN
   * - readingList: Array of ISBNs for books currently being read
   * - alreadyReadList: Array of ISBNs for completed books
   * - wantToReadList: Array of ISBNs for books to read in future
   * - setReadingList: Function to update reading list
   * - setAlreadyReadList: Function to update completed books list
   * - setWantToReadList: Function to update want-to-read list
   * - setSelectedBook: Function to set the currently selected book
   * - filterBooks: Function to search books by title, ISBN or author
   * - addToList: Function to add selected book to a specified list
   * - deleteFromList: Function to remove selected book from a specified list
   * - moveToList: Function to move selected book to a different list
   * - loadFromLocalStorage: Function to load a list from localStorage
   */

import { useState } from 'react';
import books from '../Components/books/books.json';

interface Book {
  isbn: string;
  title: string;
  author: string;
  description: string;
}

export function useBooks() {
  const [selectedBook, setSelectedBook] = useState('');

  const filterBooks = (searchTerm: string): Book[] => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getBookDetails = (isbn: string): Book | undefined => {
    return books.find((book) => book.isbn === isbn);
  };

  return {
    selectedBook,
    setSelectedBook,
    filterBooks,
    getBookDetails,
  };
}
