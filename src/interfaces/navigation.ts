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
};

// EnumeratorStackParamList
export type IEnumeratorStackParamList = {
  [EnumeratorScreens.Home]: undefined;
  [EnumeratorScreens.SectionA]: undefined;
  [EnumeratorScreens.SectionB]: undefined;
  [EnumeratorScreens.SectionC]: undefined;
  [EnumeratorScreens.SectionD]: undefined;
  [EnumeratorScreens.ComponentA]: undefined;
  [EnumeratorScreens.ComponentB]: undefined;
  [EnumeratorScreens.ComponentC]: undefined;
};
