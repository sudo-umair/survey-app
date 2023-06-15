import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_TITLES, SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionD4ScreenProps } from '@interfaces/screens';
import { checkSurveyAnswers } from '@utils/input-checks';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { submitSectionD4 } from '@redux/app-state-reducer';
import { SECTION_D4_QUESTIONS } from '@common/questions/survey-4';
import { handleSurveyNavigation } from '@helpers/navigation';
import { showInfoToast } from '@helpers/toast-message';

const SectionD4Screen = ({
  navigation,
  route,
}: IEnumeratorSectionD4ScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_D4_QUESTIONS);

  const dispatch = useAppDispatch();

  const { surveyComponents } = useAppSelector((state) => state.appState);

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;
      return newQuestions;
    });
  };

  const onPress = () => {
    if (checkSurveyAnswers(questions)) {
      dispatch(submitSectionD4(questions));
      showInfoToast(`${SURVEY_COMPONENTS.S4} completed successfully}`);
      handleSurveyNavigation(navigation, surveyComponents);
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>Section D4: {SECTION_TITLES.sectionD}</Text>
      <Text style={styles.subTitle}>
        Survey Component: {SURVEY_COMPONENTS.S4}
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

export default SectionD4Screen;

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
