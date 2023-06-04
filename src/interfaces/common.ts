import { SURVEY_COMPONENTS } from '@common/data';
import type { KeyboardType } from 'react-native/types';
import { IUserState } from './redux';
export interface IEnumerator {
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
  answer: string;
  questionType:
    | 'text'
    | 'number'
    | 'text-area'
    | 'radio'
    | 'radio-text'
    | 'checkbox'
    | 'checkbox-text'
    | 'picker'
    | 'date'
    | 'time';
  keyboardType?: KeyboardType;
  maxLength?: number;
}

export interface IMonths {
  [key: string]: string;
}

export interface IKeyValuePair {
  [key: string]: string;
}

export interface ISubmittedBy {
  name: string;
  age?: string;
  email: string;
  cnic?: string;
  mobile?: string;
  address?: string;
  enumeratorId?: string;
}

export interface ISurveyPayload {
  surveyId: SURVEY_COMPONENTS;
  sectionA: IQuestion[];
  sectionB: IQuestion[];
  sectionC: IQuestion[];
  sectionD: IQuestion[];
  submittedBy: ISubmittedBy;
  submittedAt: string;
}

export interface ILoginRecord {
  email: string;
  password: string;
}

export interface IEnumeratorSignupRecord extends IEnumerator {
  confirmPassword: string;
}

export interface ISurveyStats {
  totalSurveys: number;
  totalEnumerators: number;
  totalComponentASurveys: number;
  totalComponentBSurveys: number;
}
