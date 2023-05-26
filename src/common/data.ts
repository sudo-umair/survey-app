import { IQuestion } from '@interfaces/common';

export enum SURVEY_COMPONENTS {
  A = 'High Efficiency irrigation system',
  B = 'Kitchen Gardening',
}

const districtsInSindh = [
  'Karachi Central',
  'Karachi East',
  'Karachi South',
  'Karachi West',
  'Karachi Malir',
  'Karachi Korangi',
  'Hyderabad',
  'Sukkur',
  'Larkana',
  'Mirpurkhas',
  'Shaheed Benazirabad',
  'Jacobabad',
  'Ghotki',
  'Dadu',
  'Jamshoro',
  'Thatta',
  'Badin',
  'Naushahro Feroze',
  'Sanghar',
  'Umerkot',
  'Matiari',
  'Tando Allahyar',
  'Tando Muhammad Khan',
  'Kambar Shahdadkot',
  'Kashmore',
  'Shikarpur',
  'Tharparkar',
  'Sujawal',
  'Khairpur',
  'Naushehro Feroze',
];

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
      'I have read the informed consent and Confidentiality Form to the respondent and he/she has indicated his/her understanding.\nEnter Interviewer’s name here:',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'A4',
    question: 'Date of interview: (Day-Month-Year)',
    answer: new Date().toISOString(),
    questionType: 'date',
  },
  {
    questionId: 'A5',
    question: 'Start time of interview: (AM/PM)',
    answer: new Date().toISOString(),
    questionType: 'time',
  },
];

export const SECTION_B_QUESTIONS: IQuestion[] = [
  {
    questionId: 'B1',
    question: 'District',
    options: districtsInSindh.sort(),
    answer: districtsInSindh.sort()[0],
    questionType: 'picker',
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
    maxLength: 2,
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
    question: 'Number of Male HH members currently earning?',
    answer: '',
    questionType: 'number',
    keyboardType: 'numeric',
  },
  {
    questionId: 'B14b',
    question: 'Number of Female HH members currently earning?',
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

export const SECTION_C1_QUESTIONS: IQuestion[] = [
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
    options: ['Canal irrigation', 'Barani/Rainfed', 'Other (Specify)'],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'C4',
    question: 'Did the canal irrigation system deteriorate?',
    options: ['Yes', 'No', 'Somewhat'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C5',
    question: 'Type of HEIS installed',
    options: [
      'Drip irrigation',
      'Sprinkler irrigation',
      'Pivot irrigation',
      'Rain Gun irrigation',
      'Landscape irrigation',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'radio-text',
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
    question: 'Land size on which the intervention made? sq. mtr.',
    answer: '',
    questionType: 'text',
    keyboardType: 'numeric',
  },
  {
    questionId: 'C8',
    question: 'Is there any improvement in water conveyance efficiency?',
    options: ['Increased greatly', 'Slight increase', 'Not at all'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C9',
    question: 'How was the quality of HEIS?',
    options: ['Best', 'Very good', 'Good', 'Average', 'Below Average'],
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
    question: 'Share of farmer in installation of HEIS (in %)',
    answer: '',
    questionType: 'text',
    keyboardType: 'numeric',
    maxLength: 3,
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
    options: ['Yes', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C14',
    question: 'Was the HEIS land shared with others?',
    answer: '',
    options: ['Yes', 'No'],
    questionType: 'radio',
  },
  {
    questionId: 'C15',
    question: 'Does the HEIS contribute in your income? If yes, then how much?',
    answer: '',
    keyboardType: 'numeric',
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

export const SECTION_D1_QUESTIONS: IQuestion[] = [
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

export const SECTION_C2_QUESTIONS: IQuestion[] = [
  {
    questionId: 'C1',
    question: 'Why do you think to go for KG?',
    options: [
      'I like agriculture',
      'Due to family circumstances',
      'I was convinced by the family for KG',
      'I was convinced by project staff',
      'Other (specify)',
    ],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'C2',
    question: 'Did you receive support from SIAPEP project?',
    options: ['Yes', 'No', "Don't know"],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C3',
    question: 'Have you received these items? (Multiple choice, if applicable)',
    options: [
      'Low-cost drip kit-one set',
      'Seeds/seedlings/samplings for 6 seasons',
      'Micro and macro fertilizers for seasons',
      'Toolkit',
      'Training of farmers for 3 seasons during one year time',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'checkbox-text',
  },
  {
    questionId: 'C4',
    question: 'For how long did you manage the KG?',
    options: [
      'More than 1 year',
      'One year',
      'Six months',
      'Three months',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'C5',
    question: 'How did you manage water supply for KG?',
    options: ['Own source', 'Shared source', 'Other (Specify)'],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'C6',
    question: 'How was the quality of these items?',
    options: ['Best', 'Very good', 'Good', 'Average', 'Below Average'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C7',
    question: 'Are you a member of the watercourse association?',
    options: ['Yes', 'No', "Don't know"],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C8',
    question: 'Land size on which intervention made',
    options: ['20 X 20 ft.', 'Bigger than above size', 'Other (Specify)'],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'C9',
    question: 'Do you own the land of KG?',
    options: ['Yes', 'No', "Don't know"],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C10',
    question: 'Who cared for KG?',
    options: [
      'Myself',
      'Husband',
      'Father',
      'Family members',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'radio-text',
  },
  {
    questionId: 'C11',
    question: 'Was the KG land shared with others?',
    options: ['Yes', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C12',
    question: 'Vegetables under kitchen Garden',
    options: [
      'Potato',
      'Onion',
      'Spinach',
      'Coordinator',
      'Cabbage',
      'Chili',
      'Okra',
      'Turaee',
      'Baby pumpkin',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'checkbox-text',
  },
  {
    questionId: 'C13',
    question: 'Fruits under kitchen Garden',
    options: [
      'Mango',
      'Guava',
      'Lemon',
      'Melon',
      'Watermelon',
      'Kino',
      'Banana',
      'Jaman',
      'Pomegranate',
      'Other (Specify)',
    ],
    answer: '',
    questionType: 'checkbox-text',
  },
  {
    questionId: 'C14',
    question: 'Do you sell the products in the market?',
    options: ['Yes', 'No'],
    answer: 'No',
    questionType: 'radio',
  },
  {
    questionId: 'C14a',
    question: 'If yes, how much do you earn?',
    answer: '',
    keyboardType: 'numeric',
    questionType: 'text',
  },
  {
    questionId: 'C15',
    question: 'Does this contribute to your income? ',
    options: ['Yes', 'No'],
    answer: 'No',
    questionType: 'radio',
  },
  {
    questionId: 'C15a',
    question: 'If yes, then how much?',
    answer: '',
    keyboardType: 'numeric',
    questionType: 'text',
  },
  {
    questionId: 'C16',
    question: 'Has this improved the health of your family members?',
    options: ['Yes', 'No', "Don't know"],
    answer: 'Yes',
    questionType: 'radio',
  },
  {
    questionId: 'C17',
    question: 'The installation of KG kits was completed by the company?',
    options: ['Yes', 'No', "Don't know"],
    answer: 'No',
    questionType: 'radio',
  },
  {
    questionId: 'C17a',
    question: 'Name of the company?',
    answer: 'None',
    questionType: 'text',
  },
  {
    questionId: 'C18',
    question: 'Did you receive agronomical training?',
    options: ['Yes', 'No', "Don't know"],
    answer: 'Yes',
    questionType: 'radio',
  },
];

export const SECTION_D2_QUESTIONS: IQuestion[] = [
  {
    questionId: 'D1',
    question:
      'Did this project contribute to the promotion of your leadership skills?',
    options: [
      'Strongly agree',
      'Agree',
      'Neutral',
      'Disagree',
      'Strongly disagree',
    ],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D2',
    question:
      'Did this project enhance your ability to solve financial problems?',
    options: [
      'Strongly agree',
      'Agree',
      'Neutral',
      'Disagree',
      'Strongly disagree',
    ],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D3',
    question:
      'Did this project play a role in the development of problem-solving skills?',
    options: ['Yes', 'No', 'Somehow', "Don't know"],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D4',
    question: 'Are you planning to continue KG?',
    options: ['Yes', 'No'],
    answer: 'Yes',
    questionType: 'radio',
  },
  {
    questionId: 'D4a',
    question: 'If No, why?',
    answer: '',
    questionType: 'text',
  },
  {
    questionId: 'D5',
    question:
      'What are your major suggestions for the project to improve the quality of support for KG?',
    options: [],
    answer: '',
    questionType: 'text',
  },
];
