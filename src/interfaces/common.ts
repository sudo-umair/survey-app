import type { KeyboardType } from 'react-native/types';
export interface IEnumerator {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  cnic: string;
  mobile: string;
  address: string;
  password: string;
  enumeratorId: string;
}

export interface IQuestion {
  questionId: string;
  question: string;
  options?: string[];
  answer: string | Date;
  questionType:
    | 'text'
    | 'number'
    | 'text-area'
    | 'radio'
    | 'radio-text'
    | 'picker'
    | 'date'
    | 'time';
  keyboardType?: KeyboardType;
}

export interface IMonths {
  [key: string]: string;
}
