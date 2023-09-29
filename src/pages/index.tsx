import { AuthorType } from '@/interface/author.interface'
import { PostType } from '@/interface/post.interface'
import { HomePageComponent } from '@/page-components'
import { AuthorService } from '@/services/author.service'
import { PostService } from '@/services/post.service'
import { getAuthors } from '@/store/authors/author.slice'
import { getPosts } from '@/store/posts/post.slice'
import { GetServerSideProps } from 'next'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

interface HomeProps {
	posts: PostType[] | []
	authors: AuthorType[] | []
}

const Home: FC<HomeProps> = ({ posts, authors }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPosts(posts))
		dispatch(getAuthors(authors))
	}, [])

	return (
		<>
			<HomePageComponent />
		</>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
	const posts = await PostService.fetchPosts()
	const authors = await AuthorService.fetchAllAuthors()

	return {
		props: {
			posts,
			authors,
		},
	}
}
