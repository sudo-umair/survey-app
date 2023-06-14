import { ReactNode } from 'react';
import type {
  ViewStyle,
  TextStyle,
  ScrollViewProps,
  TextInputProps,
  ScrollView,
} from 'react-native/types';
import { IQuestion, ISurveyPayload } from './common';
import { IEnumeratorState } from './redux';

// UI Components
export interface IContainerProps {
  children: React.ReactNode;
  containerStyle?: ViewStyle | ViewStyle[];
}

export interface IScrollContainerProps {
  children: React.ReactNode;
  containerStyle?: ScrollViewProps['style'] | ScrollViewProps['style'][];
  contentContainerStyle?: ScrollViewProps['contentContainerStyle'];
  keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
  innerRef?: React.RefObject<ScrollView>;
}

export interface ITextInputProps {
  value: string;
  placeholder?: string;
  inputStyle?: TextInputProps['style'] | TextInputProps['style'][];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoCorrect?: TextInputProps['autoCorrect'];
  autoFocus?: TextInputProps['autoFocus'];
  keyboardType?: TextInputProps['keyboardType'];
  editable?: TextInputProps['editable'];
  maxLength?: TextInputProps['maxLength'];
  multiline?: TextInputProps['multiline'];
  numberOfLines?: TextInputProps['numberOfLines'];
  keyboardAppearance?: TextInputProps['keyboardAppearance'];
  secureTextEntry?: TextInputProps['secureTextEntry'];
  autoComplete?: TextInputProps['autoComplete'];
  onChangeText: (text: string) => void;
  showSoftInputOnFocus?: TextInputProps['showSoftInputOnFocus'];
}

export interface IButtonProps {
  title?: string;
  onPress?: () => void;
  buttonStyle?: ViewStyle | ViewStyle[];
  buttonTextStyle?: TextStyle | TextStyle[];
  isLoading?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  dynamic?: boolean;
  haptics?: boolean;
}

// Enumerator Screens Components
export interface ISurveyComponentProps {
  title: string;
  onPress: () => void;
  isSelected: boolean;
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
}

export interface IAcknowledgmentProps {
  name: string;
}

export interface IQuestionBoxProps {
  item: IQuestion;
  index: number;
  onChange: (value: string, index: number) => void;
}

export interface IViewSurveyItemProps {
  item: IQuestion;
  index: number;
}

export interface ISyncSurveyItemProps {
  survey: ISurveyPayload;
}

export interface IManageEnumeratorItemProps {
  enumerator: IEnumeratorState;
  toggleEnumerator: (email: string) => void;
}

export interface ISurveyItemProps {
  survey: ISurveyPayload;
}
