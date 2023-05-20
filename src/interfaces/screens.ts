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
