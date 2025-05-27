import { useState } from 'react';
import { Book, ListCategory, ListInfo } from '@/types';

export function useReadingLists() {
  const [activeCategory, setActiveCategory] = useState<ListCategory>('reading');
  const [selectedBook, setSelectedBook] = useState('');

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
    addToList,
    deleteFromList,
    moveToList,
    loadFromLocalStorage,
  };
} 