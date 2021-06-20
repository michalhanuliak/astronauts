import React, { useEffect, useState } from 'react';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import MoonLoader from 'react-spinners/MoonLoader';

import AstronautCard from '../../components/astronautCard';
import {
  AstronautListContainer,
  EmptyAstronauts,
  LoadingContainer,
} from './astronautList';
import astronautService from '../../services/astronautService';
import { GetAllAstronauts_astronauts } from '../../services/astronautService/__generated__/GetAllAstronauts';
import { setAllAstronauts } from '../../pages/homePage/slice';
import { makeSelectAllAstronauts } from '../../pages/homePage/selectors';

const actionDispatch = (dispatch: Dispatch) => ({
  setAllAstronauts:
  (astronauts: GetAllAstronauts_astronauts[]) => dispatch(setAllAstronauts(astronauts)),
});

const stateSelector = createSelector(makeSelectAllAstronauts, (allAstronauts) => ({
  allAstronauts,
}));

const AstronautList = () => {
  const [isLoading, setLoading] = useState(false);

  const { allAstronauts } = useSelector(stateSelector);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { setAllAstronauts } = actionDispatch(useDispatch());

  const fetchAstronauts = async () => {
    setLoading(true);
    const astronauts = await astronautService.getAllAstronauts().catch((err) => {
      console.log(`Error: ${err}`);
    });
    if (astronauts) setAllAstronauts(astronauts);
    setLoading(false);
  };

  useEffect(() => {
    fetchAstronauts();
  }, []);

  const isEmptyAstronauts = !allAstronauts || allAstronauts.length === 0;

  const astronautData = !isEmptyAstronauts && allAstronauts.map(
    (astronaut: GetAllAstronauts_astronauts) => (
      <AstronautCard
        {...astronaut}
        birthDate={new Date(astronaut.birthDate)}
        key={astronaut.id}
      />
    ),
  );

  return (
    <AstronautListContainer>
      {isLoading && (
      <LoadingContainer>
        <MoonLoader loading color="#EF4400" />
      </LoadingContainer>
      )}
      {isEmptyAstronauts && !isLoading && <EmptyAstronauts>No astronauts to show</EmptyAstronauts>}
      {!isEmptyAstronauts && !isLoading && astronautData}
    </AstronautListContainer>
  );
};

export default AstronautList;
