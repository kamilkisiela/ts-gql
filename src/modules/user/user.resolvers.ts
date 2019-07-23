import { User } from '../types'
import { getMockUser } from '../../mocks'

const resolvers: any = {
	User: {
		id: (user: User) => user.id,
		name: (user: User) => user.name || ''
	},
	Query: {
		currentUser: getMockUser
	}
}

export default resolvers
