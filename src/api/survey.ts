import axiosClient from './axios';
import type {
  ISurveyCreateRequest,
  ISurveyCreateResponse,
  ISurveySyncRequest,
  ISurveySyncResponse,
} from '@interfaces/api';

export const createSurvey = async (
  payload: ISurveyCreateRequest
): Promise<ISurveyCreateResponse> => {
  const response = await axiosClient.post('/survey/create-survey', payload);
  return response;
};

export const syncSurveys = async (
  payload: ISurveySyncRequest
): Promise<ISurveySyncResponse> => {
  const response = await axiosClient.post('/survey/sync-surveys', payload);
  return response;
};
