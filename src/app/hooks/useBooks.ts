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

  const moveToList = (targetList: 'reading' | 'alreadyRead' | 'wantToRead') => {
    if (!selectedBook) return;

    // Get current list info
    const currentListInfo = getListInfo(activeCategory);
    if (!currentListInfo) return;

    // Get target list info
    const targetListInfo = getListInfo(targetList);
    if (!targetListInfo) return;

    // Remove from current list and add to target list
    const updatedCurrentList = currentListInfo.list.filter(isbn => isbn !== selectedBook);
    currentListInfo.setList(updatedCurrentList);
    saveToLocalStorage(updatedCurrentList, currentListInfo.name);

    if (!targetListInfo.list.includes(selectedBook)) {
      targetListInfo.setList([...targetListInfo.list, selectedBook]);
      saveToLocalStorage([...targetListInfo.list, selectedBook], targetListInfo.name);
    }

    setSelectedBook('');
  };

  const getListInfo = (category: 'reading' | 'alreadyRead' | 'wantToRead') => {
    switch (category) {
      case 'reading':
        return {
          list: readingList,
          setList: setReadingList,
          name: 'reading'
        };
      case 'alreadyRead':
        return {
          list: alreadyReadList,
          setList: setAlreadyReadList,
          name: 'alreadyRead'
        };
      case 'wantToRead':
        return {
          list: wantToReadList,
          setList: setWantToReadList,
          name: 'wantToRead'
        };
      default:
        return null;
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
    moveToList,
    loadFromLocalStorage,
  };
}
