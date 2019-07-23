import { GraphQLModule } from '@graphql-modules/core'

import typeDefs from './post.schema'
import resolvers from './post.resolvers'

export default new GraphQLModule({
	typeDefs,
	resolvers
})
