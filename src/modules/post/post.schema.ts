import { gql } from 'apollo-server-express'

export default gql`
	extend type User {
		posts: [Post]
	}

	type Post {
		id: ID!
		user: User
		title: String
		body: String
	}

	type Query {
		allPosts: [Post]
	}
`
