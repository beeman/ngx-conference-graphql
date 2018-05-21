import { GraphQLString } from 'graphql'
import { InputType, Field } from "type-graphql";

import { PersonInput } from "../person/person.input";

@InputType()
export class StudentInput extends PersonInput {
  @Field(type => GraphQLString)
  universityName: string;
}
