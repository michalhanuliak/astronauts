import styled from 'styled-components';
import tw from 'twin.macro';

export const BaseButton = styled.button`
  ${tw`
    m-1
    border-2
    border-solid
    outline-none
    rounded-md
    pl-5
    pr-5
    pt-3
    pb-3
    border-transparent
    transition-all
    duration-200
    ease-in-out
    text-white
    font-semibold
    text-xs
    focus:outline-none
  `};
`;

export const FilledButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
  `};
`;

export const OutlinedButton = styled(BaseButton)`
  ${tw`
    border-red-500
    bg-transparent
    text-red-500
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `};
`;
