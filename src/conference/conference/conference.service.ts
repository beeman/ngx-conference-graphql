import { Inject, Service } from 'typedi'

import { BaseService } from '../base/base.service'
import { Conference } from './conference.type'

@Service()
export class ConferenceService extends BaseService<Conference> {

  constructor(@Inject('CONFERENCES') registry: Conference[]) {
    super()
    this.registry = registry
  }

}
