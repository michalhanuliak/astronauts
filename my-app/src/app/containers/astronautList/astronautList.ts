import styled from 'styled-components';
import tw from 'twin.macro';

export const AstronautListContainer = styled.section`
  ${tw`
    justify-center
    md:justify-start
    flex-wrap
    flex
  `};
`;

export const EmptyAstronauts = styled.div`
  ${tw`
    justify-center
    items-center
    flex
    w-full
    text-gray-300
  `};
`;

export const LoadingContainer = styled.div`
  ${tw`
    justify-center
    items-center
    flex
    mt-16
    w-full
    text-base
  `};
`;
