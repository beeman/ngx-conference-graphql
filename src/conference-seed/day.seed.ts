import { plainToClass } from 'class-transformer'

import { Day } from '../conference/day/day.type'
import { conference1 } from './conference.seed'
import { sessionsDay1, sessionsDay2, sessionsDay3, sessionsDay4 } from './session.seed'

export const day1: Day = plainToClass(Day, {
  id: 'ngatl-day-id-1',
  name: 'Workshops day 2',
  date: new Date('2018-01-30'),
  conference: conference1,
  sessions: [...sessionsDay1]
})
export const day2: Day = plainToClass(Day, {
  id: 'ngatl-day-id-2',
  name: 'Workshops day 2',
  date: new Date('2018-01-31'),
  conference: conference1,
  sessions: [...sessionsDay2]
})
export const day3: Day = plainToClass(Day, {
  id: 'ngatl-day-id-3',
  name: 'Conference day 1',
  date: new Date('2018-02-01'),
  conference: conference1,
  sessions: [...sessionsDay3]
})
export const day4: Day = plainToClass(Day, {
  id: 'ngatl-day-id-4',
  name: 'Conference day 2',
  date: new Date('2018-02-02'),
  conference: conference1,
  sessions: [...sessionsDay4]
})

export const daySeed = [ day1, day2, day3, day4 ]
