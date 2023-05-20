import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { IScrollContainerProps } from '@interfaces/components';
import { COLORS } from '@common/colors';

const ScrollContainer: React.FC<IScrollContainerProps> = ({
  children,
  containerStyle,
  contentContainerStyle,
  keyboardShouldPersistTaps,
}) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps={keyboardShouldPersistTaps ?? 'never'}
      contentContainerStyle={(styles.contentContainer, contentContainerStyle)}
      style={[styles.container, containerStyle]}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
