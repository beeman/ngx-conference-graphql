import { Resolver, Query, Arg } from 'type-graphql'

import { SessionService } from './session.service'
import { Session } from './session.type'

@Resolver()
export class SessionResolver {

  constructor(private service: SessionService) {}

  @Query(returns => [ Session ])
  async sessions(): Promise<Session[]> {
    return await this.service.find()
  }

  @Query(returns => Session, { nullable: true })
  async session(@Arg('id') id: string): Promise<Session | undefined> {
    return await this.service.findOne(id)
  }

}
