import { IQuestion } from "@interfaces/common";
import { districtsInSindh } from "@common/data";

export const SECTION_A_QUESTIONS: IQuestion[] = [
  {
    questionId: "A1",
    question:
      "Do you have any questions you would like to discuss at this point?",
    answer: "Yes",
    questionType: "radio",
    options: ["Yes", "No", "Don’t know"],
  },
  {
    questionId: "A2",
    question: "what are the questions?",
    answer: "",
    questionType: "text",
  },
  {
    questionId: "A3",
    question:
      "I have read the informed consent and Confidentiality Form to the respondent and he/she has indicated his/her understanding.\nEnter Interviewer’s name here:",
    answer: "",
    questionType: "text",
  },
  {
    questionId: "A4",
    question: "Date of interview: (Day-Month-Year)",
    answer: new Date().toISOString(),
    questionType: "date",
  },
  {
    questionId: "A5",
    question: "Start time of interview: (AM/PM)",
    answer: new Date().toISOString(),
    questionType: "time",
  },
];

// export const SECTION_B1_QUESTIONS: IQuestion[] = [
//   {
//     questionId: 'B1',
//     question: 'Name of Respondent',
//     answer: '',
//     questionType: 'text',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B2',
//     question: 'CNIC #',
//     answer: '',
//     questionType: 'text',
//     keyboardType: 'numeric',
//   },
//   {
//     questionId: 'B3',
//     question: 'Name of Watercourse, Distry/Minor, Main Canal',
//     answer: '',
//     questionType: 'text',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B4',
//     question: 'Mode of Lining',
//     options: ['Brick', 'PCPL'],
//     answer: '',
//     questionType: 'radio',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B5',
//     question: 'Category of Lining',
//     options: [
//       'Fresh 30%',
//       'Additional 50%',
//       'Rehabilitation of Damaged Watercourse',
//     ],
//     answer: '',
//     questionType: 'radio',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B6',
//     question: 'Name of Village/Goth',
//     answer: '',
//     questionType: 'text',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B7',
//     question: 'Home Address',
//     answer: '',
//     questionType: 'text-area',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B8',
//     question: 'Contact No.',
//     answer: '',
//     questionType: 'text',
//     keyboardType: 'numeric',
//   },
//   {
//     questionId: 'B9',
//     question: 'Taluka',
//     answer: '',
//     questionType: 'text',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B10',
//     question: 'District',
//     answer: '',
//     questionType: 'text',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B11',
//     question: 'Gender',
//     options: ['Male', 'Female'],
//     answer: '',
//     questionType: 'radio',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B12',
//     question: 'Status of House',
//     options: ['Own', 'Rented', 'Other (Specify)'],
//     answer: '',
//     questionType: 'radio-text',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B13',
//     question: 'Number of HH members currently earning',
//     answer: '',
//     questionType: 'number',
//     keyboardType: 'numeric',
//   },
//   {
//     questionId: 'B14',
//     question: 'Source of Income of the HH',
//     options: [
//       'Farming',
//       'Govt Service',
//       'Private Job',
//       'Own Business',
//       'Daily Wages',
//       'Other',
//     ],
//     answer: '',
//     questionType: 'checkbox-text',
//     keyboardType: 'default',
//   },
//   {
//     questionId: 'B15',
//     question: 'Total Monthly Income (PKR)',
//     options: [
//       '10,000 – 20,000',
//       '20,000 - 30,000',
//       '30,000 – 40,000',
//       '40,000 – 50,000',
//       'Other',
//     ],
//     answer: '',
//     questionType: 'radio-text',
//     keyboardType: 'default',
//   },
// ];

export const SECTION_B_QUESTIONS: IQuestion[] = [
  {
    questionId: "B1",
    question: "Name of Respondent",
    answer: "",
    questionType: "text",
    keyboardType: "default",
  },
  {
    questionId: "B2",
    question: "CNIC #",
    answer: "",
    questionType: "text",
    keyboardType: "numeric",
  },
  {
    questionId: "B3",
    question: "Name of Watercourse, Distry/Minor, Main Canal",
    answer: "",
    questionType: "text",
    keyboardType: "default",
  },
  {
    questionId: "B4",
    question: "Mode of Lining",
    options: ["Brick", "PCPL"],
    answer: "",
    questionType: "radio",
    keyboardType: "default",
  },
  {
    questionId: "B5",
    question: "Category of Lining",
    options: [
      "Fresh 30%",
      "Additional 50%",
      "Rehabilitation of Damaged Watercourse",
    ],
    answer: "",
    questionType: "radio",
    keyboardType: "default",
  },
  {
    questionId: "B6",
    question: "Name of Village/Goth",
    answer: "",
    questionType: "text",
    keyboardType: "default",
  },
  {
    questionId: "B7",
    question: "Home Address",
    answer: "",
    questionType: "text-area",
    keyboardType: "default",
  },
  {
    questionId: "B8",
    question: "Contact No.",
    answer: "",
    questionType: "text",
    keyboardType: "numeric",
    maxLength: 11,
  },
  {
    questionId: "B9",
    question: "Taluka",
    answer: "",
    questionType: "text",
    keyboardType: "default",
  },
  {
    questionId: "B10",
    question: "District",
    answer: districtsInSindh.sort()[0],
    questionType: "picker",
    options: districtsInSindh.sort(),
    keyboardType: "default",
  },
  {
    questionId: "B11",
    question: "Gender",
    options: ["Male", "Female"],
    answer: "",
    questionType: "radio",
    keyboardType: "default",
  },
  {
    questionId: "B12",
    question: "Status of House",
    options: ["Own", "Rented", "Other (Specify)"],
    answer: "",
    questionType: "radio-text",
    keyboardType: "default",
  },
  // {
  //   questionId: 'B13',
  //   question: 'Number of HH members currently earning',
  //   answer: '',
  //   questionType: 'number',
  //   keyboardType: 'numeric',
  // },
  {
    questionId: "B13a",
    question: "Number of Male HH members currently earning?",
    answer: "",
    questionType: "number",
    keyboardType: "numeric",
  },
  {
    questionId: "B13b",
    question: "Number of Female HH members currently earning?",
    answer: "",
    questionType: "number",
    keyboardType: "numeric",
  },
  {
    questionId: "B14",
    question: "Source of Income of the HH",
    options: [
      "Farming",
      "Govt Service",
      "Private Job",
      "Own Business",
      "Daily Wages",
      "Other (Specify)",
    ],
    answer: "",
    questionType: "checkbox-text",
    keyboardType: "default",
  },
  {
    questionId: "B15",
    question: "Total Monthly Income (PKR)",
    options: [
      "10,000 – 20,000",
      "20,000 - 30,000",
      "30,000 – 40,000",
      "40,000 – 50,000",
      "Other (Specify)",
    ],
    answer: "",
    questionType: "radio-text",
    keyboardType: "default",
  },
];

export const SECTION_C1_QUESTIONS: IQuestion[] = [
  {
    questionId: "C1",
    question: "Do you think watercourse lining is an effective component?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "C2",
    question:
      "Were the lining of watercourse activities carried out according to the specified design and plans?",
    options: ["Yes", "No", "Partially"],
    answer: "",
    questionType: "radio",
  },
  // {
  //   questionId: 'C3',
  //   question:
  //     'Have you observed any improvements in agricultural productivity since the construction of watercourse lining?',
  //   options: ['Substantial', 'Moderate', 'Poor'],
  //   answer: '',
  //   questionType: 'radio',
  // },
  // {
  //   questionId: 'C4',
  //   question:
  //     'Have you observed any improvements in land use and cropping intensity since the construction of watercourse lining?',
  //   options: ['Substantial', 'Moderate', 'Poor'],
  //   answer: '',
  //   questionType: 'radio',
  // },
  {
    questionId: "D1",
    question: "Do you believe that watercourse lining helps in water saving?",
    options: ["Yes", "No", "Don’t know"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "D2",
    question: "What is the level of water saving after watercourse lining?",
    answer: "",
    questionType: "radio",
    options: ["Substantial", "Moderate", "Poor"],
  },
  {
    questionId: "D3",
    question: "Has the lining reduced irrigation cost?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "D4",
    question: "Has the lining reduced irrigation time?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "E1",
    question:
      "Do you think watercourse lining is an important need of the farmers?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "E2",
    question:
      "Do you think watercourse lining has increased farm area on either side of the WC?",
    options: ["Yes", "No", "Partially"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "E3",
    question:
      "Do you think watercourse lining minimized labor cost for watercourse periodic cleaning?",
    options: ["Yes", "No", "Partially"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "F1",
    question: "How would you rate the durability of the watercourse lining?",
    options: ["Good", "Average", "Poor"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "F2",
    question:
      "Do you think the watercourses are sustainable for a longer period?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "F3",
    question:
      "Do you think watercourse lining has positive effects on the environment?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
];

export const SECTION_D1_QUESTIONS: IQuestion[] = [
  {
    questionId: "G1",
    question:
      "Do you think the watercourse lining has increased cropping area?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "G2",
    question:
      "Is there any contribution of the watercourse lining in your agricultural income?",
    options: ["Yes", "No", "Don’t know"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "G3",
    question:
      "Is there any contribution of the watercourse lining in increasing labor employment?",
    options: ["Yes", "No", "Don’t know"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "G4",
    question: "Is there any impact of watercourse lining on crop production?",
    options: ["Yes", "No", "Don’t know"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "G5",
    question:
      "Have you observed any improvements in crop yields since the construction of watercourse lining?",
    options: ["Substantial", "Moderate", "Poor"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "G6",
    question:
      "Have you observed any improvements in land use and cropping intensity since the construction of watercourse lining?",
    options: ["Substantial", "Moderate", "Poor"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "G7",
    question:
      "Either in your opinion the neighboring farmers are motivated for lining of watercourse?",
    options: ["Yes", "No", "Don’t know"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "G8",
    question:
      "Either in your opinion water course lining is reducing water losses?",
    options: ["Yes", "No", "Don’t know"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "H1",
    question: "Is there further need of watercourse lining in the area?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "H2",
    question:
      "Do you think the watercourse lining is compatible with crop farming?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
  {
    questionId: "H3",
    question:
      "Do you think the watercourse lining is compatible with crop farming?",
    options: ["Yes", "No", "Not Sure"],
    answer: "",
    questionType: "radio",
  },
];
