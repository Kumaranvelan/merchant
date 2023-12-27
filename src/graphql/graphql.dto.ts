/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Graphqldto {
  @Field(() => String, { nullable: true })
  name: string;
  @Field(() => String, { nullable: true })
  email: string;
  @Field(() => String, { nullable: true })
  age: string;
  @Field(() => Number, { nullable: true })
  phone: number;
}
