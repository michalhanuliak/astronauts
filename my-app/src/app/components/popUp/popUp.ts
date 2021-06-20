import styled from 'styled-components';
import tw from 'twin.macro';

export const PopUpContainer = styled.div`
  ${tw`
    fixed
    left-0
    top-0
    items-center
    justify-center
    flex-col
    flex
    z-50
    h-screen
    w-screen
    bg-black
    bg-opacity-60
  `};
`;

export const PopUpContent = styled.div`
  ${tw`
    relative
    items-center
    justify-center
    flex-col
    flex
    w-10/12
    md:w-2/5
    h-auto
    p-5
    bg-gray-900
  `};
`;

export const PopUpTitle = styled.h2`
  ${tw`
    mb-10
    text-3xl
    text-white
  `};
`;

export const PopUpClose = styled.h2`
  ${tw`
    absolute
    top-5
    right-5
    cursor-pointer
    text-white
  `};
`;
