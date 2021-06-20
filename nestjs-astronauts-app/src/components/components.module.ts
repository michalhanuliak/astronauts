import { Module } from '@nestjs/common';
import { AstronautsModule } from './astronauts/astronauts.module';

@Module({
  imports: [AstronautsModule],
})
export class ComponentsModule {}
