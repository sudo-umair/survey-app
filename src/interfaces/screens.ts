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
