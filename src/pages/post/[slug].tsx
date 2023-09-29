import { PostType } from '@/interface/post.interface'
import { PostDetailPageComponent } from '@/page-components'
import { PostService } from '@/services/post.service'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

interface Props {
	post: PostType
}

const PostDetails: FC<Props> = ({ post }) => {
	return (
		<>
			<PostDetailPageComponent post={post} />
		</>
	)
}

export default PostDetails

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const post = await PostService.findBySlug(params?.slug as string)

	return {
		props: {
			post,
		},
	}
}
