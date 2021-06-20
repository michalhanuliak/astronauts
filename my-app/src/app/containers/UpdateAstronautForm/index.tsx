/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import AstronautInputForm from '../../components/astronautInputForm';
import { updateAstronaut } from '../../pages/homePage/slice';
import astronautService from '../../services/astronautService';
import { makeSelectAstronaut } from '../../pages/homePage/selectors';
import { IAstronautCard } from '../../../interfaces/IAstronautCard';

const actionDispatch = (dispatch: Dispatch) => ({
  updateAstronautData: (astronaut: any) => dispatch(updateAstronaut(astronaut)),
});

const stateSelector = createSelector(makeSelectAstronaut, (selectedAstronaut) => ({
  selectedAstronaut,
}));

const UpdateAstronautForm = ({ ...props }: any) => {
  const { astronautID, openPopUp } = props;
  const { selectedAstronaut } = useSelector(stateSelector);
  const { updateAstronautData } = actionDispatch(useDispatch());

  const updateAstronaut = async (astronautID: String, astronautData: IAstronautCard) => {
    const {
      firstName, lastName, birthDate, superpower,
    } = astronautData;

    await astronautService
      .updateAstronaut(astronautID, {
        firstName, lastName, birthDate, superpower,
      }).catch((err) => {
        console.log(`Error: ${err}`);
      });

    updateAstronautData(astronautData);
  };

  const handleSubmit = async (astronautData: IAstronautCard) => {
    updateAstronaut(astronautID, astronautData);
    openPopUp(false);
  };

  return (
    <AstronautInputForm
      submitText="Update astronaut"
      parentAction={handleSubmit}
      selectedAstronaut={selectedAstronaut}
      datePlaceholder={false}
    />
  );
};

export default UpdateAstronautForm;
