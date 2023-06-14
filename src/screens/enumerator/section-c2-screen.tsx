import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_TITLES, SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionC2ScreenProps } from '@interfaces/screens';
import { EnumeratorScreens } from '@common/screens';
import { checkSurveyAnswers } from '@utils/input-checks';
import { useAppDispatch } from '@redux/store';
import { submitSectionC2 } from '@redux/app-state-reducer';
import { SECTION_C2_QUESTIONS } from '@common/questions/survey-2';

const SectionC2Screen = ({
  navigation,
  route,
}: IEnumeratorSectionC2ScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_C2_QUESTIONS);

  const dispatch = useAppDispatch();

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;

      // if (index === 13) {
      //   if (newQuestions[13].answer !== 'Yes') {
      //     // to prevent check inputs error if C14a is not visible
      //     newQuestions[14].answer = 'None';
      //   } else {
      //     newQuestions[14].answer = '';
      //   }
      // }

      // if (index === 15) {
      //   if (newQuestions[15].answer !== 'Yes') {
      //     // to prevent check inputs error if C15a is not visible
      //     newQuestions[16].answer = 'None';
      //   } else {
      //     newQuestions[16].answer = '';
      //   }
      // }

      // if (index === 18) {
      //   if (newQuestions[18].answer !== 'Yes') {
      //     // to prevent check inputs error if C17a is not visible
      //     newQuestions[19].answer = 'None';
      //   } else {
      //     newQuestions[19].answer = '';
      //   }
      // }

      return newQuestions;
    });
  };

  const onPress = () => {
    if (checkSurveyAnswers(questions)) {
      dispatch(submitSectionC2(questions));
      navigation.navigate(EnumeratorScreens.SectionD2);
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>Section C2: {SECTION_TITLES.sectionC}</Text>
      <Text style={styles.subTitle}>
        Survey Component: {SURVEY_COMPONENTS.S2}
      </Text>
      <FlatList
        data={questions}
        renderItem={({ item, index }) => {
          // if (index === 14) {
          //   if (questions[13].answer !== 'Yes') {
          //     // to hide C14a if answer of C14 is not Yes
          //     return null;
          //   }
          // }

          // if (index === 16) {
          //   if (questions[15].answer !== 'Yes') {
          //     // to hide C15a if answer of A1 is not Yes
          //     return null;
          //   }
          // }

          // if (index === 19) {
          //   if (questions[18].answer !== 'Yes') {
          //     // to hide C17a if answer of C17 is not Yes
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

export default SectionC2Screen;

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
