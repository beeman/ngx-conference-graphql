import { Field, ObjectType } from 'type-graphql'
import { Base } from '../base/base.type'
import { Conference } from '../conference/conference.type'
import { Day } from '../day/day.type'
import { Speaker } from '../speaker/speaker.type'
import { Sponsor } from '../sponsor/sponsor.type'

@ObjectType()
export class Session implements Base {

  @Field()
  id: string

  @Field()
  title: string

  @Field()
  type: string

  @Field(type => Day)
  day: Day

  @Field()
  start: number

  @Field()
  end: number

  @Field()
  duration?: number

  @Field({ nullable: true })
  description?: string

  @Field(type => Conference)
  conference?: Conference

  @Field(type => [Speaker])
  speakers?: Speaker[]

  @Field(type => [Sponsor])
  sponsors?: Sponsor[]

}
