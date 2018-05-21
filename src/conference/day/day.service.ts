import { Inject, Service } from 'typedi'

import { BaseService } from '../base/base.service'
import { Day } from './day.type'

@Service()
export class DayService extends BaseService<Day> {
  
  constructor(@Inject('DAYS') registry: Day[]) {
    super()
    this.registry = registry
  }

}
