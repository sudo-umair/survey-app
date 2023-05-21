import type { KeyboardType } from 'react-native/types';
export interface IEnumerator {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  cnic: string;
  mobile: string;
  address: string;
  password: string;
  enumeratorId: string;
  age: string;
  creationDate?: string;
  modificationDate?: string;
}

export interface IQuestion {
  questionId: string;
  question: string;
  options: string[];
  answer: string;
  questionType:
    | 'text'
    | 'number'
    | 'text-area'
    | 'radio'
    | 'radio-text'
    | 'date'
    | 'time';
  keyboardType?: KeyboardType;
}

export interface IMonths {
  [key: string]: string;
}
