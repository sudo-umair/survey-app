import axiosClient from './axios';
import type {
  IAdminLoginRequest,
  IAdminLoginResponse,
  IAdminListEnumeratorRequest,
  IAdminListEnumeratorResponse,
  IAdminToggleEnumeratorRequest,
  IAdminToggleEnumeratorResponse,
  IAdminGetStatsRequest,
  IAdminGetStatsResponse,
  IAdminResumeSessionRequest,
  IAdminResumeSessionResponse,
  IAdminGetSurveysRequest,
  IAdminGetSurveysResponse,
} from '@interfaces/api';

export const adminLogin = async (
  payload: IAdminLoginRequest
): Promise<IAdminLoginResponse> => {
  const response = await axiosClient.post('/admin/sign-in', payload);
  return response;
};

export const adminResumeSession = async (
  payload: IAdminResumeSessionRequest
): Promise<IAdminResumeSessionResponse> => {
  const response = await axiosClient.post('/admin/resume-session', payload);
  return response;
};

export const adminListEnumerator = async (
  payload: IAdminListEnumeratorRequest
): Promise<IAdminListEnumeratorResponse> => {
  const response = await axiosClient.post('/admin/list-enumerators', payload);
  return response;
};

export const adminToggleEnumerator = async (
  payload: IAdminToggleEnumeratorRequest
): Promise<IAdminToggleEnumeratorResponse> => {
  const response = await axiosClient.post(
    '/admin/toggle-enumerator-status',
    payload
  );
  return response;
};

export const adminGetStats = async (
  payload: IAdminGetStatsRequest
): Promise<IAdminGetStatsResponse> => {
  const response = await axiosClient.post('/admin/stats', payload);
  return response;
};

export const adminGetSurveys = async (
  payload: IAdminGetSurveysRequest
): Promise<IAdminGetSurveysResponse> => {
  const response = await axiosClient.post('/admin/surveys', payload);
  return response;
};
