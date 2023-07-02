import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_TITLES } from '@common/data';
import { SECTION_B_QUESTIONS } from '@common/questions/survey-1';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionBScreenProps } from '@interfaces/screens';
import { useAppSelector, useAppDispatch } from '@redux/store';
import { checkSurveyAnswers } from '@utils/input-checks';
import { submitSectionB } from '@redux/app-state-reducer';
import { handleNavigationToFirstSelectedSurvey } from '@helpers/navigation';

const SectionBScreen = ({
  navigation,
  route,
}: IEnumeratorSectionBScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_B_QUESTIONS);

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

  const onPress = () => {
    if (checkSurveyAnswers(questions)) {
      dispatch(submitSectionB(questions));
      handleNavigationToFirstSelectedSurvey(navigation, surveyComponents);
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>Section B: {SECTION_TITLES.sectionB}</Text>
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

export default SectionBScreen;

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
    marginHorizontal: 10,
  },
});
