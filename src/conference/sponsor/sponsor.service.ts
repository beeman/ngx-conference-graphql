import { Inject, Service } from 'typedi'

import { BaseService } from '../base/base.service'
import { Sponsor } from './sponsor.type'

@Service()
export class SponsorService extends BaseService<Sponsor> {
  
  constructor(@Inject('SPONSORS') registry: Sponsor[]) {
    super()
    this.registry = registry
  }

}
