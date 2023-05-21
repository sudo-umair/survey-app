import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ScrollContainer from '@components/ui/scroll-container';
import { COLORS } from '@common/colors';
import Acknowledgment from '@components/enumerator/section-a-screen/acknowledgment';
import Container from '@components/ui/container';
import type { IQuestion } from '@interfaces/common';
import { SECTION_A_QUESTIONS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import QuestionBox from '@components/enumerator/question-box';
import Button from '@components/ui/button';
import { IEnumeratorSectionAScreenProps } from '@interfaces/screens';
import { EnumeratorScreens } from '@common/screens';

const SectionAScreen = ({
  navigation,
  route,
}: IEnumeratorSectionAScreenProps) => {
  const [questions, setQuestions] = useState<IQuestion[]>(SECTION_A_QUESTIONS);

  const onChange = (text: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].answer = text;
      return newQuestions;
    });
  };

  const onPress = () => {
    // if (!checkAnswers()) {
    //   alert('Please answer all the questions');
    //   return;
    // }
    navigation.navigate(EnumeratorScreens.SectionB);
  };

  const checkAnswers = () => {
    if (questions.find((q) => q.answer === '')) {
      return false;
    }
    return true;
  };

  return (
    <ScrollContainer
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.rootContentContainer}
    >
      <Text style={styles.title}>
        Section A: Informed Consent Form and Identification
      </Text>
      <Container containerStyle={styles.container}>
        <Acknowledgment name='Muhammad Umair' />
      </Container>
      <FlatList
        data={questions}
        renderItem={({ item, index }) => {
          if (index === 1) {
            if (questions[0].answer !== 'Yes') {
              // to prevent check inputs error if A2 is not visible
              questions[1].answer = 'None';
              // to hide A2 if answer of A1 is not Yes
              return null;
            }
          }
          return <QuestionBox onChange={onChange} index={index} item={item} />;
        }}
        keyExtractor={(item) => item.questionId}
        scrollEnabled={false}
      />
      <Button title='Next' buttonStyle={styles.button} onPress={onPress} />
    </ScrollContainer>
  );
};

export default SectionAScreen;

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
