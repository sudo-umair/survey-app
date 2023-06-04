import axiosClient from './axios';
import type {
  IEnumeratorSignupRequest,
  IEnumeratorSignupResponse,
  IEnumeratorLoginRequest,
  IEnumeratorLoginResponse,
  IEnumeratorResumeSessionRequest,
  IEnumeratorResumeSessionResponse,
} from '@interfaces/api';

export const enumeratorSignup = async (
  payload: IEnumeratorSignupRequest
): Promise<IEnumeratorSignupResponse> => {
  const response = await axiosClient.post('/enumerator/sign-up', payload);
  return response;
};

export const enumeratorLogin = async (
  payload: IEnumeratorLoginRequest
): Promise<IEnumeratorLoginResponse> => {
  const response = await axiosClient.post('/enumerator/sign-in', payload);
  return response;
};

export const enumeratorResumeSession = async (
  payload: IEnumeratorResumeSessionRequest
): Promise<IEnumeratorResumeSessionResponse> => {
  const response = await axiosClient.post(
    '/enumerator/resume-session',
    payload
  );
  return response;
};
