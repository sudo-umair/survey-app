import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import type { IQuestion } from '@interfaces/common';
import { SECTION_B_QUESTIONS, SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionBScreenProps } from '@interfaces/screens';
import { EnumeratorScreens } from '@common/screens';
import { useAppSelector } from '@redux/store';
import { checkSurveyAnswers } from '@utils/functions';

const SectionBScreen = ({
  navigation,
  route,
}: IEnumeratorSectionBScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_B_QUESTIONS);

  const { surveyComponents } = useAppSelector((state) => state.appState);

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;

      // calculate female members on bases of total members minus male members
      if (index === 12) {
        // index belongs to male members
        console.log('index 12');
        const totalMembers = Number(questions[11].answer);
        const maleMembers = Number(questions[12].answer);
        if (maleMembers <= totalMembers) {
          newQuestions[13].answer = (totalMembers - maleMembers).toString();
        } else {
          newQuestions[12].answer = newQuestions[11].answer;
          newQuestions[13].answer = '0';
        }
      }

      if (index === 13) {
        // index belongs to female members
        const totalMembers = Number(questions[11].answer);
        const maleMembers = Number(questions[12].answer);
        const femaleMembers = Number(questions[13].answer);
        if (femaleMembers <= totalMembers - maleMembers) {
          newQuestions[13].answer = text;
        } else {
          newQuestions[13].answer = (totalMembers - maleMembers).toString();
        }
      }

      if (index === 15) {
        // index belongs to male HH members currently earning
        const maleMembers = Number(questions[12].answer);
        if (Number(newQuestions[15].answer) <= maleMembers) {
          newQuestions[index].answer = text;
        } else {
          newQuestions[15].answer = maleMembers.toString();
        }
      }

      if (index === 16) {
        // index belongs to female HH members currently earning
        const femaleMembers = Number(questions[13].answer);
        if (Number(newQuestions[16].answer) <= femaleMembers) {
          newQuestions[index].answer = text;
        } else {
          newQuestions[16].answer = femaleMembers.toString();
        }
      }

      return newQuestions;
    });
  };

  const onPress = () => {
    if (checkSurveyAnswers(questions)) {
      if (surveyComponents.includes(SURVEY_COMPONENTS.A)) {
        navigation.navigate(EnumeratorScreens.SectionC1);
      } else if (surveyComponents.includes(SURVEY_COMPONENTS.B)) {
        navigation.navigate(EnumeratorScreens.SectionC2);
      }
    }
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>Section B: Area and Respondent</Text>
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
