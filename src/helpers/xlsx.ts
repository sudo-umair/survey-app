import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import XLSX from 'xlsx';
import type { ISurveyPayload, ISurveyDataInXlsx } from '@interfaces/common';
import { getTodaysDateTime } from './date-time';

function transformSurveyPayloadToXlsxData(
  payload: ISurveyPayload[]
): ISurveyDataInXlsx[] {
  const xlsxData: ISurveyDataInXlsx[] = [];

  payload.forEach((survey) => {
    const {
      surveyId,
      sectionA,
      sectionB,
      sectionC,
      sectionD,
      submittedBy,
      submittedAt,
    } = survey;

    sectionA.forEach((question) => {
      xlsxData.push({
        surveyId,
        sectionName: 'Section A',
        question: question.question,
        options: question.options ? question.options.join(', ') : '',
        answer: question.answer,
        submittedAt,
        submittedByName: submittedBy.name,
        submittedByAge: submittedBy.age || '',
        submittedByCnic: submittedBy.cnic || '',
        submittedByEmail: submittedBy.email,
        submittedByEnumeratorId: submittedBy.enumeratorId || '',
        submittedByAddress: submittedBy.address || '',
        submittedByMobile: submittedBy.mobile || '',
      });
    });

    sectionB.forEach((question) => {
      xlsxData.push({
        surveyId,
        sectionName: 'Section B',
        question: question.question,
        options: question.options ? question.options.join(', ') : '',
        answer: question.answer,
        submittedAt,
        submittedByName: submittedBy.name,
        submittedByAge: submittedBy.age || '',
        submittedByCnic: submittedBy.cnic || '',
        submittedByEmail: submittedBy.email,
        submittedByEnumeratorId: submittedBy.enumeratorId || '',
        submittedByAddress: submittedBy.address || '',
        submittedByMobile: submittedBy.mobile || '',
      });
    });

    sectionC.forEach((question) => {
      xlsxData.push({
        surveyId,
        sectionName: 'Section C',
        question: question.question,
        options: question.options ? question.options.join(', ') : '',
        answer: question.answer,
        submittedAt,
        submittedByName: submittedBy.name,
        submittedByAge: submittedBy.age || '',
        submittedByCnic: submittedBy.cnic || '',
        submittedByEmail: submittedBy.email,
        submittedByEnumeratorId: submittedBy.enumeratorId || '',
        submittedByAddress: submittedBy.address || '',
        submittedByMobile: submittedBy.mobile || '',
      });
    });

    sectionD.forEach((question) => {
      xlsxData.push({
        surveyId,
        sectionName: 'Section D',
        question: question.question,
        options: question.options ? question.options.join(', ') : '',
        answer: question.answer,
        submittedAt,
        submittedByName: submittedBy.name,
        submittedByAge: submittedBy.age || '',
        submittedByCnic: submittedBy.cnic || '',
        submittedByEmail: submittedBy.email,
        submittedByEnumeratorId: submittedBy.enumeratorId || '',
        submittedByAddress: submittedBy.address || '',
        submittedByMobile: submittedBy.mobile || '',
      });
    });
  });

  return xlsxData;
}

export const exportToXlsx = async (data: ISurveyPayload[]) => {
  try {
    const transformedData = transformSurveyPayloadToXlsxData(data);
    const worksheet = XLSX.utils.json_to_sheet(transformedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const workbookOutput = XLSX.write(workbook, {
      type: 'base64',
      bookType: 'xlsx',
    });
    const documentsDirectory = `${FileSystem.documentDirectory}SIEAP/`;
    await FileSystem.makeDirectoryAsync(documentsDirectory, {
      intermediates: true,
    });
    const path = `${documentsDirectory}survey-data-${getTodaysDateTime()}.xlsx`;
    await FileSystem.writeAsStringAsync(path, workbookOutput, {
      encoding: FileSystem.EncodingType.Base64,
    });
    Sharing.shareAsync(path, {
      mimeType:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      dialogTitle: 'MyWater',
      UTI: 'com.microsoft.excel.xlsx',
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
