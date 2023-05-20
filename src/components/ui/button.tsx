import { StyleSheet, Text, ActivityIndicator, Pressable } from 'react-native';
import React from 'react';
import type { IButtonProps } from '@interfaces/components';
import { COLORS } from '@common/colors';

const Button: React.FC<IButtonProps> = ({
  title,
  buttonStyle,
  buttonTextStyle,
  onPress,
  isLoading,
  disabled,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        disabled && styles.disabled,
        pressed && styles.pressed,
        buttonStyle,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size='small' color='white' />
      ) : (
        <Text style={[styles.label, buttonTextStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY,
  },
  disabled: {
    backgroundColor: COLORS.TERTIARY,
  },
  pressed: {
    backgroundColor: COLORS.PRIMARY,
  },
  label: {
    fontSize: 16,
    color: COLORS.WHITE,
  },
});
