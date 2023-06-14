// Type definitions for navigation
import { EnumeratorScreens, AuthScreens, AdminScreens } from '@common/screens';
import { ISurveyPayload } from './common';

// AuthStackParamList
export type IAuthStackParamList = {
  [AuthScreens.ChooseRole]: undefined;
  [AuthScreens.Login]: {
    role: 'enumerator' | 'admin';
  };
  [AuthScreens.SignUp]: undefined;
};

// AdminStackParamList
export type IAdminStackParamList = {
  [AdminScreens.Home]: undefined;
  [AdminScreens.ManageEnumerators]: undefined;
  [AdminScreens.SurveysList]: undefined;
  [AdminScreens.ViewSurvey]: {
    survey: ISurveyPayload;
    section: 'sectionA' | 'sectionB' | 'sectionC' | 'sectionD';
  };
};

// EnumeratorStackParamList
export type IEnumeratorStackParamList = {
  [EnumeratorScreens.Home]: undefined;
  [EnumeratorScreens.SectionA]: undefined;
  [EnumeratorScreens.SectionB]: undefined;
  [EnumeratorScreens.SectionC1]: undefined;
  [EnumeratorScreens.SectionD1]: undefined;
  [EnumeratorScreens.SectionC2]: undefined;
  [EnumeratorScreens.SectionD2]: undefined;
  [EnumeratorScreens.SectionC3]: undefined;
  [EnumeratorScreens.SectionD3]: undefined;
  [EnumeratorScreens.SectionC4]: undefined;
  [EnumeratorScreens.SectionD4]: undefined;
  [EnumeratorScreens.SectionC5]: undefined;
  [EnumeratorScreens.SectionD5]: undefined;
  [EnumeratorScreens.SectionC6]: undefined;
  [EnumeratorScreens.SectionD6]: undefined;
  [EnumeratorScreens.SectionC7]: undefined;
  [EnumeratorScreens.SectionD7]: undefined;
  [EnumeratorScreens.SurveyCompleted]: undefined;
  [EnumeratorScreens.SyncSurveys]: undefined;
  [EnumeratorScreens.DisabledAccount]: undefined;
};
