import { useState } from 'react';
import books from '../books.json';

export function useBooks() {
  const [selectedBook, setSelectedBook] = useState('');

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
    } else {
      console.log(`${selectedBook} is already in the ${listName} list`);
    }
  };

  const deleteFromList = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, listName: string) => {
    if (list.includes(selectedBook)) {
      list.splice(list.indexOf(selectedBook), 1);
      setList([...list, selectedBook]);
      saveToLocalStorage([...list, selectedBook], listName);
      console.log(`Added ${selectedBook} to ${listName} list`);
    } else {
      console.log(`${selectedBook} is already in the ${listName} list`);
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
  const [alreadyReadList, setAlreadyReadList] = useState<string[]>(loadFromLocalStorage('already read'));
  const [wantToReadList, setWantToReadList] = useState<string[]>(loadFromLocalStorage('want to read'));

  
  return {
    selectedBook,
    readingList,
    alreadyReadList,
    wantToReadList,
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
