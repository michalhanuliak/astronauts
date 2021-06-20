import React, { useState } from 'react';
import Button from '../../components/button';
import { NavbarContainer, Logo } from './navbar';

import PopUp from '../../components/popUp';
import CreateAstronautForm from '../CreateAstronautForm';
import logoUrl from '../../../assets/images/rocket-logo.png';

const Navbar = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleClick = () => {
    setIsPopUpOpen(true);
  };

  return (
    <NavbarContainer>
      {isPopUpOpen && (
      <PopUp popUpState={isPopUpOpen} openPopUp={setIsPopUpOpen} title="Add new astronaut">
        <CreateAstronautForm openPopUp={setIsPopUpOpen} />
      </PopUp>
      )}
      <Logo>
        <img src={logoUrl} alt="Logo" />
      </Logo>
      <Button text="Add new astronaut" onClick={handleClick} />
    </NavbarContainer>
  );
};

export default Navbar;
