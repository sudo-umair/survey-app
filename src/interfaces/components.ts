import { ReactNode } from 'react';
import type {
  ViewStyle,
  TextStyle,
  ScrollViewProps,
  TextInputProps,
} from 'react-native/types';
import { IQuestion } from './common';

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
