/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewAstronautInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddAstronaut
// ====================================================

export interface AddAstronaut_addNewAstronaut {
  __typename: "Astronaut";
  id: string;
  firstName: string;
  lastName: string;
  birthDate: any;
  superpower: string;
}

export interface AddAstronaut {
  addNewAstronaut: AddAstronaut_addNewAstronaut;
}

export interface AddAstronautVariables {
  newAstronautData: NewAstronautInput;
}
