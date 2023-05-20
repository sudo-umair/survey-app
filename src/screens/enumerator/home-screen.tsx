import { StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import type { IEnumeratorHomeScreenProps } from '@interfaces/screens';
import Container from '@components/ui/container';
import { EnumeratorScreens } from '@common/screens';
import { COLORS } from '@common/colors';
import SurveyComponent from '@components/enumerator/home-screen/survey-component';
import Button from '@components/ui/button';
import { SURVEY_COMPONENTS } from '@common/data';

const HomeScreen = ({ navigation, route }: IEnumeratorHomeScreenProps) => {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  const onPress = (key: string) => {
    if (selectedComponents.includes(key)) {
      setSelectedComponents(selectedComponents.filter((item) => item !== key));
    } else {
      setSelectedComponents((prev) => [...prev, key]);
    }
  };

  const onProceed = () => {
    console.log('selectedComponents', selectedComponents.sort());
  };

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Select Component</Text>
      <SurveyComponent
        title='A'
        onPress={() => onPress(SURVEY_COMPONENTS.A)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.A)}
      />
      <SurveyComponent
        title='B'
        onPress={() => onPress(SURVEY_COMPONENTS.B)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.B)}
      />
      <SurveyComponent
        title='C'
        onPress={() => onPress(SURVEY_COMPONENTS.C)}
        isSelected={selectedComponents.includes(SURVEY_COMPONENTS.C)}
      />
      <Button
        title='Proceed'
        onPress={onProceed}
        buttonStyle={styles.button}
        buttonTextStyle={{ color: COLORS.WHITE }}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
});
