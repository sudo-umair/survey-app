import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUserState } from '@interfaces/redux';

const initialState: IUserState = {
  email: '',
  name: '',
  role: null,
  address: '',
  cnic: '',
  phone: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.phone = action.payload.phone || '';
      state.address = action.payload.address || '';
      state.cnic = action.payload.cnic || '';
      state.token = action.payload.token;
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
