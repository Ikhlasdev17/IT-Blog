import PostItem from '@/components/post-item'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

const HomePageComponent = () => {
	const { posts } = useSelector((state: RootState) => state.posts)

	return (
		<div className='flex flex-col gap-3'>
			{posts.map(item => (
				<PostItem post={item} key={item.id} />
			))}
		</div>
	)
}

export default HomePageComponent
