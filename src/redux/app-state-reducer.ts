import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IAppState } from '@interfaces/redux';

const initialState: IAppState = {
  surveyComponents: [],
  sectionA: [],
  sectionB: [],
  sectionC1: [],
  sectionD1: [],
  sectionC2: [],
  sectionD2: [],
};

const appSlice = createSlice({
  name: 'app-state',
  initialState,
  reducers: {
    setSurveyComponents: (
      state,
      action: PayloadAction<IAppState['surveyComponents']>
    ) => {
      state.surveyComponents = action.payload;
    },
    submitSectionA: (state, action: PayloadAction<IAppState['sectionA']>) => {
      state.sectionA = action.payload;
    },
    submitSectionB: (state, action: PayloadAction<IAppState['sectionB']>) => {
      state.sectionB = action.payload;
    },
    submitSectionC1: (state, action: PayloadAction<IAppState['sectionC1']>) => {
      state.sectionC1 = action.payload;
    },
    submitSectionD1: (state, action: PayloadAction<IAppState['sectionD1']>) => {
      state.sectionD1 = action.payload;
    },
    submitSectionC2: (state, action: PayloadAction<IAppState['sectionC2']>) => {
      state.sectionC2 = action.payload;
    },
    submitSectionD2: (state, action: PayloadAction<IAppState['sectionD2']>) => {
      state.sectionD2 = action.payload;
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
  setSurveyComponents,
} = appSlice.actions;

export default appSlice.reducer;
