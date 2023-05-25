import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  IAdminStackParamList,
  IAuthStackParamList,
  IEnumeratorStackParamList,
} from './navigation';
import { AdminScreens, AuthScreens, EnumeratorScreens } from '@common/screens';
import { STACKS } from '@common/stacks';

// Auth Screens
export type IAuthSignupScreenProps = NativeStackScreenProps<
  IAuthStackParamList,
  AuthScreens.SignUp,
  STACKS.AUTH
>;

export type IAuthLoginScreenProps = NativeStackScreenProps<
  IAuthStackParamList,
  AuthScreens.Login,
  STACKS.AUTH
>;

export type IAuthChooseRoleScreenProps = NativeStackScreenProps<
  IAuthStackParamList,
  AuthScreens.ChooseRole,
  STACKS.AUTH
>;

// Admin Screens
export type IAdminHomeScreenProps = NativeStackScreenProps<
  IAdminStackParamList,
  AdminScreens.Home,
  STACKS.ADMIN
>;

export type IAdminUsersListScreenProps = NativeStackScreenProps<
  IAdminStackParamList,
  AdminScreens.UsersList,
  STACKS.ADMIN
>;

export type IAdminSurveysListScreenProps = NativeStackScreenProps<
  IAdminStackParamList,
  AdminScreens.SurveysList,
  STACKS.ADMIN
>;

// Enumerator Screens
export type IEnumeratorHomeScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.Home,
  STACKS.ENUMERATOR
>;

export type IEnumeratorSectionAScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SectionA,
  STACKS.ENUMERATOR
>;

export type IEnumeratorSectionBScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SectionB,
  STACKS.ENUMERATOR
>;

export type IEnumeratorSectionC1ScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SectionC1,
  STACKS.ENUMERATOR
>;

export type IEnumeratorSectionD1ScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SectionD1,
  STACKS.ENUMERATOR
>;

export type IEnumeratorSectionC2ScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SectionC2,
  STACKS.ENUMERATOR
>;

export type IEnumeratorSectionD2ScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SectionD2,
  STACKS.ENUMERATOR
>;
