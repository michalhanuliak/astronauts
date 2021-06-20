import styled from 'styled-components';
import tw from 'twin.macro';

export const HomePageContainer = styled.main`
  background: rgb(28,27,34);
  ${tw`
    h-auto
    min-h-screen
  `};
`;

export const HomePageContent = styled.main`
  ${tw`
    p-8
  `};
`;

export const HomePageTitle = styled.h1`
  ${tw`
    mb-8
    text-7xl
    font-bold
    text-gray-400
  `};
`;

export const HomePageSubtitle = styled.p`
  ${tw`
    w-full
    mb-10
    text-base
    font-normal
    text-gray-400
  `};
`;
