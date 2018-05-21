import { Field, ObjectType } from 'type-graphql'
import { Base } from '../base/base.type'
import { Session } from '../session/session.type'

@ObjectType()
export class Sponsor implements Base {

  @Field()
  id: string

  @Field()
  name: string

  @Field()
  imageUrl?: string

  @Field()
  description?: string

  @Field()
  url?: string

  @Field()
  type?: string

  @Field()
  twitter?: string

  @Field(type => [Session])
  sessions?: Session[]

}
