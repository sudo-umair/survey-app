import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_C1_QUESTIONS, SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionC1ScreenProps } from '@interfaces/screens';
import { EnumeratorScreens } from '@common/screens';
import { checkSurveyAnswers } from '@utils/input-checks';
import { useAppDispatch } from '@redux/store';
import { submitSectionC1 } from '@redux/app-state-reducer';

const SectionC1Screen = ({
  navigation,
  route,
}: IEnumeratorSectionC1ScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_C1_QUESTIONS);

  const dispatch = useAppDispatch();

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;

      if (index === 10) {
        // index belongs to share of farmer in installation of HEIS
        if (Number(newQuestions[10].answer) > 100) {
          newQuestions[10].answer = '100';
        }
      }
      return newQuestions;
    });
  };

  const onPress = () => {
    if (checkSurveyAnswers(questions)) {
      dispatch(submitSectionC1(questions));
      navigation.navigate(EnumeratorScreens.SectionD1);
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>
        Section C1: Intervention-Related Questions
      </Text>
      <Text style={styles.subTitle}>
        Survey Component: {SURVEY_COMPONENTS.A}
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

export default SectionC1Screen;

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
