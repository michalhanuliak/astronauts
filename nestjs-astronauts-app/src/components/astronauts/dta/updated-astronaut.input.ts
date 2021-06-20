import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatedAstronautInput {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  birthDate: Date;

  @Field({ nullable: true })
  superpower: string;
}
