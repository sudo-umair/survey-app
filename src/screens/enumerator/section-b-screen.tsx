import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import Acknowledgment from '@components/enumerator/section-a-screen/acknowledgment';
import Container from '@components/ui/container';
import type { IQuestion } from '@interfaces/common';
import { SECTION_B_QUESTIONS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionBScreenProps } from '@interfaces/screens';
import { EnumeratorScreens } from '@common/screens';

const SectionBScreen = ({
  navigation,
  route,
}: IEnumeratorSectionBScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_B_QUESTIONS);

  const onChange = (text: string, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].answer = text;
    setQuestions(newQuestions);
  };

  useEffect(() => {
    // console.log('questions', questions);
  }, [questions]);

  const onPress = () => {
    // navigation.navigate(EnumeratorScreens.SectionC);
    console.log(
      'questions',
      questions.find((q) => q.questionId === 'B8')
    );
  };

  return (
    <ScrollContainer contentContainerStyle={styles.rootContentContainer}>
      <Text style={styles.title}>Section B:Area and Respondent</Text>
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
