import { Container } from 'typedi'
import { useContainer } from 'type-graphql'

import { conferenceSeed } from './conference-seed/conference.seed'
import { daySeed } from './conference-seed/day.seed'
import { sessionSeed } from './conference-seed/session.seed'
import { speakerSeed } from './conference-seed/speaker.seed'
import { sponsorSeed } from './conference-seed/sponsor.seed'

Container.set({ id: 'CONFERENCES', factory: () => conferenceSeed.slice() });
Container.set({ id: 'DAYS', factory: () => daySeed.slice() });
Container.set({ id: 'SESSIONS', factory: () => sessionSeed.slice() });
Container.set({ id: 'SPEAKERS', factory: () => speakerSeed.slice() });
Container.set({ id: 'SPONSORS', factory: () => sponsorSeed.slice() });

useContainer(Container)
