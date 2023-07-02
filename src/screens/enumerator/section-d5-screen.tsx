import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_TITLES, SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionD5ScreenProps } from '@interfaces/screens';
import { checkSurveyAnswers } from '@utils/input-checks';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { submitSectionD5 } from '@redux/app-state-reducer';
import { SECTION_D5_QUESTIONS } from '@common/questions/survey-5';
import { handleNavigationForOtherSurveys } from '@helpers/navigation';
import { showInfoToast } from '@helpers/toast-message';

const SectionD5Screen = ({
  navigation,
  route,
}: IEnumeratorSectionD5ScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(() =>
    JSON.parse(JSON.stringify(SECTION_D5_QUESTIONS))
  );

  const surveyComponents = useAppSelector(
    (state) => state.appState.surveyComponents
  );

  const dispatch = useAppDispatch();

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;
      // if (index === 10) {
      //   if (newQuestions[10].answer !== 'Yes') {
      //     // to prevent check inputs error if h2a is not visible
      //     newQuestions[11].answer = 'None';
      //   } else {
      //     newQuestions[11].answer = '';
      //   }
      // }
      return newQuestions;
    });
  };

  const onPress = () => {
    if (checkSurveyAnswers(questions)) {
      dispatch(submitSectionD5(questions));
      showInfoToast(`${SURVEY_COMPONENTS.S5} completed successfully}`);
      handleNavigationForOtherSurveys(
        navigation,
        surveyComponents,
        SURVEY_COMPONENTS.S5
      );
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>Section D5: {SECTION_TITLES.sectionD}</Text>
      <Text style={styles.subTitle}>
        Survey Component: {SURVEY_COMPONENTS.S5}
      </Text>

      <FlatList
        data={questions}
        renderItem={({ item, index }) => {
          // if (index === 11) {
          //   if (questions[10].answer !== 'Yes') {
          //     return null;
          //   }
          // }

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

export default SectionD5Screen;

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
