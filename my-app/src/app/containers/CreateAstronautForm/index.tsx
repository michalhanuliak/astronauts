/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import AstronautInputForm from '../../components/astronautInputForm';
import { addAstronaut } from '../../pages/homePage/slice';
import astronautService from '../../services/astronautService';
import { GetAllAstronauts_astronauts } from '../../services/astronautService/__generated__/GetAllAstronauts';
import { IAstronautCard } from '../../../interfaces/IAstronautCard';

const actionDispatch = (dispatch: Dispatch) => ({
  addAstronaut:
  (astronaut: GetAllAstronauts_astronauts | object | void) => dispatch(addAstronaut(astronaut)),
});

const CreateAstronautForm = ({ ...props }: any) => {
  const { openPopUp } = props;
  const { addAstronaut } = actionDispatch(useDispatch());

  const sendAstronautData = async (astronautData: IAstronautCard) => astronautService
    .addAstronaut(astronautData)
    .catch((err) => {
      console.log(`Error: ${err}`);
    });

  const handleSubmit = async (astronautData: IAstronautCard) => {
    addAstronaut(await sendAstronautData(astronautData));
    openPopUp(false);
  };

  return (
    <AstronautInputForm submitText="Add astronaut" parentAction={handleSubmit} />
  );
};

export default CreateAstronautForm;
