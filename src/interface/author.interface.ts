import { PostType } from './post.interface'

export interface AuthorType {
	id?: string
	fullName?: string
	avatar?: Avatar
	bio?: string
}

export interface Avatar {
	url?: string
}

export interface AuthorDetailsType extends AuthorType {
	posts: PostType[]
}
