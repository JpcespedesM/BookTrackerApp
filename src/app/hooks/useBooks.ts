/**
 * Custom hook for managing book-related operations
 * @returns {Object} An object containing:
 * - filterBooks: Function to search books by title, ISBN or author
 * - getBookDetails: Function to get book details by ISBN
 */

import books from '../Components/books/books.json';

interface Book {
  isbn: string;
  title: string;
  author: string;
  description: string;
}

export function useBooks() {
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
    filterBooks,
    getBookDetails,
  };
}
