import axiosClient from './axios';
import type { IAdminLoginRequest, IAdminLoginResponse } from '@interfaces/api';

export const adminLogin = async (
  payload: IAdminLoginRequest
): Promise<IAdminLoginResponse> => {
  const response = await axiosClient.post('/admin/sign-in', payload);
  return response;
};
