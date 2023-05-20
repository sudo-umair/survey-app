// Type definitions for navigation
import { EnumeratorScreens } from '@common/screens';

// AdminStackParamList
export type IAdminStackParamList = {};

// EnumeratorStackParamList
export type IEnumeratorStackParamList = {
  [EnumeratorScreens.SignUp]: undefined;
  [EnumeratorScreens.Login]: undefined;
  [EnumeratorScreens.Home]: undefined;
};
