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
   * - loadFromLocalStorage: Function to load a list from localStorage
   */

import { useState } from 'react';
import books from '../books.json';

export function useBooks() {
  const [selectedBook, setSelectedBook] = useState('');
  const [activeCategory, setActiveCategory] = useState<'reading' | 'alreadyRead' | 'wantToRead'>('reading');


  const filterBooks = (searchTerm: string) => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const addToList = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, listName: string) => {
    if (!list.includes(selectedBook)) {
      setList([...list, selectedBook]);
      saveToLocalStorage([...list, selectedBook], listName);
      console.log(`Added ${selectedBook} to ${listName} list`);
      setSelectedBook('');
    } else {
      console.log(`${selectedBook} is already in the ${listName} list`);
    }
  };

  const deleteFromList = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, listName: string) => {
    if (list.includes(selectedBook)) {
      const updatedList = list.filter((isbn) => isbn !== selectedBook);
      setList(updatedList);
      saveToLocalStorage(updatedList, listName);
      setSelectedBook('');
      console.log(`Removed ${selectedBook} from ${listName} list`);
    } else {
      console.log(`${selectedBook} is not in the ${listName} list`);
    }
  };

  const saveToLocalStorage = (list: string[], listName: string) => {
    window.localStorage.setItem(listName, JSON.stringify(list));
  }

  const loadFromLocalStorage = (listName: string) => {
    const list = window.localStorage.getItem(listName);
    return list ? JSON.parse(list) : [];
  };

  const [readingList, setReadingList] = useState<string[]>(loadFromLocalStorage('reading'));
  const [alreadyReadList, setAlreadyReadList] = useState<string[]>(loadFromLocalStorage('alreadyRead'));
  const [wantToReadList, setWantToReadList] = useState<string[]>(loadFromLocalStorage('wantToRead'));

  
  return {
    selectedBook,
    readingList,
    alreadyReadList,
    wantToReadList,
    activeCategory,
    setActiveCategory,
    setReadingList,
    setAlreadyReadList,
    setWantToReadList,
    setSelectedBook,
    filterBooks,
    addToList,
    deleteFromList,
    loadFromLocalStorage,
  };
}
