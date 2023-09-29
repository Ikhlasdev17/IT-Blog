import { AuthorDetailsType, AuthorType } from '@/interface/author.interface'
import request, { gql } from 'graphql-request'
import { API_URL } from './post.service'

export const AuthorService = {
	async fetchAllAuthors() {
		const req = gql`
			query Authors {
				authors {
					id
					fullName
					avatar {
						url
					}
					bio
				}
			}
		`

		const response = await request<{ authors: AuthorType[] }>(
			API_URL as string,
			req
		)

		return response.authors
	},
	async getAuthorDetails(id: string) {
		console.log(id)

		const req = gql`
			query ($id: ID!) {
				authors(where: { id: $id }) {
					id
					fullName
					avatar {
						url
					}
					bio
					posts {
						title
						slug
						coverImage {
							url
						}
						id
						excerpt
						createdAt
						author {
							id
							avatar {
								url
							}
							fullName
						}
					}
				}
			}
		`

		const response = await request<{ authors: AuthorDetailsType[] }>(
			API_URL as string,
			req,
			{ id: id }
		)
		return response.authors[0]
	},
}
