import { GraphQLResolveInfo } from 'graphql'
import { ModuleContext } from '@graphql-modules/core'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
}

export type Post = {
	__typename?: 'Post'
	id: Scalars['ID']
	user?: Maybe<User>
	title?: Maybe<Scalars['String']>
	body?: Maybe<Scalars['String']>
}

export type Query = {
	__typename?: 'Query'
	allPosts?: Maybe<Array<Maybe<Post>>>
	currentUser: User
}

export type User = {
	__typename?: 'User'
	posts?: Maybe<Array<Maybe<Post>>>
	id: Scalars['ID']
	name?: Maybe<Scalars['String']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>
	resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>
}

export type SubscriptionResolver<
	TResult,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Query: ResolverTypeWrapper<{}>
	Post: ResolverTypeWrapper<Post>
	ID: ResolverTypeWrapper<Scalars['ID']>
	User: ResolverTypeWrapper<User>
	String: ResolverTypeWrapper<Scalars['String']>
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Query: {}
	Post: Post
	ID: Scalars['ID']
	User: User
	String: Scalars['String']
	Boolean: Scalars['Boolean']
}

export type PostResolvers<
	ContextType = ModuleContext,
	ParentType = ResolversParentTypes['Post']
> = {
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
	title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type QueryResolvers<
	ContextType = ModuleContext,
	ParentType = ResolversParentTypes['Query']
> = {
	allPosts?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Post']>>>,
		ParentType,
		ContextType
	>
	currentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>
}

export type UserResolvers<
	ContextType = ModuleContext,
	ParentType = ResolversParentTypes['User']
> = {
	posts?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Post']>>>,
		ParentType,
		ContextType
	>
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type Resolvers<ContextType = ModuleContext> = {
	Post?: PostResolvers<ContextType>
	Query?: QueryResolvers<ContextType>
	User?: UserResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ModuleContext> = Resolvers<ContextType>
