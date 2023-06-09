import { IAxiosErrorResponse } from '@interfaces/api';
import { AxiosError } from 'axios';

export const handleAxiosError = (error: AxiosError<IAxiosErrorResponse>) => {
  if (error.response) {
    const { status, data } = error.response;
    return {
      status,
      message: data.message,
    };
  } else if (error.request) {
    return {
      status: 500,
      message: 'No response from server',
    };
  } else {
    return {
      status: 500,
      message: error.message,
    };
  }
};
