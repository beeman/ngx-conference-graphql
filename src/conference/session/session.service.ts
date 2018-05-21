import { Inject, Service } from 'typedi'

import { BaseService } from '../base/base.service'
import { Session } from './session.type'

@Service()
export class SessionService extends BaseService<Session> {
  
  constructor(@Inject('SESSIONS') registry: Session[]) {
    super()
    this.registry = registry
  }

}
