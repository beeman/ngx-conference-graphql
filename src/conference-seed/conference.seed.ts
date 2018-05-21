import { plainToClass } from 'class-transformer'

import { Conference } from '../conference/conference/conference.type'
import { daySeed } from './day.seed'

export const conference1 = plainToClass(Conference, {
  id: 'ng-atl-2018',
  name: 'NG Atlanta 2018',
  days: daySeed,
})

export const conference2 = plainToClass(Conference, {
  id: 'ng-colombia 2018',
  name: 'NG Colombia 2018',
})

export const conferenceSeed = [conference1, conference2]
