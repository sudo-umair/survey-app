import { IQuestion } from '@interfaces/common';
import { Alert } from 'react-native';

export const checkSurveyAnswers = (questions: IQuestion[]): boolean => {
  const missingAnswers = questions.filter(
    (q) => q.answer.trim() === '' || q.answer === 'Other (Specify)'
  );
  if (missingAnswers.length > 0) {
    const missingQuestions = missingAnswers.map((q) => q.questionId);
    const missingQuestionsString = missingQuestions.join(', ');
    Alert.alert(
      'Missing Answers',
      `Please answer the following questions: ${missingQuestionsString}`,
      [
        {
          text: 'Ok',
          onPress: () => {},
          style: 'default',
        },
      ],
      { cancelable: false }
    );

    return false;
    // return true;
  }
  return true;
};

export const checkLoginInputs = (): boolean => {
  return true;
};
