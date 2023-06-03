import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ISurveyItemProps } from '@interfaces/components';

const SurveyItem: React.FC<ISurveyItemProps> = ({ survey }) => {
  return (
    <View>
      <Text>SurveyItem</Text>
    </View>
  );
};

export default React.memo(SurveyItem);

const styles = StyleSheet.create({});
