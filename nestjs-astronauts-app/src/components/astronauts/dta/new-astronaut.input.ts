import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewAstronautInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  birthDate: Date;

  @Field()
  superpower: string;
}
