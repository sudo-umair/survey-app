import { StyleSheet, TextInput as Input } from 'react-native';
import React from 'react';
import { ITextInputProps } from '@interfaces/components';
import { COLORS } from '@common/colors';
import { FONT_SIZES } from '@common/fonts';

const TextInput: React.FC<ITextInputProps> = ({
  value,
  autoCapitalize,
  autoCorrect,
  autoFocus,
  keyboardType,
  editable,
  inputStyle,
  keyboardAppearance,
  maxLength,
  multiline,
  onChangeText,
  numberOfLines,
  placeholder,
  autoComplete,
  secureTextEntry,
}) => {
  return (
    <Input
      value={value ?? ''}
      placeholder={placeholder ?? ''}
      onChangeText={onChangeText ?? (() => {})}
      style={[styles.input, inputStyle]}
      autoCapitalize={autoCapitalize ?? 'none'}
      autoCorrect={autoCorrect ?? false}
      autoFocus={autoFocus ?? false}
      keyboardType={keyboardType ?? 'default'}
      editable={editable ?? true}
      maxLength={maxLength ?? 100}
      multiline={multiline ?? false}
      numberOfLines={multiline ? numberOfLines : 1}
      textAlignVertical={multiline ? 'top' : 'center'}
      keyboardAppearance={keyboardAppearance ?? 'default'}
      secureTextEntry={secureTextEntry ?? false}
      autoComplete={autoComplete ?? 'off'}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    fontSize: FONT_SIZES.MEDIUM,
  },
});
