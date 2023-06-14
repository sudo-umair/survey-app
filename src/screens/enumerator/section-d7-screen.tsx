import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_TITLES, SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionD7ScreenProps } from '@interfaces/screens';
import { checkSurveyAnswers } from '@utils/input-checks';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { submitSectionD7 } from '@redux/app-state-reducer';
import { EnumeratorScreens } from '@common/screens';
import { SECTION_D7_QUESTIONS } from '@common/questions/survey-7';

const SectionD7Screen = ({
  navigation,
  route,
}: IEnumeratorSectionD7ScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_D7_QUESTIONS);

  const dispatch = useAppDispatch();

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;
      // if (index === 3) {
      //   if (newQuestions[3].answer === 'Yes') {
      //     // to prevent check inputs error if D4a is not visible
      //     newQuestions[4].answer = 'None';
      //   } else {
      //     newQuestions[4].answer = '';
      //   }
      // }
      return newQuestions;
    });
  };

  const onPress = () => {
    if (checkSurveyAnswers(questions)) {
      dispatch(submitSectionD7(questions));
      navigation.navigate(EnumeratorScreens.SurveyCompleted);
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>Section D7: {SECTION_TITLES.sectionD}</Text>
      <Text style={styles.subTitle}>
        Survey Component: {SURVEY_COMPONENTS.S7}
      </Text>

      <FlatList
        data={questions}
        renderItem={({ item, index }) => {
          // if (index === 4) {
          //   if (questions[3].answer === 'Yes') {
          //     // to hide D4a if answer of D4 is Yes
          //     return null;
          //   }
          // }

          return <QuestionBox onChange={onChange} index={index} item={item} />;
        }}
        keyExtractor={(item) => item.questionId}
        scrollEnabled={false}
        keyboardShouldPersistTaps='handled'
      />
      <Button
        title='Submit Survey'
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </ScrollContainer>
  );
};

export default SectionD7Screen;

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
