import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import React, { useCallback, useState, useRef } from 'react';
import { IAdminViewSurveyScreenProps } from '@interfaces/screens';
import ScrollContainer from '@components/ui/scroll-container';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import Button from '@components/ui/button';
import { AdminScreens } from '@common/screens';
import { SECTION_TITLES } from '@common/data';
import ViewSurveyItem from '@components/admin/view-survey-item';
import { IQuestion } from '@interfaces/common';
import { useFocusEffect } from '@react-navigation/native';

const ViewSurveyScreen = ({
  navigation,
  route,
}: IAdminViewSurveyScreenProps) => {
  const { section, survey } = route.params;

  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const scrollViewRef = useRef<ScrollView>(null);

  const data = (surveySection: typeof section) => {
    switch (surveySection) {
      case 'sectionA':
        return survey.sectionA;
      case 'sectionB':
        return survey.sectionB;
      case 'sectionC':
        return survey.sectionC;
      case 'sectionD':
        return survey.sectionD;
      default:
        return [];
    }
  };

  useFocusEffect(
    useCallback(() => {
      setQuestions(data(section));
    }, [section])
  );

  const title = () => {
    switch (section) {
      case 'sectionA':
        return `Section A: ${SECTION_TITLES.sectionA}`;
      case 'sectionB':
        return `Section B: ${SECTION_TITLES.sectionB}`;
      case 'sectionC':
        return `Section C: ${SECTION_TITLES.sectionC}`;
      case 'sectionD':
        return `Section D: ${SECTION_TITLES.sectionD}`;
      default:
        return '';
    }
  };

  const nextSection = (surveySection: typeof section) => {
    switch (surveySection) {
      case 'sectionA':
        return 'sectionB';
      case 'sectionB':
        return 'sectionC';
      case 'sectionC':
        return 'sectionD';
      default:
        return 'sectionA';
    }
  };

  const onPress = () => {
    if (section !== 'sectionD') {
      navigation.push(AdminScreens.ViewSurvey, {
        survey,
        section: nextSection(section),
      });
    } else {
      navigation.navigate(AdminScreens.SurveysList);
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
      innerRef={scrollViewRef}
    >
      <Text style={styles.title}>{title()}</Text>
      <FlatList
        data={questions}
        renderItem={({ item, index }) => {
          return <ViewSurveyItem index={index} item={item} />;
        }}
        keyExtractor={(item) => item.questionId}
        scrollEnabled={false}
        keyboardShouldPersistTaps='handled'
      />
      <Button
        title={section !== 'sectionD' ? 'Next Section' : 'Finish'}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </ScrollContainer>
  );
};

export default ViewSurveyScreen;

const styles = StyleSheet.create({
  rootContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginVertical: 10,
  },
  container: {
    padding: 10,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 0,
  },
});
