import type {
  IEnumerator,
  ILoginRecord,
  ISurveyPayload,
  ISurveyStats,
} from './common';
import { IEnumeratorState, IAdminState } from './redux';
import { AxiosResponse } from 'axios';

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

export type IEnumeratorResumeSessionRequest = {
  email: string;
  token: string;
};
export type IEnumeratorResumeSessionResponse = AxiosResponse<{
  message: string;
  enumerator: IEnumeratorState;
}>;

// admin
export type IAdminLoginRequest = ILoginRecord;
export type IAdminLoginResponse = AxiosResponse<{
  message: string;
  admin: IAdminState;
}>;

export type IAdminResumeSessionRequest = {
  email: string;
  token: string;
};
export type IAdminResumeSessionResponse = AxiosResponse<{
  message: string;
  admin: IAdminState;
}>;

export type IAdminListEnumeratorRequest = {
  email: string;
  token: string;
};
export type IAdminListEnumeratorResponse = AxiosResponse<{
  message: string;
  enumerators: IEnumeratorState[];
}>;

export type IAdminToggleEnumeratorRequest = {
  email: string;
  token: string;
  enumeratorEmail: string;
};
export type IAdminToggleEnumeratorResponse = AxiosResponse<{
  message: string;
  enumerator: IEnumeratorState;
}>;

export type IAdminGetStatsRequest = {
  email: string;
  token: string;
};
export type IAdminGetStatsResponse = AxiosResponse<{
  message: string;
  stats: ISurveyStats;
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
