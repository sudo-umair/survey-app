import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import type { ISurveyComponentProps } from '@interfaces/components';
import { COLORS } from '@common/colors';

const SurveyComponent: React.FC<ISurveyComponentProps> = ({
  title,
  isSelected,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isSelected && styles.selected, containerStyle]}
    >
      <Text
        style={[styles.text, textStyle, isSelected && { fontWeight: 'bold' }]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default SurveyComponent;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: COLORS.PRIMARY,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: COLORS.SECONDARY,
  },
  text: {
    fontSize: 24,
    color: COLORS.WHITE,
  },
});
