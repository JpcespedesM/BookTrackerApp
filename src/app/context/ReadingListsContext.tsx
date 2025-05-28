'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ListCategory, ListInfo } from '@/types';

interface ReadingListsContextProps {
  selectedBook: string;
  readingList: string[];
  alreadyReadList: string[];
  wantToReadList: string[];
  activeCategory: ListCategory;
  setActiveCategory: (category: ListCategory) => void;
  setReadingList: React.Dispatch<React.SetStateAction<string[]>>;
  setAlreadyReadList: React.Dispatch<React.SetStateAction<string[]>>;
  setWantToReadList: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedBook: (isbn: string) => void;
  addToList: (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, listName: string) => void;
  deleteFromList: (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, listName: string) => void;
  moveToList: (targetList: ListCategory) => void;
}

const ReadingListsContext = createContext<ReadingListsContextProps | undefined>(undefined);

export const ReadingListsProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<ListCategory>('reading');
  const [selectedBook, setSelectedBook] = useState('');

  const saveToLocalStorage = (list: string[], listName: string) => {
    window.localStorage.setItem(listName, JSON.stringify(list));
  };

  const loadFromLocalStorage = (listName: string) => {
    const list = window.localStorage.getItem(listName);
    return list ? JSON.parse(list) : [];
  };

  const [readingList, setReadingList] = useState<string[]>([]);
  const [alreadyReadList, setAlreadyReadList] = useState<string[]>([]);
  const [wantToReadList, setWantToReadList] = useState<string[]>([]);

  useEffect(() => {
    setReadingList(loadFromLocalStorage('reading'));
    setAlreadyReadList(loadFromLocalStorage('alreadyRead'));
    setWantToReadList(loadFromLocalStorage('wantToRead'));
  }, []);

  const getListInfo = (category: ListCategory): ListInfo | null => {
    switch (category) {
      case 'reading':
        return { list: readingList, setList: setReadingList, name: 'reading' };
      case 'alreadyRead':
        return { list: alreadyReadList, setList: setAlreadyReadList, name: 'alreadyRead' };
      case 'wantToRead':
        return { list: wantToReadList, setList: setWantToReadList, name: 'wantToRead' };
      default:
        return null;
    }
  };

  const addToList = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    listName: string
  ) => {
    if (!list.includes(selectedBook)) {
      const updatedList = [...list, selectedBook];
      setList(updatedList);
      saveToLocalStorage(updatedList, listName);
      setSelectedBook('');
    }
  };

  const deleteFromList = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    listName: string
  ) => {
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
    const targetListInfo = getListInfo(targetList);
    if (!currentListInfo || !targetListInfo) return;

    const updatedCurrentList = currentListInfo.list.filter((isbn) => isbn !== selectedBook);
    currentListInfo.setList(updatedCurrentList);
    saveToLocalStorage(updatedCurrentList, currentListInfo.name);

    if (!targetListInfo.list.includes(selectedBook)) {
      const updatedTargetList = [...targetListInfo.list, selectedBook];
      targetListInfo.setList(updatedTargetList);
      saveToLocalStorage(updatedTargetList, targetListInfo.name);
    }

    setSelectedBook('');
  };

  return (
    <ReadingListsContext.Provider
      value={{
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
      }}
    >
      {children}
    </ReadingListsContext.Provider>
  );
};

export const useReadingLists = () => {
  const context = useContext(ReadingListsContext);
  if (!context) {
    throw new Error('useReadingLists must be used within a ReadingListsProvider');
  }
  return context;
};
