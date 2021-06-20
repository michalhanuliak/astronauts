import styled from 'styled-components';
import tw from 'twin.macro';

export const NavbarContainer = styled.nav`
  ${tw`
    justify-between
    flex
    w-full
    p-4
    bg-gray-900
  `};
`;

export const Logo = styled.div`
  ${tw`
    h-16
  `};
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;
