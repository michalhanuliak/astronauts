import { createSelector } from '@reduxjs/toolkit';
import { IRootAppState } from '../../../interfaces/IRootAppState';

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectAllAstronauts = createSelector(selectHomePage,
  (homePage) => homePage.allAstronauts);

export const makeSelectAstronaut = createSelector(selectHomePage,
  (homePage) => homePage.selectedAstronaut);
