import Calendar from 'react-calendar';
import styled from 'styled-components';
import tw from 'twin.macro';

import 'react-calendar/dist/Calendar.css';

export const InputForm = styled.form`
  ${tw`
    items-center
    justify-center
    flex-col
    flex
    w-full
    max-w-md
  `};
`;

export const InputField = styled.input`
  ${tw`
    mb-2
    border-b-2
    border-gray-500
    focus:border-red-500
    focus:outline-none
    w-full
    p-2
    transition
    duration-200
    ease-in-out
    bg-gray-900
    text-white
  `};
`;

export const PickDateField = styled.div`
  ${tw`
    relative
    items-center
    flex
    w-full
    bg-gray-900
    mb-1
    cursor-pointer
  `};
  input {
    cursor: pointer;
  }
`;

export const DateCalendar = styled(Calendar)`
  ${tw`
    absolute
    top-12
    left-1
    w-full
  `};
`;

export const Icon = styled.span`
  ${tw`
    absolute
    right-0
    fill-current
    mr-1
    md:mr-3
    text-xs
    md:text-base
    text-red-500
  `};
`;

export const ButtonOffset = styled.span`
  ${tw`
    mb-10
  `};
`;
