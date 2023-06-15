import { districtsInSindh } from '@common/data';
import { IQuestion } from '@interfaces/common';

export const SECTION_C2_QUESTIONS: IQuestion[] = [
  {
    questionId: 'C1',
    question: 'Do you think HEIS is an effective component?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C2',
    question:
      'Were the HEIS activities carried out according to the specified design and plans?',
    options: ['Yes', 'No', 'Partially'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C3',
    question:
      'Have you observed any improvements in agricultural productivity since the installation of HEIS?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C4',
    question:
      'Have you observed any improvements in land use and cropping intensity since the installation of HEIS?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D1',
    question: 'Do you believe that HEIS helps in water saving?',
    options: ['Yes', 'No', 'Don’t know'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D2',
    question: 'What is the level of water saving after installation of HEIS?',
    answer: '',
    questionType: 'radio',
    options: ['Substantial', 'Moderate', 'Poor'],
  },
  {
    questionId: 'D3',
    question: 'Has the HEIS reduced irrigation cost?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D4',
    question: 'Has the HEIS reduced irrigation time?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D5',
    question: 'Does this project contribute to your skills development?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D6',
    question:
      'Did this project enhance your ability to solve financial problems?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D7',
    question:
      'Do you think your financial resources have been efficiently utilized?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E1',
    question: 'Do you think HEIS is an important need of the farmers?',
    options: ['Yes', 'No', 'Partially'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E2',
    question: 'Do you think HEIS has increased farm area?',
    options: ['Yes', 'No', 'Partially'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E3',
    question: 'Do you think HEIS has minimized labor cost for watering?',
    options: ['Yes', 'No', 'Partially'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F1',
    question: 'How would you rate the durability of the HEIS unit?',
    options: ['Good', 'Average', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F2',
    question: 'Do you think the HEIS is sustainable for a longer period?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F3',
    question: 'Do you think HEIS has positive effects on the environment?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F4',
    question: 'Do you think operating HEIS is farmer-friendly?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F5',
    question: 'Are you planning to continue HEIS?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F6',
    question: 'In your opinion, why do people not go for HEIS?',
    options: [
      'Unawareness',
      'High Initial Investment',
      'High Operating Cost',
      'Lack of Skill',
      'Others (Specify)',
    ],
    answer: '',
    questionType: 'checkbox-text',
  },
  {
    questionId: 'F7',
    question:
      'What are your major suggestions for the project to improve the quality of support for KG?',
    answer: '',
    questionType: 'text-area',
    maxLength: 500,
  },
];

export const SECTION_D2_QUESTIONS: IQuestion[] = [
  {
    questionId: 'G1',
    question: 'Do you think the HEIS has increased cropping area?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G2',
    question:
      'Is there any contribution of the HEIS in your agricultural income?',
    options: ['Yes', 'No', 'Don’t know'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G3',
    question:
      'Is there any contribution of the HEIS in increasing labor employment?',
    options: ['Yes', 'No', 'Don’t know'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G4',
    question: 'Is there any impact of HEIS on crop production?',
    options: ['Yes', 'No', 'Don’t know'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G5',
    question:
      'Either in your opinion, are neighboring farmers motivated to install HEIS?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G6',
    question: 'Either in your opinion, does HEIS reduce water losses?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G7',
    question: 'Either in your opinion, does HEIS increase energy cost?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H1',
    question:
      'Do you think there is a need for installing additional HEIS in your area?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H2',
    question: 'Do you think the HEIS is compatible with row crop farming?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H3',
    question: 'Do you think the HEIS is compatible with orchard?',
    options: ['Yes', 'No', 'Not Sure'],
    answer: '',
    questionType: 'radio',
  },
];
