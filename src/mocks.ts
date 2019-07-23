import { User, Post } from './modules/types'

export const getMockUser = (): User => ({
	id: 'userID',
	name: 'Post Malone'
})

export const getMockPost = (): Post => ({
	id: 'postID',
	title: 'Hello',
	body: 'World'
})
