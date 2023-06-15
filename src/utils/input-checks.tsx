import {
  ILoginRecord,
  IEnumeratorSignupRecord,
  IQuestion,
} from '@interfaces/common';
import { Alert } from 'react-native';
import { showErrorToast } from '@helpers/toast-message';

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

    // return false;
    return true;
  }
  return true;
};

export const checkLoginInputs = (record: ILoginRecord): boolean => {
  if (record.email.trim() === '') {
    showErrorToast('Please enter your email');
    return false;
  }
  if (record.email.includes(' ')) {
    showErrorToast('Email cannot contain spaces');
    return false;
  }
  if (!record.email.includes('@')) {
    showErrorToast('Email must contain @');
    return false;
  }
  if (!record.email.endsWith('.com')) {
    showErrorToast('Email must end with .com');
    return false;
  }
  if (record.password === '') {
    showErrorToast('Please enter your password');
    return false;
  }
  if (record.password.includes(' ')) {
    showErrorToast('Password cannot contain spaces');
    return false;
  }
  if (record.password.length < 6) {
    showErrorToast('Password must be at least 6 characters long');
    return false;
  }
  return true;
};

export const checkSignupInputs = (record: IEnumeratorSignupRecord): boolean => {
  if (record.enumeratorId.trim() === '') {
    showErrorToast('Please enter your enumerator ID');
    return false;
  }
  if (record.enumeratorId.length < 6) {
    showErrorToast('Enumerator ID must be at least 6 characters long');
    return false;
  }
  if (record.enumeratorId.includes(' ')) {
    showErrorToast('Enumerator ID cannot contain spaces');
    return false;
  }
  if (record.firstName.trim() === '') {
    showErrorToast('Please enter your first name');
    return false;
  }
  if (record.lastName.trim() === '') {
    showErrorToast('Please enter your last name');
    return false;
  }
  if (record.email.trim() === '') {
    showErrorToast('Please enter your email');
    return false;
  }
  if (record.email.includes(' ')) {
    showErrorToast('Email cannot contain spaces');
    return false;
  }
  if (!record.email.includes('@')) {
    showErrorToast('Email must contain @');
    return false;
  }
  if (!record.email.endsWith('.com')) {
    showErrorToast('Email must end with .com');
    return false;
  }
  if (record.age.trim() === '') {
    showErrorToast('Please enter your age');
    return false;
  }
  if (isNaN(Number(record.age))) {
    showErrorToast('Age must be a number');
    return false;
  }
  if (record.cnic.trim() === '') {
    showErrorToast('Please enter your CNIC');
    return false;
  }
  if (record.cnic.includes(' ')) {
    showErrorToast('CNIC cannot contain spaces');
    return false;
  }
  if (record.cnic.length !== 15) {
    showErrorToast('CNIC must be 15 characters long (including dashes)');
    return false;
  }
  // check if cnic is in the format xxxxx-xxxxxxx-x
  if (!record.cnic.match(/^\d{5}-\d{7}-\d{1}$/)) {
    showErrorToast('CNIC must be in the format xxxxx-xxxxxxx-x');
    return false;
  }

  if (record.mobile.trim() === '') {
    showErrorToast('Please enter your mobile number');
    return false;
  }
  if (record.mobile.includes(' ')) {
    showErrorToast('Mobile number cannot contain spaces');
    return false;
  }
  if (record.mobile.length !== 11) {
    showErrorToast('Mobile number must be 11 characters long');
    return false;
  }
  if (isNaN(Number(record.mobile))) {
    showErrorToast('Mobile number must be a number');
    return false;
  }
  if (!record.mobile.startsWith('03')) {
    showErrorToast('Mobile number must start with 03');
    return false;
  }
  if (record.address.trim() === '') {
    showErrorToast('Please enter your address');
    return false;
  }
  if (record.password.trim() === '') {
    showErrorToast('Please enter your password');
    return false;
  }
  if (record.password.includes(' ')) {
    showErrorToast('Password cannot contain spaces');
    return false;
  }
  if (record.password.trim().length < 6) {
    showErrorToast('Password must be at least 6 characters long');
    return false;
  }
  if (record.confirmPassword.trim() === '') {
    showErrorToast('Please confirm your password');
    return false;
  }
  if (record.confirmPassword.includes(' ')) {
    showErrorToast('Confirm Password cannot contain spaces');
    return false;
  }
  if (record.confirmPassword.trim().length < 6) {
    showErrorToast('Confirm Password must be at least 6 characters long');
    return false;
  }
  if (record.password !== record.confirmPassword) {
    showErrorToast('Passwords do not match');
    return false;
  }
  return true;
};
