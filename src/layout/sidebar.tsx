import { RootState } from '@/store/store'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Sidebar = () => {
	const { authors } = useSelector((state: RootState) => state.authors)

	return (
		<div>
			{authors.map((item, index) => (
				<div
					className={`flex gap-3  py-3 ${
						index !== authors.length - 1 &&
						'border-b-[1px] dark:border-b-gray-700 border-b-gray-200'
					}`}
				>
					<img
						className='max-w-[50px] min-w-[50px] max-h-[50px] object-cover min-h-[50px] rounded-md'
						src={item.avatar?.url}
					/>
					<div className='flex flex-col'>
						<h4 className='transition duration-200 hover:text-indigo-500'>
							<Link href={`/author/${item.id}`}>{item.fullName}</Link>
						</h4>
						<span className='opacity-60 text-xs'>
							{item.bio?.slice(0, 60)}...
						</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default Sidebar
