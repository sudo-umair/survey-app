import type { IEnumerator, ILoginRecord, ISurveyPayload } from './common';
import { IEnumeratorState, IAdminState } from './redux';
import { AxiosResponse } from 'axios';

// interface IAxiosResponse<T> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: any;
//   config: any;
//   request?: any;
// }

// enumerator
export type IEnumeratorSignupRequest = IEnumerator;
export type IEnumeratorSignupResponse = AxiosResponse<
  {
    message: string;
    enumerator: IEnumeratorState;
  },
  IEnumeratorState
>;

export type IEnumeratorLoginRequest = ILoginRecord;
export type IEnumeratorLoginResponse = AxiosResponse<{
  message: string;
  enumerator: IEnumeratorState;
}>;

// admin
export type IAdminLoginRequest = ILoginRecord;
export type IAdminLoginResponse = AxiosResponse<{
  message: string;
  admin: IAdminState;
}>;

// survey
export type ISurveyCreateRequest = ISurveyPayload & {
  token: string;
};
export type ISurveyCreateResponse = AxiosResponse<{
  message: string;
  survey: ISurveyPayload;
}>;

export interface ISurveySyncRequest {
  email: string;
  token: string;
  surveys: ISurveyPayload[];
}
export type ISurveySyncResponse = AxiosResponse<{
  message: string;
  surveys: ISurveyPayload[];
}>;
