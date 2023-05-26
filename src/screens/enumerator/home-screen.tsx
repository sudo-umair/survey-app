import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import type { IEnumeratorHomeScreenProps } from '@interfaces/screens';
import Container from '@components/ui/container';
import { EnumeratorScreens } from '@common/screens';
import { COLORS } from '@common/colors';
import SurveyComponent from '@components/enumerator/survey-component';
import Button from '@components/ui/button';
import { SURVEY_COMPONENTS } from '@common/data';
import { FONT_SIZES } from '@common/fonts';
import { useAppDispatch } from '@redux/store';
import { setSurveyComponents } from '@redux/app-state-reducer';

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

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Select Components</Text>
      <SurveyComponent
        title={SURVEY_COMPONENTS.A}
        onPress={() => onPress(SURVEY_COMPONENTS.A)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.A)}
      />
      <SurveyComponent
        title={SURVEY_COMPONENTS.B}
        onPress={() => onPress(SURVEY_COMPONENTS.B)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.B)}
      />

      <View style={styles.buttonContainer}>
        <Button title='Sync Surveys' onPress={goToSyncSurveys} />
        <Button
          title='Proceed'
          onPress={onProceed}
          disabled={selectedComponents.length === 0}
        />
      </View>
    </Container>
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
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
});
