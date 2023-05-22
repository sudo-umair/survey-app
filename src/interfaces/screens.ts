import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IEnumeratorStackParamList } from './navigation';
import { EnumeratorScreens } from '@common/screens';
import { STACKS } from '@common/stacks';

// Enumerator Screens
export type IEnumeratorSignupScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.SignUp,
  STACKS.ENUMERATOR
>;

export type IEnumeratorLoginScreenProps = NativeStackScreenProps<
  IEnumeratorStackParamList,
  EnumeratorScreens.Login,
  STACKS.ENUMERATOR
>;

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
