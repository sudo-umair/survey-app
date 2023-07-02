import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_TITLES, SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionC4ScreenProps } from '@interfaces/screens';
import { EnumeratorScreens } from '@common/screens';
import { checkSurveyAnswers } from '@utils/input-checks';
import { useAppDispatch } from '@redux/store';
import { submitSectionC4 } from '@redux/app-state-reducer';
import { SECTION_C4_QUESTIONS } from '@common/questions/survey-4';

const SectionC4Screen = ({
  navigation,
  route,
}: IEnumeratorSectionC4ScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_C4_QUESTIONS);

  const dispatch = useAppDispatch();

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;

      // if (index === 2) {
      //   if (newQuestions[2].answer !== 'Yes') {
      //     // to prevent check inputs error if c4 is not visible
      //     newQuestions[3].answer = 'None';
      //   } else {
      //     newQuestions[3].answer = '';
      //   }
      // } else if (index === 12) {
      //   if (newQuestions[12].answer !== 'Yes') {
      //     // to prevent check inputs error if e3 is not visible
      //     newQuestions[13].answer = 'None';
      //   } else {
      //     newQuestions[13].answer = '';
      //   }
      // }

      return newQuestions;
    });
  };

  const onPress = () => {
    if (checkSurveyAnswers(questions)) {
      dispatch(submitSectionC4(questions));
      navigation.navigate(EnumeratorScreens.SectionD4);
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>Section C4: {SECTION_TITLES.sectionC}</Text>
      <Text style={styles.subTitle}>
        Survey Component: {SURVEY_COMPONENTS.S4}
      </Text>
      <FlatList
        data={questions}
        renderItem={({ item, index }) => {
          // if (index === 3) {
          //   if (questions[2].answer !== 'Yes') {
          //     return null;
          //   }
          // } else if (index === 13) {
          //   if (questions[12].answer !== 'Yes') {
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

export default SectionC4Screen;

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
