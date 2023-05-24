import { StyleSheet, Text, ActivityIndicator, Pressable } from 'react-native';
import React, { Fragment } from 'react';
import type { IButtonProps } from '@interfaces/components';
import { COLORS } from '@common/colors';
import { FONT_SIZES } from '@common/fonts';
import * as Haptics from 'expo-haptics';

const Button: React.FC<IButtonProps> = ({
  title,
  buttonStyle,
  buttonTextStyle,
  onPress,
  isLoading,
  disabled,
  children,
  dynamic = true,
}) => {
  const onPressHandler = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onPress?.();
  };
  return (
    <Pressable
      disabled={disabled}
      onPress={onPressHandler}
      style={({ pressed }) => [
        styles.container,
        buttonStyle,
        disabled && styles.disabled,
        pressed && dynamic && styles.pressed,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size='small' color='white' />
      ) : (
        <Fragment>
          {children && children}
          <Text style={[styles.label, buttonTextStyle]}>
            {title ?? 'Button'}
          </Text>
        </Fragment>
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
    fontSize: FONT_SIZES.LARGE,
    color: COLORS.WHITE,
  },
});
