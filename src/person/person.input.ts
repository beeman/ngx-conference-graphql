import { GraphQLString } from 'graphql'
import { InputType, Field } from "type-graphql";

@InputType()
export class PersonInput {
  @Field(type => GraphQLString)
  name: string;

  @Field(type => Date)
  dateOfBirth: Date;
}
