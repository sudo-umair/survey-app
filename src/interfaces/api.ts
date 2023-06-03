import type { IEnumerator, IEnumeratorLoginRecord } from './common';
import { IEnumeratorState } from './redux';
// enumerator

interface IAxiosResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export type IEnumeratorSignupRequest = IEnumerator;
export type IEnumeratorSignupResponse = IAxiosResponse<{
  message: string;
}>;

export type IEnumeratorLoginRequest = IEnumeratorLoginRecord;
export type IEnumeratorLoginResponse = IAxiosResponse<{
  message: string;
  enumerator: IEnumeratorState;
}>;
