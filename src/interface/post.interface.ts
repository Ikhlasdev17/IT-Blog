export interface PostType {
	createdAt: string
	title: string
	excerpt: string
	lang: string
	slug: string
	id: string
	coverImage: CoverImage
	content: Content
	author: Author
}

export interface Author {
	avatar: CoverImage
	fullName: string
	id: string
	bio: string
}

export interface CoverImage {
	url: string
}

export interface Content {
	html: string
}
