import Toast from 'react-native-toast-message';

export const showSuccessToast = (message: string, message2: string = '') => {
  Toast.show({
    type: 'success',
    text1: message,
    text2: message2,
  });
};

export const showErrorToast = (message: string, message2: string = '') => {
  Toast.show({
    type: 'error',
    text1: message,
    text2: message2,
  });
};

export const showInfoToast = (message: string, message2: string = '') => {
  Toast.show({
    type: 'info',
    text1: message,
    text2: message2,
  });
};
