import { AppState, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo, useRef } from 'react';
import Container from '@components/ui/container';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import Lottie from 'lottie-react-native';
import CompletedAnimation from '@assets/animations/completed.json';
import { useAppSelector } from '@redux/store';
import Button from '@components/ui/button';
import { useNetInfo } from '@react-native-community/netinfo';
import { SURVEY_COMPONENTS } from '@common/data';
import { appendData, getData, storeData } from '@helpers/async-storage';
import { ISubmittedBy, ISurveyPayload } from '@interfaces/common';
import { IEnumeratorSurveyCompletedScreenProps } from '@interfaces/screens';

const SurveyCompletedScreen = ({
  navigation,
  route,
}: IEnumeratorSurveyCompletedScreenProps) => {
  const animationRef = useRef<Lottie>(null);

  const rootState = useAppSelector((state) => state);
  const {
    appState,
    user: { user },
  } = rootState;

  const { isInternetReachable } = useNetInfo();

  useEffect(() => {
    async function prepare() {
      const response = await getData('surveys');
      console.log(response);
    }
    prepare();
  }, []);

  const SubmittedBy: ISubmittedBy = {
    ...user,
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

  const submitOnline = () => {};

  const storePayloadInOfflineStorage = async (payload: ISurveyPayload) => {
    try {
      const response = await appendData<ISurveyPayload>('surveys', payload);
      console.log(response);
    } catch (error) {
      console.warn(error);
    }
  };

  const submitOffline = async () => {
    if (!isSurveyAEmpty) {
      await storePayloadInOfflineStorage(SurveyAPayload);
    }
    if (!isSurveyBEmpty) {
      await storePayloadInOfflineStorage(SurveyBPayload);
    }
    goToHome();
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
