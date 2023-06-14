import { SURVEY_COMPONENTS } from '@common/data';
import { EnumeratorScreens } from '@common/screens';
import { IEnumeratorStackParamList } from '@interfaces/navigation';
import { NavigationProp } from '@react-navigation/native';

export const handleSurveyNavigation = (
  navigation: NavigationProp<IEnumeratorStackParamList>,
  selectedSurveyComponents: SURVEY_COMPONENTS[]
) => {
  if (selectedSurveyComponents.includes(SURVEY_COMPONENTS.S1)) {
    navigation.navigate(EnumeratorScreens.SectionC1);
  } else if (selectedSurveyComponents.includes(SURVEY_COMPONENTS.S2)) {
    navigation.navigate(EnumeratorScreens.SectionC2);
  } else if (selectedSurveyComponents.includes(SURVEY_COMPONENTS.S3)) {
    navigation.navigate(EnumeratorScreens.SectionC3);
  } else if (selectedSurveyComponents.includes(SURVEY_COMPONENTS.S4)) {
    navigation.navigate(EnumeratorScreens.SectionC4);
  } else if (selectedSurveyComponents.includes(SURVEY_COMPONENTS.S5)) {
    navigation.navigate(EnumeratorScreens.SectionC5);
  } else if (selectedSurveyComponents.includes(SURVEY_COMPONENTS.S6)) {
    navigation.navigate(EnumeratorScreens.SectionC6);
  } else if (selectedSurveyComponents.includes(SURVEY_COMPONENTS.S7)) {
    navigation.navigate(EnumeratorScreens.SectionC7);
  } else {
    navigation.navigate(EnumeratorScreens.SurveyCompleted);
  }
};
