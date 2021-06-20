import { createSlice } from '@reduxjs/toolkit';
import { IHomePageState } from '../../../interfaces/IHomePageState';

const initialState: IHomePageState = {
  allAstronauts: [],
  selectedAstronaut: {
    id: '',
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    superpower: '',
  },
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setAllAstronauts: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.allAstronauts = action.payload;
    },
    addAstronaut: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.allAstronauts.push(action.payload);
    },
    removeAstronaut: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.allAstronauts = state.allAstronauts.filter(
        (astronaut) => astronaut.id !== action.payload,
      );
    },
    updateAstronaut: (state, action) => {
      state.allAstronauts = state.allAstronauts.map(
        (astronaut) => (astronaut.id === action.payload.id ? action.payload : astronaut),
      );
    },
    selectAstronaut: (state, action) => {
      state.selectedAstronaut = action.payload;
    },
  },
});

export const {
  setAllAstronauts,
  addAstronaut,
  removeAstronaut,
  updateAstronaut,
  selectAstronaut,
} = homePageSlice.actions;
export default homePageSlice.reducer;
