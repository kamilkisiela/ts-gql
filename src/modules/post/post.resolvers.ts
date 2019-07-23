import { Post } from '../types'
import { getMockPost, getMockUser } from '../../mocks'

const resolvers: any = {
	Post: {
		id: (post: Post) => post.id,
		title: (post: Post) => post.title || '',
		body: (post: Post) => post.body || '',
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
