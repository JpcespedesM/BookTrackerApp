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

  const handleAddToReadingList = () => {
    if (!readingList.includes(selectedBook)) {
      setReadingList([...readingList, selectedBook]);
      console.log(`Added ${selectedBook} to reading list`);
    }
    else {
      console.log(`${selectedBook} is already in the reading list`);
    }
  };

  const handleAddToAlreadyReadList = () => {
    if (!alreadyReadList.includes(selectedBook)) {
      setAlreadyReadList([...alreadyReadList, selectedBook]);
      console.log(`Added ${selectedBook} to already read list`);
    }
    else {
      console.log(`${selectedBook} is already in the already read list`);
    }
  };

  const handleAddToWantToReadList = () => {
    if (!wantToReadList.includes(selectedBook)) {
      setWantToReadList([...wantToReadList, selectedBook]);
      console.log(`Added ${selectedBook} to want to read list`);
    }
    else {
      console.log(`${selectedBook} is already in the want to read list`);
    }
  };

  return {
    selectedBook,
    setSelectedBook,
    filterBooks,
    handleAddToReadingList,
    handleAddToAlreadyReadList,
    handleAddToWantToReadList,
  };
}
