import { Inject, Service } from 'typedi'

import { BaseService } from '../base/base.service'
import { Speaker } from './speaker.type'

@Service()
export class SpeakerService extends BaseService<Speaker> {
  
  constructor(@Inject('SPEAKERS') registry: Speaker[]) {
    super()
    this.registry = registry
  }

}
