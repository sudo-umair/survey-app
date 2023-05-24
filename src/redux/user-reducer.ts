import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  IAdminState,
  IEnumeratorState,
  IUserState,
} from '@interfaces/redux';

const initialState: IUserState = {
  user: {
    name: '',
    age: '',
    email: '',
    id: '',
    cnic: '',
    mobile: '',
    address: '',
    enumeratorId: '',
    token: '',
  },
  role: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<IAdminState>) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
      state.user.token = action.payload.token;
      state.isLoggedIn = true;
    },
    setEnumerator: (state, action: PayloadAction<IEnumeratorState>) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.id = action.payload?.id;
      state.user.token = action.payload.token;
      state.user.cnic = action.payload.cnic;
      state.user.mobile = action.payload.mobile;
      state.user.address = action.payload.address;
      state.user.age = action.payload.age;
      state.user.enumeratorId = action.payload.enumeratorId;
      state.isLoggedIn = true;
    },
    removeUser: () => {
      return initialState;
    },
    setRole: (state, action: PayloadAction<'admin' | 'enumerator'>) => {
      state.role = action.payload;
    },
    clearRole: (state) => {
      state.role = null;
    },
  },
});

export const { setAdmin, setEnumerator, removeUser, clearRole, setRole } =
  userSlice.actions;

export default userSlice.reducer;
