import { Field, ID } from 'type-graphql'

export class Base {
  @Field(type => ID)
  id: string

  @Field(type => Date)
  created?: Date

  @Field(type => Date)
  updated?: Date
}
