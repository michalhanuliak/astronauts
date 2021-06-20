import React from 'react';

import { IButtonProps } from '../../../interfaces/IButton';
import {
  FilledButton,
  OutlinedButton,
} from './button';

const Button = (props: IButtonProps) => {
  const {
    theme,
    text,
    className,
    onClick,
  } = props;

  return theme === 'filled'
    ? <FilledButton className={className} onClick={onClick}>{ text }</FilledButton>
    : <OutlinedButton className={className} onClick={onClick}>{ text }</OutlinedButton>;
};

Button.defaultProps = {
  theme: 'filled',
};

export default Button;
