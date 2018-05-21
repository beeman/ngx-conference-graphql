import { Field, ObjectType,  } from 'type-graphql'
import { Base } from '../base/base.type'
import { Conference } from '../conference/conference.type'
import { Session } from '../session/session.type'

@ObjectType()
export class Day implements Base {

  @Field()
  id: string

  @Field()
  name: string

  @Field(type => Date)
  date: Date

  @Field(type => Conference, { nullable: true })
  conference: Conference

  @Field(type => [Session], { nullable: true })
  sessions?: Session[]

}
