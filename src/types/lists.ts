import { Dispatch, SetStateAction } from 'react';

export type ListCategory = 'reading' | 'alreadyRead' | 'wantToRead';

export interface ListInfo {
  list: string[];
  setList: Dispatch<SetStateAction<string[]>>;
  name: ListCategory;
} 