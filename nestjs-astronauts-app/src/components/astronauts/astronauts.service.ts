import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { NewAstronautInput } from './dta/new-astronaut.input';
import { UpdatedAstronautInput } from './dta/updated-astronaut.input';
import { Astronaut } from './entities/astronaut';

@Injectable()
export class AstronautsService {
  constructor(
    @InjectRepository(Astronaut)
    private astronautRepository: Repository<Astronaut>,
  ) {}

  public async getAllAstronauts(): Promise<Astronaut[]> {
    return await this.astronautRepository.find({}).catch(() => {
      throw new InternalServerErrorException();
    });
  }

  public async addAstronaut(
    newAstronautData: NewAstronautInput,
  ): Promise<Astronaut> {
    const newAstronaut = this.astronautRepository.create(newAstronautData);
    await this.astronautRepository.save(newAstronaut).catch((err) => {
      new InternalServerErrorException();
    });

    return newAstronaut;
  }

  public async removeAstronaut(astronautID: string) {
    const result: DeleteResult = await this.astronautRepository
      .delete({ id: astronautID })
      .catch((err) => {
        throw new InternalServerErrorException();
      });

    return result.affected === 0
      ? `User with given ID <${astronautID}> doesn't exist`
      : `User was successfully deleted`;
  }

  public async updateAstronaut(
    astronautID: string,
    updatedAstronautData: UpdatedAstronautInput,
  ) {
    const result = await this.astronautRepository
      .update({ id: astronautID }, { ...updatedAstronautData })
      .catch((err) => {
        throw new InternalServerErrorException();
      });
    return result.affected === 0
      ? `User with given ID <${astronautID}> doesn't exist`
      : `User was successfully updated`;
  }
}
