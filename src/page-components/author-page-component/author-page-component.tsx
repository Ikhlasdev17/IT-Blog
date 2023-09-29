import PostItem from '@/components/post-item'
import { RootState } from '@/store/store'
import { Button } from '@nextui-org/react'
import { BiUserPlus } from 'react-icons/bi'
import { useSelector } from 'react-redux'

const AuthorPageComponent = () => {
	const { authorDetails } = useSelector((state: RootState) => state.authors)

	return (
		<div className='w-full'>
			<div className='flex gap-6 items-center p-2 border-b-[1px] dark:border-b-gray-700 border-b-gray-200 pb-6'>
				<img
					className='min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] object-cover rounded-full'
					src={authorDetails?.avatar?.url}
				/>
				<div className='flex flex-col'>
					<h1 className='text-2xl font-medium'>{authorDetails?.fullName}</h1>
					<span className='mt-2 text-sm'>{authorDetails?.bio}</span>
					<br />
					<Button
						className='text-sm'
						size='sm'
						color='primary'
						endContent={<BiUserPlus />}
					>
						{' '}
						Follow
					</Button>
				</div>
			</div>

			<div className='flex flex-col gap-4 my-6'>
				{authorDetails?.posts.map(item => (
					<PostItem key={item.id} post={item} />
				))}
			</div>
		</div>
	)
}

export default AuthorPageComponent
