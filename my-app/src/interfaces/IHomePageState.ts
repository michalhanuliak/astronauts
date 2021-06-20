import { GetAllAstronauts_astronauts } from '../app/services/astronautService/__generated__/GetAllAstronauts';

export interface IHomePageState {
  allAstronauts: GetAllAstronauts_astronauts[],
  selectedAstronaut: {
    id: String,
    firstName: string,
    lastName: string,
    birthDate: Date,
    superpower: string,
  },
}
