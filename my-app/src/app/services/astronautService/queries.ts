import { gql } from '@apollo/client';

export const GET_ALL_ASTRONAUTS = gql`
    query GetAllAstronauts {
    astronauts {
      id
      firstName
      lastName
      birthDate
      superpower
    }
  }
`;

export const ADD_ASTRONAUT = gql`
    mutation AddAstronaut($newAstronautData: NewAstronautInput!) {
        addNewAstronaut(newAstronautData: $newAstronautData) {
          id
          firstName
          lastName
          birthDate
          superpower
        }
  }
`;

export const REMOVE_ASTRONAUT = gql`
  mutation RemoveAstronaut($astronautID: String!) {
    removeAstronaut(astronautID: $astronautID)
  }
`;

export const UPDATE_ASTRONAUT = gql`
  mutation UpdateAstronaut($astronautID: String!, $updatedAstronautData: UpdatedAstronautInput! ){
    updateAstronaut(
      astronautID: $astronautID,
      updatedAstronautData: $updatedAstronautData
    )
  }
`;
