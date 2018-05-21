import { Field, ObjectType } from 'type-graphql'

import { Base } from '../base/base.type'
import { Day } from '../day/day.type'

@ObjectType()
export class Conference implements Base {

  @Field()
  id: string

  @Field()
  name: string

  @Field(type => [Day], { nullable: true })
  days: Day[]

}
