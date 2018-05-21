import { Field, ObjectType } from 'type-graphql'
import { Base } from '../base/base.type'
import { Session } from '../session/session.type'

@ObjectType()
export class Speaker implements Base {

  @Field()
  id: string

  @Field()
  name: string

  @Field()
  email?: string

  @Field()
  company?: string

  @Field()
  avatarUrl?: string

  @Field()
  bio?: string

  @Field()
  homepage?: string

  @Field()
  twitter?: string

  @Field(type => [ Session ])
  sessions?: Session[]

}
