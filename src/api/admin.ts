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
} from '@interfaces/api';

export const adminLogin = async (
  payload: IAdminLoginRequest
): Promise<IAdminLoginResponse> => {
  const response = await axiosClient.post('/admin/sign-in', payload);
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
