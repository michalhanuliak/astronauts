import apolloClient from '../../graphql';
import {
  GET_ALL_ASTRONAUTS,
  ADD_ASTRONAUT,
  REMOVE_ASTRONAUT,
  UPDATE_ASTRONAUT,
} from './queries';
import { GetAllAstronauts_astronauts } from './__generated__/GetAllAstronauts';

class AstronautService {
  public async getAllAstronauts(): Promise<GetAllAstronauts_astronauts[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_ASTRONAUTS })
      .catch((err: any) => {
        throw err;
      });

    if (response && response.data && response.data.astronauts) {
      return response.data.astronauts as GetAllAstronauts_astronauts[];
    }

    return [];
  }

  public async addAstronaut(astronautData: any):
  Promise<GetAllAstronauts_astronauts | Object> {
    const response = await apolloClient
      .mutate({
        mutation: ADD_ASTRONAUT,
        variables: { newAstronautData: astronautData },
      })
      .catch((err: any) => {
        console.log(err);
      });

    if (response && response.data && response.data.addNewAstronaut) {
      return response.data.addNewAstronaut as GetAllAstronauts_astronauts;
    }

    return {};
  }

  public async removeAstronaut(astronautID: String) {
    const response = await apolloClient
      .mutate({
        mutation: REMOVE_ASTRONAUT,
        variables: { astronautID },
      })
      .catch((err: any) => {
        console.log(err);
      });

    if (response && response.data && response.data.astronauts) {
      return response.data.astronauts as GetAllAstronauts_astronauts;
    }

    return {};
  }

  public async updateAstronaut(astronautID: String, astronautData: any):
  Promise<GetAllAstronauts_astronauts | Object> {
    const response = await apolloClient
      .mutate({
        mutation: UPDATE_ASTRONAUT,
        variables: { astronautID, updatedAstronautData: astronautData },
      })
      .catch((err: any) => {
        console.log(err);
      });

    if (response && response.data && response.data.astronauts) {
      return response.data.astronauts as GetAllAstronauts_astronauts;
    }

    return {};
  }
}

export default new AstronautService();
