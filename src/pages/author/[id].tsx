import { AuthorDetailsType, AuthorType } from '@/interface/author.interface'
import AuthorPageComponent from '@/page-components/author-page-component/author-page-component'
import { AuthorService } from '@/services/author.service'
import { getAuthorDetails, getAuthors } from '@/store/authors/author.slice'
import { GetServerSideProps } from 'next'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

interface Props {
	authorDetails: AuthorDetailsType
	authors: AuthorType[]
}

const AuthorProfile: FC<Props> = ({ authorDetails, authors }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAuthorDetails(authorDetails))
		dispatch(getAuthors(authors))
	}, [])

	return (
		<>
			<AuthorPageComponent />
		</>
	)
}

export default AuthorProfile

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const authorDetails = await AuthorService.getAuthorDetails(
		params?.id as string
	)
	const authors = await AuthorService.fetchAllAuthors()

	return {
		props: {
			authorDetails,
			authors,
		},
	}
}
