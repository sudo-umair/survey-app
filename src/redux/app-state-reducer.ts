import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IAppState } from '@interfaces/redux';
import { SURVEY_COMPONENTS } from '@common/data';
import { IQuestion, ISurveyPayload } from '@interfaces/common';

const initialState: IAppState = {
  surveyComponents: [],
  sectionA: [],
  sectionB: [],
  sectionC1: [],
  sectionD1: [],
  sectionC2: [],
  sectionD2: [],
  sectionC3: [],
  sectionD3: [],
  sectionC4: [],
  sectionD4: [],
  sectionC5: [],
  sectionD5: [],
  sectionC6: [],
  sectionD6: [],
  sectionC7: [],
  sectionD7: [],
};

const appSlice = createSlice({
  name: 'app-state',
  initialState,
  reducers: {
    setSurveyComponents: (
      state,
      action: PayloadAction<SURVEY_COMPONENTS[]>
    ) => {
      state.surveyComponents = action.payload;
    },
    filterSurveyComponents: (
      state,
      action: PayloadAction<SURVEY_COMPONENTS>
    ) => {
      state.surveyComponents = state.surveyComponents.filter(
        (item) => item !== action.payload
      );
    },
    submitSectionA: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionA = action.payload;
    },
    submitSectionB: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionB = action.payload;
    },
    submitSectionC1: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionC1 = action.payload;
    },
    submitSectionD1: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionD1 = action.payload;
    },
    submitSectionC2: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionC2 = action.payload;
    },
    submitSectionD2: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionD2 = action.payload;
    },
    submitSectionC3: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionC3 = action.payload;
    },
    submitSectionD3: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionD3 = action.payload;
    },
    submitSectionC4: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionC4 = action.payload;
    },
    submitSectionD4: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionD4 = action.payload;
    },
    submitSectionC5: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionC5 = action.payload;
    },
    submitSectionD5: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionD5 = action.payload;
    },
    submitSectionC6: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionC6 = action.payload;
    },
    submitSectionD6: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionD6 = action.payload;
    },
    submitSectionC7: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionC7 = action.payload;
    },
    submitSectionD7: (state, action: PayloadAction<IQuestion[]>) => {
      state.sectionD7 = action.payload;
    },
    clearData: () => {
      return initialState;
    },
  },
});

export const {
  clearData,
  submitSectionA,
  submitSectionB,
  submitSectionC1,
  submitSectionC2,
  submitSectionD1,
  submitSectionD2,
  submitSectionC3,
  submitSectionD3,
  submitSectionC4,
  submitSectionD4,
  submitSectionC5,
  submitSectionD5,
  submitSectionC6,
  submitSectionD6,
  submitSectionC7,
  submitSectionD7,
  setSurveyComponents,
  filterSurveyComponents,
} = appSlice.actions;

export default appSlice.reducer;
