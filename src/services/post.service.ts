import { PostType } from '@/interface/post.interface'
import request, { gql } from 'graphql-request'

export const API_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL

export const PostService = {
	async fetchPosts() {
		const postsReq = gql`
			query Posts {
				posts {
					createdAt
					title
					excerpt
					lang
					slug
					id
					coverImage {
						url
					}
					content {
						html
					}
					author {
						avatar {
							url
						}
						fullName
						id
						bio
					}
				}
			}
		`

		const response = await request<{ posts: PostType[] }>(
			API_URL as string,
			postsReq
		)
		return response.posts
	},
	async findBySlug(slug: string) {
		const req = gql`
			query Post($slug: String) {
				posts(where: { slug: $slug }) {
					createdAt
					title
					excerpt
					lang
					slug
					id
					coverImage {
						url
					}
					content {
						html
					}
					author {
						avatar {
							url
						}
						fullName
						id
						bio
					}
				}
			}
		`

		const response = await request<{ posts: PostType[] }>(
			API_URL as string,
			req,
			{ slug }
		)

		return response.posts[0]
	},
}
