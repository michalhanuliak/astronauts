import React, { useState } from 'react';
import dateFormat from 'dateformat';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { IAstronautCard } from '../../../interfaces/IAstronautCard';
import { removeAstronaut, selectAstronaut } from '../../pages/homePage/slice';
import astronautService from '../../services/astronautService';
import PopUp from '../popUp';
import UpdateAstronautForm from '../../containers/UpdateAstronautForm';
import {
  Card,
  Name,
  RemoveButton,
  EditButton,
  AttributeValue,
  AttributeType,
} from './astronautCard';

const actionDispatch = (dispatch: Dispatch) => ({
  removeAstronaut: (astronautID: String) => dispatch(removeAstronaut(astronautID)),
  selectAstronaut: (astronaut: IAstronautCard) => dispatch(selectAstronaut(astronaut)),
});

const AstronautCard = (props: IAstronautCard) => {
  const {
    id,
    firstName,
    lastName,
    birthDate,
    superpower,
  } = props;

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { removeAstronaut, selectAstronaut } = actionDispatch(useDispatch());

  const removeAstronautFromDB = async (astronautID: String) => {
    await astronautService.removeAstronaut(astronautID).catch((err) => {
      console.log(`Error: ${err}`);
    });
  };

  const handleDelete = () => {
    removeAstronautFromDB(id);
    removeAstronaut(id);
  };

  const handleUpdate = () => {
    selectAstronaut(props);
    setIsPopUpOpen(true);
  };

  return (
    <Card>
      <Name>
        {`${firstName} ${lastName}`}
      </Name>
      <AttributeType>Date of Birth: </AttributeType>
      <AttributeValue>{dateFormat(birthDate, 'dS mmmm yyyy')}</AttributeValue>
      <AttributeType>Superpower: </AttributeType>
      <AttributeValue>{superpower}</AttributeValue>
      <RemoveButton onClick={handleDelete}>
        <FontAwesomeIcon icon={faTimes} />
      </RemoveButton>
      <EditButton
        text="Edit Astronaut"
        theme="outlined"
        value={id}
        onClick={handleUpdate}
      />
      {isPopUpOpen && (
        <PopUp
          popUpState={isPopUpOpen}
          openPopUp={setIsPopUpOpen}
          title="Update Astronaut Info"
        >
          <UpdateAstronautForm openPopUp={setIsPopUpOpen} />
        </PopUp>
      )}
    </Card>
  );
};

export default AstronautCard;
