import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState, //There like its is the same name i can keep just this expression instead of initialState: initialState
  reducers: {
    setLogin: (state, action) => {
      state.currentUser = action.payload; //Advantage of slice is that i can directly modifie the state value and don't make a return
    },
    setLogout: (state) => {
      state.currentUser = null; //Advantage of slice is that i can directly modifie the state value and don't make a return
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;
export default userSlice.reducer;
