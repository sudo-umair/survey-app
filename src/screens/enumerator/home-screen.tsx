import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import type { IEnumeratorHomeScreenProps } from '@interfaces/screens';
import ScrollContainer from '@components/ui/scroll-container';
import { EnumeratorScreens } from '@common/screens';
import { COLORS } from '@common/colors';
import SurveyComponent from '@components/enumerator/survey-component';
import Button from '@components/ui/button';
import { SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import { useAppDispatch } from '@redux/store';
import { setSurveyComponents } from '@redux/app-state-reducer';
import { useFocusEffect } from '@react-navigation/native';
import { removeUser } from '@redux/user-reducer';

const HomeScreen = ({ navigation, route }: IEnumeratorHomeScreenProps) => {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  const onPress = (key: string) => {
    if (selectedComponents.includes(key)) {
      setSelectedComponents(selectedComponents.filter((item) => item !== key));
    } else {
      setSelectedComponents((prev) => [...prev, key]);
    }
  };

  const goToSyncSurveys = () =>
    navigation.navigate(EnumeratorScreens.SyncSurveys);

  const onProceed = () => {
    console.log('selectedComponents', selectedComponents.sort());
    dispatch(setSurveyComponents(selectedComponents.sort()));
    navigation.navigate(EnumeratorScreens.SectionA);
  };

  const onLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: logout,
        style: 'destructive',
      },
    ]);
  };

  const logout = () => {
    dispatch(removeUser());
  };

  useFocusEffect(
    useCallback(() => {
      setSelectedComponents([]);
    }, [])
  );

  return (
    <ScrollContainer containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Select Components</Text>
      <SurveyComponent
        title={SURVEY_COMPONENTS.S1}
        onPress={() => onPress(SURVEY_COMPONENTS.S1)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.S1)}
      />
      <SurveyComponent
        title={SURVEY_COMPONENTS.S2}
        onPress={() => onPress(SURVEY_COMPONENTS.S2)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.S2)}
      />
      <SurveyComponent
        title={SURVEY_COMPONENTS.S3}
        onPress={() => onPress(SURVEY_COMPONENTS.S3)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.S3)}
      />
      <SurveyComponent
        title={SURVEY_COMPONENTS.S4}
        onPress={() => onPress(SURVEY_COMPONENTS.S4)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.S4)}
      />
      <SurveyComponent
        title={SURVEY_COMPONENTS.S5}
        onPress={() => onPress(SURVEY_COMPONENTS.S5)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.S5)}
      />
      <SurveyComponent
        title={SURVEY_COMPONENTS.S6}
        onPress={() => onPress(SURVEY_COMPONENTS.S6)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.S6)}
      />
      <SurveyComponent
        title={SURVEY_COMPONENTS.S7}
        onPress={() => onPress(SURVEY_COMPONENTS.S7)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.S7)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Proceed'
          onPress={onProceed}
          disabled={selectedComponents.length === 0}
        />
        <View style={styles.buttonsRow}>
          <Button
            buttonStyle={styles.button}
            title='Logout'
            onPress={onLogout}
          />
          <Button
            buttonStyle={styles.button}
            title='Sync Surveys'
            onPress={goToSyncSurveys}
          />
        </View>
      </View>
    </ScrollContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 10,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 15,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 15,
  },
});
