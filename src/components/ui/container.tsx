import { StyleSheet, View } from 'react-native';
import React from 'react';
import type { IContainerProps } from '@interfaces/components';
import { COLORS } from '@common/colors';

const Container: React.FC<IContainerProps> = ({ children, containerStyle }) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
});
