import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ISurveyItemProps } from '@interfaces/components';
import { COLORS } from '@common/colors';
import { FONT_SIZES } from '@common/fonts';
import { dateFormatter, timeFormatter } from '@utils/formatters';
import { useNavigation } from '@react-navigation/native';
import { IAdminSurveysListScreenProps } from '@interfaces/screens';
import { AdminScreens } from '@common/screens';

const SurveyItem: React.FC<ISurveyItemProps> = ({ survey }) => {
  const navigation =
    useNavigation<IAdminSurveysListScreenProps['navigation']>();

  const onPress = () => {
    navigation.navigate(AdminScreens.ViewSurvey, {
      survey,
      section: 'sectionA',
    });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>Survey: {survey.surveyId}</Text>
      <Text style={styles.label}>District: {survey.sectionB[0].answer}</Text>
      <Text style={styles.label}>
        Enumerator Name: {survey.submittedBy.name}
      </Text>
      <Text style={styles.label}>
        Enumerator ID: {survey.submittedBy.enumeratorId}
      </Text>
      <Text style={styles.label}>
        Enumerator Email: {survey.submittedBy.email}
      </Text>
      <Text style={styles.label}>
        Submitted At: {timeFormatter(survey.submittedAt)},{' '}
        {dateFormatter(survey.submittedAt)}
      </Text>
    </Pressable>
  );
};

export default React.memo(SurveyItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
    shadowRadius: 10,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.LARGE,
    marginBottom: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: FONT_SIZES.MEDIUM,
  },
});
