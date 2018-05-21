import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'

import { ConferenceResolver } from './conference/conference/conference.resolver'
import { DayResolver } from './conference/day/day.resolver'
import { SessionResolver } from './conference/session/session.resolver'
import { SpeakerResolver } from './conference/speaker/speaker.resolver'
import { SponsorResolver } from './conference/sponsor/sponsor.resolver'


export async function setupSchema(): Promise<GraphQLSchema> {
  return await buildSchema({
    resolvers: [
      ConferenceResolver,
      DayResolver,
      SessionResolver,
      SpeakerResolver,
      SponsorResolver,
    ],
  })
}