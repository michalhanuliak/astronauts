import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AstronautsService } from './astronauts.service';
import { NewAstronautInput } from './dta/new-astronaut.input';
import { UpdatedAstronautInput } from './dta/updated-astronaut.input';
import { Astronaut } from './entities/astronaut';

@Resolver()
export class AstronautsResolver {
  constructor(private astronautService: AstronautsService) {}

  @Query((returns) => [Astronaut])
  public async astronauts(): Promise<Astronaut[]> {
    return await this.astronautService.getAllAstronauts().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Astronaut)
  public async addNewAstronaut(
    @Args('newAstronautData') newAstronautData: NewAstronautInput,
  ): Promise<Astronaut> {
    return await this.astronautService
      .addAstronaut(newAstronautData)
      .catch((err) => {
        throw err;
      });
  }

  @Mutation((returns) => String)
  public async removeAstronaut(@Args('astronautID') astronautID: string) {
    return await this.astronautService
      .removeAstronaut(astronautID)
      .catch((err) => {
        throw err;
      });
  }

  @Mutation((returns) => String)
  public async updateAstronaut(
    @Args('astronautID') astronautID: string,
    @Args('updatedAstronautData') updatedAstronautData: UpdatedAstronautInput,
  ) {
    return await this.astronautService
      .updateAstronaut(astronautID, updatedAstronautData)
      .catch((err) => {
        throw err;
      });
  }
}
