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

export type IEnumeratorSectionCScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SectionC,
  STACKS.ENUMERATOR
>;

export type IEnumeratorSectionDScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SectionD,
  STACKS.ENUMERATOR
>;

export type IEnumeratorComponentAScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.ComponentA,
  STACKS.ENUMERATOR
>;

export type IEnumeratorComponentBScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.ComponentB,
  STACKS.ENUMERATOR
>;

export type IEnumeratorComponentCScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.ComponentC,
  STACKS.ENUMERATOR
>;
