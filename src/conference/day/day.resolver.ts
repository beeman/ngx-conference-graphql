import { Resolver, Query, Arg } from 'type-graphql'

import { DayService } from './day.service'
import { Day } from './day.type'

@Resolver()
export class DayResolver {

  constructor(private service: DayService) {}

  @Query(returns => [ Day ])
  async days(): Promise<Day[]> {
    return await this.service.find()
  }

  @Query(returns => Day, { nullable: true })
  async day(@Arg('id') id: string): Promise<Day | undefined> {
    return await this.service.findOne(id)
  }

}
