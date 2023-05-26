// Type definitions for navigation
import { EnumeratorScreens, AuthScreens, AdminScreens } from '@common/screens';

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
  [AdminScreens.UsersList]: undefined;
  [AdminScreens.SurveysList]: undefined;
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
  [EnumeratorScreens.SurveyCompleted]: undefined;
  [EnumeratorScreens.SyncSurveys]: undefined;
  [EnumeratorScreens.DisabledAccount]: undefined;
};
