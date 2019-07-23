import { Resolvers } from '../types'
import { getMockPost, getMockUser } from '../../mocks'

const resolvers: Resolvers = {
	Post: {
		id: post => post.id,
		title: post => post.title || '',
		body: post => post.body || '',
		user: getMockUser
	},
	User: {
		posts: () => [getMockPost()]
	},
	Query: {
		allPosts: () => [getMockPost()]
	}
}

export default resolvers
