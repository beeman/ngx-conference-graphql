import { GraphQLString } from 'graphql'
import { InterfaceType, Field, Int, ID } from "type-graphql";

import { IResource } from "../resource/resource.interface";

@InterfaceType()
export abstract class IPerson implements IResource {
  @Field(type => ID)
  id: string;

  @Field(type => GraphQLString)
  name: string;

  @Field(type => Int)
  age: number;
}
