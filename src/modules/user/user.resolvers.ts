import { Resolvers } from '../types'
import { getMockUser } from '../../mocks'

const resolvers: Resolvers = {
	User: {
		id: user => user.id,
		name: user => user.name || ''
	},
	Query: {
		currentUser: getMockUser
	}
}

export default resolvers
