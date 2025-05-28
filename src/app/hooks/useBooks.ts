/**
   * Custom hook for managing book lists and book-related operations
   * @returns {Object} An object containing:
   * - selectedBook: Currently selected book's ISBN
   * - readingList: Array of ISBNs for books currently being read
   * - alreadyReadList: Array of ISBNs for completed books
   * - wantToReadList: Array of ISBNs for books to read in future
   * - activeCategory: Current active category
   * - setActiveCategory: Function to update active category
   * - setReadingList: Function to update reading list
   * - setAlreadyReadList: Function to update completed books list
   * - setWantToReadList: Function to update want-to-read list
   * - setSelectedBook: Function to set the currently selected book
   * - filterBooks: Function to search books by title, ISBN or author
   * - getBookDetails: Function to get book details by ISBN
   * - addToList: Function to add selected book to a specified list
   * - deleteFromList: Function to remove selected book from a specified list
   * - moveToList: Function to move selected book to a different list
   * - loadFromLocalStorage: Function to load a list from localStorage
   */

import { useState } from 'react';
import books from '../Components/books/books.json';
import { ListCategory, ListInfo } from '@/types';

interface Book {
  isbn: string;
  title: string;
  author: string;
  description: string;
}

export function useBooks() {
  const [selectedBook, setSelectedBook] = useState('');
  const [activeCategory, setActiveCategory] = useState<ListCategory>('reading');

  const saveToLocalStorage = (list: string[], listName: string) => {
    window.localStorage.setItem(listName, JSON.stringify(list));
  };

  const loadFromLocalStorage = (listName: string) => {
    const list = window.localStorage.getItem(listName);
    return list ? JSON.parse(list) : [];
  };

  const [readingList, setReadingList] = useState<string[]>(loadFromLocalStorage('reading'));
  const [alreadyReadList, setAlreadyReadList] = useState<string[]>(loadFromLocalStorage('alreadyRead'));
  const [wantToReadList, setWantToReadList] = useState<string[]>(loadFromLocalStorage('wantToRead'));

  const getListInfo = (category: ListCategory): ListInfo | null => {
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

  const addToList = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, listName: string) => {
    if (!list.includes(selectedBook)) {
      setList([...list, selectedBook]);
      saveToLocalStorage([...list, selectedBook], listName);
      setSelectedBook('');
    }
  };

  const deleteFromList = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, listName: string) => {
    if (list.includes(selectedBook)) {
      const updatedList = list.filter((isbn) => isbn !== selectedBook);
      setList(updatedList);
      saveToLocalStorage(updatedList, listName);
      setSelectedBook('');
    }
  };

  const moveToList = (targetList: ListCategory) => {
    if (!selectedBook) return;

    const currentListInfo = getListInfo(activeCategory);
    if (!currentListInfo) return;

    const targetListInfo = getListInfo(targetList);
    if (!targetListInfo) return;

    const updatedCurrentList = currentListInfo.list.filter(isbn => isbn !== selectedBook);
    currentListInfo.setList(updatedCurrentList);
    saveToLocalStorage(updatedCurrentList, currentListInfo.name);

    if (!targetListInfo.list.includes(selectedBook)) {
      targetListInfo.setList([...targetListInfo.list, selectedBook]);
      saveToLocalStorage([...targetListInfo.list, selectedBook], targetListInfo.name);
    }

    setSelectedBook('');
  };

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
    getBookDetails,
    addToList,
    deleteFromList,
    moveToList,
    loadFromLocalStorage,
  };
}
