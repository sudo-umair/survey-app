import { IKeyValuePair, IQuestion } from './common';

export interface IUserState {
  user: {
    id: string;
    name: string;
    age: string;
    email: string;
    cnic?: string;
    mobile?: string;
    address?: string;
    enumeratorId?: string;
    token?: string;
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
}

export interface IAppState {
  surveyComponents: string[];
  sectionA: IQuestion[];
  sectionB: IQuestion[];
  sectionC1: IQuestion[];
  sectionD1: IQuestion[];
  sectionC2: IQuestion[];
  sectionD2: IQuestion[];
}
