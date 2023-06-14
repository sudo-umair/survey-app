import { SURVEY_COMPONENTS } from '@common/data';
import { IQuestion } from './common';

export interface IUserState {
  user: {
    id: string;
    name: string;
    age?: string;
    email: string;
    cnic?: string;
    mobile?: string;
    address?: string;
    enumeratorId?: string;
    token: string;
    isDisabled?: boolean;
    createdAt: string;
    updatedAt: string;
  };
  role: 'admin' | 'enumerator' | null;
  isLoggedIn?: boolean;
}

export interface IAdminState {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface IEnumeratorState {
  id: string;
  name: string;
  email: string;
  age: string;
  cnic: string;
  mobile: string;
  address: string;
  password: string;
  enumeratorId: string;
  token: string;
  isDisabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IAppState {
  surveyComponents: SURVEY_COMPONENTS[];
  sectionA: IQuestion[];
  sectionB: IQuestion[];
  sectionC1: IQuestion[];
  sectionD1: IQuestion[];
  sectionC2: IQuestion[];
  sectionD2: IQuestion[];
  sectionC3: IQuestion[];
  sectionD3: IQuestion[];
  sectionC4: IQuestion[];
  sectionD4: IQuestion[];
  sectionC5: IQuestion[];
  sectionD5: IQuestion[];
  sectionC6: IQuestion[];
  sectionD6: IQuestion[];
  sectionC7: IQuestion[];
  sectionD7: IQuestion[];
}
