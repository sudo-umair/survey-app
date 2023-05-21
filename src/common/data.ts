import { IQuestion } from '@interfaces/common';

export enum SURVEY_COMPONENTS {
  A = 'A',
  B = 'B',
  C = 'C',
}

export const SECTION_A_QUESTIONS: IQuestion[] = [
  {
    questionId: 'A1',
    question:
      'Do you have any questions you would like to discuss at this point?',
    answer: 'Yes',
    questionType: 'radio',
    options: ['Yes', 'No', 'Don’t know'],
  },
  {
    questionId: 'A2',
    question: 'what are the questions?',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'A3',
    question:
      'I have read the informed consent and Confidentiality Form to the respondent and he/she has indicated his/her understanding',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'A4',
    question: 'Date of interview: (Day-Month-Year)',
    answer: '',
    questionType: 'date',
  },
  {
    questionId: 'A5',
    question: 'Start time of interview: (AM/PM)',
    answer: '',
    questionType: 'time',
  },
];

export const SECTION_B_QUESTIONS: IQuestion[] = [
  {
    questionId: 'B1',
    question: 'District',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'B2',
    question: 'Taluka',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'B3',
    question: 'Union Council',

    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'B4',
    question: 'Name of Village/Goth',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'B5',
    question: 'Home Address',
    answer: '',
    questionType: 'text-area',
  },
  {
    questionId: 'B6',
    question: 'Contact No (Mobile/Landline)',
    answer: '',
    questionType: 'number',
    keyboardType: 'numeric',
  },
  {
    questionId: 'B7',
    question: 'Name of Respondent/Beneficiary',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'B8',
    question: 'Gender',
    options: ['Male', 'Female', 'Other (Specify)'],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'B9',
    question: 'Age (years)',

    answer: '',
    questionType: 'number',
    keyboardType: 'numeric',
  },
  {
    questionId: 'B10',
    question: 'Marital Status',
    options: ['Married', 'Single'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'B11',
    question: "Beneficiary's Category",
    options: [
      'Female Headed Household',
      'Landless Farmer',
      'Head of household is dependant',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'B12',
    question: 'Total Family size',
    answer: '',
    questionType: 'number',
    keyboardType: 'numeric',
  },
  {
    questionId: 'B12a',
    question: 'Male members',
    answer: '',
    questionType: 'number',
    keyboardType: 'numeric',
  },
  {
    questionId: 'B12b',
    question: 'Female members',
    answer: '',
    questionType: 'number',
    keyboardType: 'numeric',
  },
  {
    questionId: 'B13',
    question: 'Status of house',
    options: ['Own house', 'Rented', 'Other (Specify)'],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'B14a',
    question: 'Number of HH members currently earning: Male members',
    answer: '',
    questionType: 'number',
    keyboardType: 'numeric',
  },
  {
    questionId: 'B14b',
    question: 'Number of HH members currently earning: Female members',
    answer: '',
    questionType: 'number',
    keyboardType: 'numeric',
  },
  {
    questionId: 'B15',
    question: 'Source of income',
    options: [
      'Daily wages',
      'Agriculture',
      'Pvt. Job',
      'Govt. Job',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'B16',
    question: 'Total monthly Income',
    options: [
      '10,000 to 20,000',
      '20,000 to 30,000',
      '40,000 to 50,000',
      '50,000 to 60,000',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'radio-text',
    keyboardType: 'numeric',
  },
];

export const SECTION_C_QUESTIONS: IQuestion[] = [
  {
    questionId: 'C1',
    question: 'Do you know about HEIS?',
    options: ['Yes', 'No', 'Somehow'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C2',
    question: 'Did you receive HEIS from SIAPEP project?',
    options: ['Yes', 'No', "Don't know"],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C3',
    question: 'What was the source of irrigation before HEIS?',
    options: ['Canal irrigation', ' Barani/rainfed', 'Other (Specify)'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C4',
    question: 'Did the canal irrigation system deteriorate?',
    options: ['1. Yes', '2. No', '3. Somewhat'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C5',
    question: 'Type of HEIS installed',
    options: [
      '1. Drip irrigation',
      '2. Sprinkler irrigation',
      '3. Pivot irrigation',
      '4. Rain Gun irrigation',
      '5. Landscape irrigation',
      '6. Other (specify)',
    ],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C6',
    question: 'Agriculture land under HEIS?',
    options: ['Total land under HEIS', 'A part is under HEIS'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C7',
    question: 'Land size on which the intervention made?',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'C8',
    question: 'Is there any improvement in water conveyance efficiency?',
    options: ['1. Increased greatly', 'Slight increase', 'Not at all'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C9',
    question: 'How was the quality of HEIS?',
    options: ['Best', 'Very good', '3. Good', '4. Average', '5. Below Average'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C10',
    question: 'Are you a member of the watercourse association?',
    options: ['Yes', 'No', "Don't know"],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C11',
    question: 'Share of farmer in installation of HEIS',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'C12',
    question: 'Do you receive follow-up support services?',
    options: ['Yes', 'No', "Don't know"],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C13',
    question:
      'Have you received any training of maintenance, operating and troubleshooting?',
    options: ['1. Yes', '2. No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C14',
    question: 'Was the HEIS land shared with others',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'C15',
    question: 'Does the HEIS contribute in your income? If yes, then how much?',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'C16',
    question: 'From economic point of view, how sustainable is the HEIS?',
    answer: '',
    options: [
      'Low monetary cost irrigation',
      'Time saving',
      'Easy to manage',
      'Have positive impact on production',
      'Have negative impact on production',
      'Other (Specify)',
    ],
    questionType: 'radio-text',
  },
  {
    questionId: 'C17',
    question:
      'From environmental point of view, how sustainable is the practice of HEIS?',
    answer: '',
    options: [
      'Suitable in the local environment',
      'Environmentally friendly',
      'Not suitable in the local environment',
      'Other (Specify)',
    ],
    questionType: 'radio-text',
  },
];

export const SECTION_D_QUESTIONS: IQuestion[] = [
  {
    questionId: 'D1',
    question: 'The impact of HEIS on soil erosion',
    options: [
      'Decreased erosion',
      'Increased erosion',
      'No impact on erosion',
      'Not applicable',
    ],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D2',
    question: 'The impact of HEIS on soil depletion',
    options: [
      'Decreased depletion',
      'Increased depletion',
      'No impact on depletion',
      'Not applicable',
    ],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D3',
    question: 'The impact of HEIS on use of fertilizers',
    options: ['Decreased', 'Increased', 'No impact', 'Not applicable'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D4',
    question: 'The impact of HEIS on water conservation',
    options: [
      'Promoted water losses',
      'Promoted water conservation',
      'No impact on water conservation',
      'Not applicable',
    ],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D5',
    question: 'The HEIS is time efficient',
    options: [
      'Highly time efficient',
      'Highly time consuming',
      'No impact on time spent on irrigation',
      'Not applicable',
    ],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D6',
    question: 'Area under cultivation increase because of HEIS?',
    options: [
      'Increased substantially',
      'Decreased',
      'No impact on area cultivation',
      'Not applicable',
    ],
    answer: '',
    questionType: 'radio',
  },
];
