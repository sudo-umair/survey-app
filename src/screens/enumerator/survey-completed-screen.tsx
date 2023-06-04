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

  const isSurveyAEmpty = useMemo(() => {
    return appState.sectionC1.length === 0 && appState.sectionD1.length === 0;
  }, [appState.sectionC1, appState.sectionD1]);

  const isSurveyBEmpty = useMemo(() => {
    return appState.sectionC2.length === 0 && appState.sectionD2.length === 0;
  }, [appState.sectionC2, appState.sectionD2]);

  const SurveyAPayload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.A,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC1,
    sectionD: appState.sectionD1,
    submittedAt: new Date().toISOString(),
    submittedBy: SubmittedBy,
  };

  const SurveyBPayload: ISurveyPayload = {
    surveyId: SURVEY_COMPONENTS.B,
    sectionA: appState.sectionA,
    sectionB: appState.sectionB,
    sectionC: appState.sectionC2,
    sectionD: appState.sectionD2,
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
    } catch (error) {
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
    if (!isSurveyAEmpty) {
      isSubmitted = await submitSurveyToServer(SurveyAPayload);
    }
    if (!isSurveyBEmpty) {
      isSubmitted = await submitSurveyToServer(SurveyBPayload);
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
    if (!isSurveyAEmpty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(SurveyAPayload)) || false;
    }
    if (!isSurveyBEmpty) {
      isSubmitted =
        (await storePayloadInOfflineStorage(SurveyBPayload)) || false;
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
