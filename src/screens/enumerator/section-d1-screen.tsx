import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_TITLES, SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionD1ScreenProps } from '@interfaces/screens';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { checkSurveyAnswers } from '@utils/input-checks';
import { submitSectionD1 } from '@redux/app-state-reducer';
import { SECTION_D1_QUESTIONS } from '@common/questions/survey-1';
import { handleNavigationForOtherSurveys } from '@helpers/navigation';
import { showInfoToast } from '@helpers/toast-message';

const SectionD1Screen = ({
  navigation,
  route,
}: IEnumeratorSectionD1ScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_D1_QUESTIONS);

  const surveyComponents = useAppSelector(
    (state) => state.appState.surveyComponents
  );

  const dispatch = useAppDispatch();

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;
      return newQuestions;
    });
  };

  const onPress = async () => {
    if (checkSurveyAnswers(questions)) {
      dispatch(submitSectionD1(questions));
      showInfoToast(`${SURVEY_COMPONENTS.S1} completed successfully}`);
      handleNavigationForOtherSurveys(
        navigation,
        surveyComponents,
        SURVEY_COMPONENTS.S1
      );
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>Section D1: {SECTION_TITLES.sectionD}</Text>
      <Text style={styles.subTitle}>
        Survey Component: {SURVEY_COMPONENTS.S1}
      </Text>
      <FlatList
        data={questions}
        renderItem={({ item, index }) => {
          return <QuestionBox onChange={onChange} index={index} item={item} />;
        }}
        keyExtractor={(item) => item.questionId}
        scrollEnabled={false}
        keyboardShouldPersistTaps='handled'
      />
      <Button title='Next' buttonStyle={styles.button} onPress={onPress} />
    </ScrollContainer>
  );
};

export default SectionD1Screen;

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
    marginTop: 10,
  },
  subTitle: {
    fontSize: FONT_SIZES.EXTRA_LARGE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 10,
  },
});
