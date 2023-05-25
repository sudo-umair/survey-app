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
    setSectionA: (state, action: PayloadAction<IAppState['sectionA']>) => {
      state.sectionA = action.payload;
    },
    setSectionB: (state, action: PayloadAction<IAppState['sectionB']>) => {
      state.sectionB = action.payload;
    },
    setSectionC1: (state, action: PayloadAction<IAppState['sectionC1']>) => {
      state.sectionC1 = action.payload;
    },
    setSectionD1: (state, action: PayloadAction<IAppState['sectionD1']>) => {
      state.sectionD1 = action.payload;
    },
    setSectionC2: (state, action: PayloadAction<IAppState['sectionC2']>) => {
      state.sectionC2 = action.payload;
    },
    setSectionD2: (state, action: PayloadAction<IAppState['sectionD2']>) => {
      state.sectionD2 = action.payload;
    },
    clearData: () => {
      return initialState;
    },
  },
});

export const {
  clearData,
  setSectionA,
  setSectionB,
  setSectionC1,
  setSectionC2,
  setSectionD1,
  setSectionD2,
  setSurveyComponents,
} = appSlice.actions;

export default appSlice.reducer;
