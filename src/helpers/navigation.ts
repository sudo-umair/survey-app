import { SURVEY_COMPONENTS } from '@common/data';
import { EnumeratorScreens } from '@common/screens';
import { IEnumeratorStackParamList } from '@interfaces/navigation';
import { NavigationProp } from '@react-navigation/native';

const handleNavigation = (
  navigation: NavigationProp<IEnumeratorStackParamList>,
  selectedSurveyComponent: SURVEY_COMPONENTS
) => {
  switch (selectedSurveyComponent) {
    case SURVEY_COMPONENTS.S1:
      navigation.navigate(EnumeratorScreens.SectionC1);
      break;
    case SURVEY_COMPONENTS.S2:
      navigation.navigate(EnumeratorScreens.SectionC2);
      break;
    case SURVEY_COMPONENTS.S3:
      navigation.navigate(EnumeratorScreens.SectionC3);
      break;
    case SURVEY_COMPONENTS.S4:
      navigation.navigate(EnumeratorScreens.SectionC4);
      break;
    case SURVEY_COMPONENTS.S5:
      navigation.navigate(EnumeratorScreens.SectionC5);
      break;
    case SURVEY_COMPONENTS.S6:
      navigation.navigate(EnumeratorScreens.SectionC6);
      break;
    case SURVEY_COMPONENTS.S7:
      navigation.navigate(EnumeratorScreens.SectionC7);
      break;
    default:
      break;
  }
};

export const handleNavigationToFirstSelectedSurvey = (
  navigation: NavigationProp<IEnumeratorStackParamList>,
  selectedSurveyComponents: SURVEY_COMPONENTS[]
) => {
  const firstSelectedSurvey = selectedSurveyComponents[0];
  handleNavigation(navigation, firstSelectedSurvey);
};

export const handleNavigationForOtherSurveys = (
  navigation: NavigationProp<IEnumeratorStackParamList>,
  selectedSurveyComponents: SURVEY_COMPONENTS[],
  currentSurveyComponent: SURVEY_COMPONENTS
) => {
  const currentSurveyComponentIndex = selectedSurveyComponents.indexOf(
    currentSurveyComponent
  );
  if (currentSurveyComponentIndex === selectedSurveyComponents.length - 1) {
    navigation.navigate(EnumeratorScreens.SurveyCompleted);
    return;
  }
  const nextSurveyComponent =
    selectedSurveyComponents[currentSurveyComponentIndex + 1];
  handleNavigation(navigation, nextSurveyComponent);
};
