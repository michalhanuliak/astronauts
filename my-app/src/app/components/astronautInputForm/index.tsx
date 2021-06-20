/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dateFormat from 'dateformat';

import Button from '../button';
import {
  ButtonOffset,
  DateCalendar,
  Icon,
  InputField,
  InputForm,
  PickDateField,
} from './astronautInputForm';

const AstronautInputForm = ({ ...props }: any) => {
  const {
    parentAction,
    submitText,
    selectedAstronaut,
    datePlaceholder,
  } = props;

  const [showDatePlaceholder, setShowDatePlaceholder] = useState(datePlaceholder);
  const [isCalendarOpen, setIsCalenderOpen] = useState(false);
  const [astronautData, setAstronautData] = useState(selectedAstronaut || {
    firstName: '',
    lastName: '',
    birthDate: Date(),
    superpower: '',
  });

  const toggleCalendar = () => {
    setIsCalenderOpen(!isCalendarOpen);
  };

  const handleChangeDate = (event: any) => {
    setShowDatePlaceholder(false);
    setIsCalenderOpen(false);
    setAstronautData({
      ...astronautData,
      birthDate: event,
    });
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAstronautData({
      ...astronautData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    parentAction(astronautData);
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <InputField
        name="firstName"
        placeholder="First name"
        value={astronautData.firstName}
        onChange={handleChange}
        required
      />
      <InputField
        name="lastName"
        placeholder="Last name"
        value={astronautData.lastName}
        onChange={handleChange}
        required
      />
      <PickDateField>
        <InputField
          name="birthDate"
          placeholder="Pick date of birth"
          value={!showDatePlaceholder ? dateFormat(astronautData.birthDate, 'dS mmmm yyyy') : ''}
          onClick={toggleCalendar}
          readOnly
          required
        />
        {isCalendarOpen && <DateCalendar onClickDay={handleChangeDate} />}
        <Icon>
          <FontAwesomeIcon icon={faCaretDown} />
        </Icon>
      </PickDateField>
      <InputField
        name="superpower"
        placeholder="Superpower"
        value={astronautData.superpower}
        onChange={handleChange}
        required
      />
      <ButtonOffset />
      <Button theme="filled" text={submitText} />
    </InputForm>
  );
};

AstronautInputForm.defaultProps = {
  datePlaceholder: true,
};

export default AstronautInputForm;
