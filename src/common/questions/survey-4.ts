import { IQuestion } from '@interfaces/common';

export const SECTION_C4_QUESTIONS: IQuestion[] = [
  {
    questionId: 'C1',
    question: 'Did you receive your PLL equipment on time as planned?',
    options: ['Yes, on time', 'Yes, with acceptable delay', 'After long delay'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C2',
    question:
      'Was your PLL driver given adequate training on the use of the equipment?',
    options: ['Yes, adequate', 'Yes, not adequate', 'None'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C3',
    question:
      'Do you use your PLL equipment for agriculture and/or non-agriculture purpose only?',
    options: [
      'Yes, only agriculture',
      'Agriculture and non-agri',
      'Non-agriculture only',
    ],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C4',
    question: 'Do you use your PLL equipment for agriculture purposes only?',
    options: ['Yes, own land only', 'Own land and renting', 'Renting only'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C5',
    question:
      'How many days in a year does your PLL equipment remain in operation?',
    answer: '',
    questionType: 'number',
    keyboardType: 'decimal-pad',
    maxLength: 3,
  },
  {
    questionId: 'C6',
    question:
      'How much acreage in a year, on average, is treated by your equipment?',
    answer: '',
    questionType: 'number',
    keyboardType: 'decimal-pad',
  },
  {
    questionId: 'C7',
    question: 'What is the extent of demand for PLL equipment in your area?',
    options: ['High', 'Moderate', 'Low'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C8',
    question: 'Are you a farmer or a service provider?',
    options: ['A farmer', 'A service provider', 'Farmer & service provider'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C9',
    question: 'How frequently do you use PLL equipment on your field?',
    options: ['After one year', 'After two years', 'After three years'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D1',
    question:
      'Are the initial costs of PLL equipment reasonable and justifiable?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D2',
    question: 'Were your PLL equipment as per design and plan?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D3',
    question:
      'Were you allowed to choose from SSCs to get PLL equipment at a competitive price and make of your choice?',
    options: ['Yes', 'With limited freedom', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D4',
    question: 'Do you think the O&M cost of the PLL equipment is reasonable?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E1',
    question: 'Is there a need for PLL equipment for your fields?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E2',
    question:
      'Does the provision of PLL equipment align with the needs and priorities of farming in your area?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E3',
    question:
      'Do you think the use of PLL equipment is crucial for water saving?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E4',
    question:
      'Do you think the use of PLL equipment is important for irrigation time saving?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E5',
    question:
      'Do you think the use of PLL equipment causes an increase in the efficiency of agriculture inputs and uniform seed germination?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F1',
    question: 'How would you rate the durability of the PLL equipment?',
    options: ['Good', 'Average', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F2',
    question:
      'Are there dependable facilities in place for the maintenance and repair of the PLL equipment?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F3',
    question:
      'Do you think the demand for PLL equipment will increase over time?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F4',
    question:
      'Do you think after-sale services are being provided by the SCCs when required?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F5',
    question: 'Do you think spares are available at affordable prices?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
];

export const SECTION_D4_QUESTIONS: IQuestion[] = [
  {
    questionId: 'G1',
    question: 'Has PLL equipment contributed to water saving?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G2',
    question:
      'Have you observed an increase in the efficiency of agriculture inputs since the use of PLL equipment?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G3',
    question:
      'Have you observed a reduction in irrigation time since the use of PLL equipment?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G4',
    question:
      'Have you observed more uniform seed germination since the use of PLL equipment?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G5',
    question:
      'Is there any contribution of PLL equipment to your farming income?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G6',
    question:
      'Have you observed any improvements in crop yields since the use of PLL equipment?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H1',
    question:
      'Did the provision of PLL equipment align with other agricultural development programs or policies in the area?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H2',
    question:
      'Do you think the use of PLL equipment supplements other agronomic practices for better yields?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H3',
    question:
      'Do you think the use of PLL equipment complements watercourse lining for saving water losses?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
];
