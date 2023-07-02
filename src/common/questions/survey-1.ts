import { IQuestion } from '@interfaces/common';
import { districtsInSindh } from '@common/data';

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
      'I have read the informed consent and Confidentiality Form to the respondent, and he/she has offered his/her consent.\nEnter Interviewer’s name here:',
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
    question: 'Name of Respondent',
    questionType: 'text',
    answer: '',
  },
  {
    questionId: 'B2',
    question: 'CNIC #',
    questionType: 'number',
    keyboardType: 'numeric',
    subtext: '12345-1234567-1',
    answer: '',
  },
  {
    questionId: 'B3',
    question: 'Location of the respondent on the watercourse',
    questionType: 'radio',
    options: ['Head', 'Middle', 'Tail'],
    answer: '',
  },
  {
    questionId: 'B4',
    question: 'Name of Watercourse, Distry/Minor, Main Canal',
    questionType: 'text',
    answer: '',
  },
  {
    questionId: 'B5',
    question: 'Mode of Lining',
    questionType: 'radio',
    options: ['Brick', 'PCPL'],
    answer: '',
  },
  {
    questionId: 'B6',
    question: 'Category of Lining',
    questionType: 'radio',
    options: [
      'Fresh 30%',
      'Additional 50%',
      'Rehabilitation of Damaged Watercourse',
    ],
    answer: '',
  },
  {
    questionId: 'B7',
    question: 'Name of Village/Goth',
    questionType: 'text',
    answer: '',
  },
  {
    questionId: 'B8',
    question: 'Home Address',
    questionType: 'text',
    answer: '',
  },
  {
    questionId: 'B9',
    question: 'Contact No.',
    questionType: 'number',
    keyboardType: 'decimal-pad',
    subtext: '0300-1234567',
    answer: '',
  },
  {
    questionId: 'B10',
    question: 'Taluka',
    questionType: 'text',
    answer: '',
  },
  {
    questionId: 'B11',
    question: 'District',
    options: districtsInSindh.sort(),
    questionType: 'picker',
    answer: districtsInSindh.sort()[0],
  },
  {
    questionId: 'B12',
    question: 'Gender',
    questionType: 'radio',
    options: ['Male', 'Female'],
    answer: '',
  },
  {
    questionId: 'B13',
    question: 'Status of House',
    questionType: 'radio',
    options: ['Own', 'Rented', 'Other (Specify)'],
    answer: '',
  },
  {
    questionId: 'B14a',
    question: 'Number of Male HH members currently earning',
    questionType: 'number',
    keyboardType: 'decimal-pad',
    answer: '',
  },
  {
    questionId: 'B14b',
    question: 'Number of Female HH members currently earning',
    questionType: 'number',
    keyboardType: 'decimal-pad',
    answer: '',
  },
  {
    questionId: 'B15',
    question: 'Source of Income of the HH',
    questionType: 'radio',
    options: [
      'Farming',
      'Govt. Service',
      'Private Job',
      'Own Business',
      'Daily Wages',
      'Other (Specify)',
    ],
    answer: '',
  },
  {
    questionId: 'B16',
    question: 'Total Monthly Income (PKR)',
    questionType: 'radio',
    options: [
      'Up to 20,000',
      '20,001 - 30,000',
      '30,001 - 40,000',
      '40,001 - 50,000',
      'More than 50,000',
    ],
    answer: '',
  },
];

export const SECTION_C1_QUESTIONS: IQuestion[] = [
  {
    questionId: 'C1',
    question: 'Do you think watercourse has been lined up to 30% / 50%?',
    options: ['Yes', 'Partially', 'Not sure'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C2',
    question:
      'Do you think all shareholders (male as well as female) are benefitting from the intervention equitably?',
    subtext:
      "The enumerator may explain the 'equitably' means according to the due share.",
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C3',
    question:
      'Do you think water losses are reduced due to the watercourse lining?',
    options: ['Yes, significantly.', 'Yes, to some extent.', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C4',
    question:
      'Do you think watercourse association was formed and was functional during the watercourse construction?',
    subtext:
      "The enumerator may explain that 'functional watercourse association means it is formed, registered, maintains a bank account, looks after rehabilitation of the watercourse, etc.",
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D1',
    question:
      "Do you think the resources (funds) were spent through beneficiaries' participation?",
    subtext:
      "The enumerator may further explain that 'beneficiaries' participation' means the involvement of WCA which is representative of the shareholders.",
    options: ['Yes, always.', 'Yes, not always.', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D2',
    question:
      'Do you think funds were strictly used for watercourse improvement and its related activities?',
    subtext:
      "The enumerator may further explain 'related activities' means provision of pacca naccas, checks, culverts, washing areas, animal bathing bays, etc.",
    options: ['Yes, always.', 'Yes, not always.', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D3',
    question:
      'Do you think design of the watercourse was most economical and best possible given the situation?',
    subtext:
      "The enumerator may further explain what 'most economical design' means.",
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'D4',
    question:
      'Do you think the civil works on the watercourse were strictly monitored at all stages against wastage and misuse?',
    subtext:
      'The enumerator may explain the role of WCA, PIU field teams and the consultant in this regard.',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'C5',
    question:
      'Were the lining of watercourse activities carried out according to the specified design and plans?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E1',
    question:
      'Do you think watercourse lining is an important need of the farmers?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E2',
    question:
      'Do you think watercourse lining and other related activities were done where they were most required?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E3',
    question:
      'Do you think watercourse lining activities were scheduled in such a way that they least affected your farming activities?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'E4',
    question: 'Do you think further lining of your watercourse is required?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F1',
    question: 'How would you rate the durability of the watercourse lining?',
    options: ['Good', 'Average', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F2',
    question:
      'Do you think WCA is still functional after completion of the watercourse?',
    subtext: 'The enumerator may explain what WCA functional means.',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F3',
    question:
      'Do you think the WCA has arranged adequate resources or made required arrangements for maintenance of the watercourse?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F4',
    question:
      'Do you think shareholders always participate voluntarily in the maintenance activities of the watercourse when asked?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'F5',
    question:
      'Do you think the watercourse is being adequately maintained since its completion?',
    options: ['Yes', 'Partially', 'No'],
    answer: '',
    questionType: 'radio',
  },
];

export const SECTION_D1_QUESTIONS: IQuestion[] = [
  {
    questionId: 'G1',
    question: 'Do you think the watercourse lining has increased cropped area?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G2',
    question:
      'Do you think watercourse lining has contributed towards increase in your agriculture income?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G3',
    question: 'Do you think watercourse lining has increased labor employment?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G4',
    question: 'Is there any impact of watercourse lining on crop production?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G5',
    question:
      'Have you observed any improvements in crop yields since the construction of watercourse lining?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G6',
    question:
      'Have you observed any improvements in land use and cropping intensity since the construction of watercourse lining?',
    options: ['Substantial', 'Moderate', 'Poor'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G7',
    question:
      'Do you think the neighboring farmers are motivated for lining of watercourse?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'G8',
    question: 'Has the watercourse lining reduced the irrigation time?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H1',
    question:
      'Do you think the watercourse lining is compatible with crop farming activities?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H2',
    question:
      'Did the improvement of watercourses align with other agricultural development programs or policies in the area?',
    subtext:
      'The enumerator may mention some agriculture development activities and policies of the government to elaborate the point.',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
  {
    questionId: 'H3',
    question:
      'Do you think agriculture in your village benefited due to the watercourse lining?',
    options: ['Yes', 'Not sure', 'No'],
    answer: '',
    questionType: 'radio',
  },
];
