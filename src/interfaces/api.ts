import type { IEnumerator, ILoginRecord, ISurveyPayload } from './common';
import { IEnumeratorState, IAdminState } from './redux';

interface IAxiosResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

// enumerator
export type IEnumeratorSignupRequest = IEnumerator;
export type IEnumeratorSignupResponse = IAxiosResponse<{
  message: string;
}>;

export type IEnumeratorLoginRequest = ILoginRecord;
export type IEnumeratorLoginResponse = IAxiosResponse<{
  message: string;
  enumerator: IEnumeratorState;
}>;

// admin
export type IAdminLoginRequest = ILoginRecord;
export type IAdminLoginResponse = IAxiosResponse<{
  message: string;
  admin: IAdminState;
}>;

// survey
export type ISurveyCreateRequest = ISurveyPayload & {
  token: string;
};
export type ISurveyCreateResponse = IAxiosResponse<{
  message: string;
  survey: ISurveyPayload;
}>;

export interface ISurveySyncRequest {
  email: string;
  token: string;
  surveys: ISurveyPayload[];
}
export type ISurveySyncResponse = IAxiosResponse<{
  message: string;
  surveys: ISurveyPayload[];
}>;
