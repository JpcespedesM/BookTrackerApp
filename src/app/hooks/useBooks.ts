import { useState } from 'react';
import books from '../books.json';

export function useBooks() {
  const [selectedBook, setSelectedBook] = useState('');
  const [readingList, setReadingList] = useState<string[]>([]);
  const [alreadyReadList, setAlreadyReadList] = useState<string[]>([]);
  const [wantToReadList, setWantToReadList] = useState<string[]>([]);

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
      console.log(`Added ${selectedBook} to ${listName} list`);
    } else {
      console.log(`${selectedBook} is already in the ${listName} list`);
    }
  };
  

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
    addToList
  };
}
