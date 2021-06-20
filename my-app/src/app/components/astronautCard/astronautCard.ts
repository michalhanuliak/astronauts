/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../button';

export const Card = styled.div`
  background-color: rgb(37,39,47);
  ${tw`
    relative
    justify-center
    items-start
    flex-col
    flex
    ml-2
    mb-2
    rounded-md
    w-60
    h-72
    p-5
    pb-2
  `};
`;

export const Name = styled.h2`
  ${tw`
    self-center
    mt-1
    mb-2
    text-lg
    font-bold
    text-gray-400
  `};
`;

export const AttributeValue = styled.p`
  ${tw`
    mb-1
    text-base
    text-gray-400
  `};
`;

export const AttributeType = styled.p`
  ${tw`
    mt-2
    text-sm
    text-gray-500
  `};
`;

export const RemoveButton = styled.button`
  ${tw`
    absolute
    top-2
    right-5
    mt-1
    mb-1
    text-base
    text-gray-400
    hover:text-red-500
  `};
`;

export const EditButton = styled(Button)`
  ${tw`
    self-center
    mt-5
  `};
`;
