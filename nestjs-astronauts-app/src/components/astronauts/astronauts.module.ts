import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AstronautsResolver } from './astronauts.resolver';
import { AstronautsService } from './astronauts.service';
import { Astronaut } from './entities/astronaut';

@Module({
  imports: [TypeOrmModule.forFeature([Astronaut])],
  providers: [AstronautsService, AstronautsResolver],
  exports: [AstronautsService],
})
export class AstronautsModule {}
