import { Resolver, Query, Arg } from 'type-graphql'

import { ConferenceService } from './conference.service'
import { Conference } from './conference.type'

@Resolver()
export class ConferenceResolver {

  constructor(private service: ConferenceService) {}

  @Query(returns => [ Conference ])
  async conferences(): Promise<Conference[]> {
    return await this.service.find()
  }

  @Query(returns => Conference, { nullable: true })
  async conference(@Arg('id') id: string): Promise<Conference | undefined> {
    return await this.service.findOne(id)
  }

}
