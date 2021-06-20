import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IPopUp } from '../../../interfaces/IPopUp';
import {
  PopUpClose,
  PopUpContainer,
  PopUpContent,
  PopUpTitle,
} from './popUp';

const PopUp = ({ children, ...props }: IPopUp) => {
  const { title, openPopUp } = props;

  const handleClose = () => {
    openPopUp(false);
  };

  return (
    <PopUpContainer>
      <PopUpContent>
        <PopUpTitle>
          {title}
        </PopUpTitle>
        {children}
        <PopUpClose onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </PopUpClose>
      </PopUpContent>
    </PopUpContainer>
  );
};

PopUp.defaultProps = {
  title: '',
  popUpState: false,
};

export default PopUp;
