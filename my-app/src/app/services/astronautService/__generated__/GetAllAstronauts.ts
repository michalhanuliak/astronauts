/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllAstronauts
// ====================================================

export interface GetAllAstronauts_astronauts {
  __typename: "Astronaut";
  id: string;
  firstName: string;
  lastName: string;
  birthDate: any;
  superpower: string;
}

export interface GetAllAstronauts {
  astronauts: GetAllAstronauts_astronauts[];
}
