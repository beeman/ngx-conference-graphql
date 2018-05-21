import { Resolver, Query, Arg } from 'type-graphql'

import { SpeakerService } from './speaker.service'
import { Speaker } from './speaker.type'

@Resolver()
export class SpeakerResolver {

  constructor(private service: SpeakerService) {}

  @Query(returns => [ Speaker ])
  async speakers(): Promise<Speaker[]> {
    return await this.service.find()
  }

  @Query(returns => Speaker, { nullable: true })
  async speaker(@Arg('id') id: string): Promise<Speaker | undefined> {
    return await this.service.findOne(id)
  }

}
