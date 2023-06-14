import { StyleSheet, Text } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import Container from '@components/ui/container';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import Lottie from 'lottie-react-native';
import CompletedAnimation from '@assets/animations/completed.json';
import { useAppSelector, useAppDispatch } from '@redux/store';
import Button from '@components/ui/button';
import { useNetInfo } from '@react-native-community/netinfo';
import { SURVEY_COMPONENTS } from '@common/data';
import { appendData } from '@helpers/async-storage';
import { ISubmittedBy, ISurveyPayload } from '@interfaces/common';
import { IEnumeratorSurveyCompletedScreenProps } from '@interfaces/screens';
import { showErrorToast, showSuccessToast } from '@helpers/toast-message';
import { createSurvey } from '@api/survey';
import { handleAxiosError } from '@helpers/api';
import { clearData } from '@redux/app-state-reducer';

const SurveyCompletedScreen = ({
  navigation,
  route,
}: IEnumeratorSurveyCompletedScreenProps) => {
  const animationRef = useRef<Lottie>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const rootState = useAppSelector((state) => state);
  const {
    appState,
    user: { user },
  } = rootState;

  const { isInternetReachable } = useNetInfo();

  const SubmittedBy: ISubmittedBy = {
    name: user.name,
    age: user.age,
    email: user.email,
    cnic: user.cnic,
    mobile: user.mobile,
    address: user.address,
    enumeratorId: user.enumeratorId,
  };

  const isSurvey1Empty = useMemo(() => {
    return appState.sectionC1.length === 0 && appState.sectionD1.length === 0;
  }, [appState.sectionC1, appState.sectionD1]);

  const isSurvey2Empty = useMemo(() => {
    return appState.sectionC2.length === 0 && appState.sectionD2.length === 0;
  }, [appState.sectionC2, appState.sectionD2]);

  const isSurvey3Empty = useMemo(() => {
    return appState.sectionC3.length === 0 && appState.sectionD3.length === 0;
  }, [appState.sectionC3, appState.sectionD3]);

  const isSurvey4Empty = useMemo(() => {
    return appState.sectionC4.length === 0 && appState.sectionD4.length === 0;
  }, [appState.sectionC4, appState.sectionD4]);

  const isSurvey5Empty = useMemo(() => {
    return appState.sectionC5.length === 0 && appState.sectionD5.length === 0;
  }, [appState.sectionC5, appState.sectionD5]);

  const isSurvey6Empty = useMemo(() => {
    return appState.sectionC6.length === 0 && appState.sectionD6.length === 0;
  }, [appState.sectionC6, appState.sectionD6]);

  const isSurvey7Empty = useMemo(() => {
    return appState.sectionC7.length === 0 && appState.sectionD7.length === 0;
  }, [appState.sectionC7, appState.sectionD7]);

  const Survey1Payload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.S1,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC1,
    sectionD: appState.sectionD1,
    submittedAt: new Date().toISOString(),
    submittedBy: SubmittedBy,
  };

  const Survey2Payload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.S2,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC2,
    sectionD: appState.sectionD2,
    submittedAt: new Date().toISOString(),
    submittedBy: SubmittedBy,
  };

  const Survey3Payload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.S3,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC3,
    sectionD: appState.sectionD3,
    submittedAt: new Date().toISOString(),
    submittedBy: SubmittedBy,
  };

  const Survey4Payload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.S4,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC4,
    sectionD: appState.sectionD4,
    submittedAt: new Date().toISOString(),
    submittedBy: SubmittedBy,
  };

  const Survey5Payload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.S5,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC5,
    sectionD: appState.sectionD5,
    submittedAt: new Date().toISOString(),
    submittedBy: SubmittedBy,
  };

  const Survey6Payload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.S6,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC6,
    sectionD: appState.sectionD6,
    submittedAt: new Date().toISOString(),
    submittedBy: SubmittedBy,
  };

  const Survey7Payload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.S7,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC7,
    sectionD: appState.sectionD7,
    submittedAt: new Date().toISOString(),
    submittedBy: SubmittedBy,
  };

  const goToHome = () => navigation.popToTop();
  const clearState = () => dispatch(clearData());

  const submitSurveyToServer = async (
    payload: ISurveyPayload
  ): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await createSurvey({
        ...payload,
        token: user.token,
      });
      // console.log(response.data);
      if (response.status === 201) return true;
      return false;
    } catch (error: any) {
      const errorResponse = handleAxiosError(error);
      showErrorToast(errorResponse.message);
      console.warn(errorResponse);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const submitOnline = async () => {
    let isSubmitted = false;
    if (!isSurvey1Empty) {
      isSubmitted = await submitSurveyToServer(Survey1Payload);
    }
    if (!isSurvey2Empty) {
      isSubmitted = await submitSurveyToServer(Survey2Payload);
    }
    if (!isSurvey3Empty) {
      isSubmitted = await submitSurveyToServer(Survey3Payload);
    }
    if (!isSurvey4Empty) {
      isSubmitted = await submitSurveyToServer(Survey4Payload);
    }
    if (!isSurvey5Empty) {
      isSubmitted = await submitSurveyToServer(Survey5Payload);
    }
    if (!isSurvey6Empty) {
      isSubmitted = await submitSurveyToServer(Survey6Payload);
    }
    if (!isSurvey7Empty) {
      isSubmitted = await submitSurveyToServer(Survey7Payload);
    }
    if (isSubmitted) {
      showSuccessToast('Survey submitted online successfully');
      clearState();
      goToHome();
    }
  };

  const storePayloadInOfflineStorage = async (payload: ISurveyPayload) => {
    setLoading(true);
    try {
      return await appendData<ISurveyPayload>('surveys', payload);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  const submitOffline = async () => {
    let isSubmitted = false;
    if (!isSurvey1Empty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(Survey1Payload)) || false;
    }
    if (!isSurvey2Empty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(Survey2Payload)) || false;
    }
    if (!isSurvey3Empty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(Survey3Payload)) || false;
    }
    if (!isSurvey4Empty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(Survey4Payload)) || false;
    }
    if (!isSurvey5Empty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(Survey5Payload)) || false;
    }
    if (!isSurvey6Empty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(Survey6Payload)) || false;
    }
    if (!isSurvey7Empty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(Survey7Payload)) || false;
    }
    if (isSubmitted) {
      showSuccessToast('Survey submitted offline successfully');
      clearState();
      goToHome();
    }
  };
  return (
    <Container containerStyle={styles.rootContentContainer}>
      <Text style={styles.title}>Survey Completed</Text>
      <Lottie
        source={CompletedAnimation}
        autoPlay
        loop={true}
        style={styles.animation}
        ref={animationRef}
        autoSize
      />
      <Button
        buttonStyle={styles.button}
        title={isInternetReachable ? 'Submit Online' : 'Submit Offline'}
        onPress={isInternetReachable ? submitOnline : submitOffline}
        isLoading={loading}
      />
    </Container>
  );
};

export default SurveyCompletedScreen;

const styles = StyleSheet.create({
  rootContentContainer: {
    padding: 10,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginTop: 10,
  },
  animation: {
    marginTop: 20,
    width: 200,
    aspectRatio: 1,
    alignSelf: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
  },
});
