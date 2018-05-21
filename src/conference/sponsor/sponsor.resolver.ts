import { Resolver, Query, Arg } from 'type-graphql'

import { SponsorService } from './sponsor.service'
import { Sponsor } from './sponsor.type'

@Resolver()
export class SponsorResolver {

  constructor(private service: SponsorService) {}

  @Query(returns => [ Sponsor ])
  async sponsors(): Promise<Sponsor[]> {
    return await this.service.find()
  }

  @Query(returns => Sponsor, { nullable: true })
  async sponsor(@Arg('id') id: string): Promise<Sponsor | undefined> {
    return await this.service.findOne(id)
  }

}
