import { PostType } from '@/interface/post.interface'
import HTMLReactParser from 'html-react-parser'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
	post: PostType
}

const PostDetailPageComponent: FC<Props> = ({ post }) => {
	return (
		<div>
			<h1 className='text-3xl font-medium'>{post.title}</h1>
			<div className='flex gap-3 items-center my-6'>
				<img
					className='w-[42px] h-[42px] rounded-full object-cover'
					src={post.author.avatar.url}
				/>
				<div className='flex flex-col'>
					<h5 className='font-medium transition duration-200 hover:text-indigo-500'>
						<Link href={`/author/${post.author.id}`}>
							{post.author.fullName}
						</Link>
					</h5>
					<span className='opacity-60 text-xs mt-[1px]'>{post.createdAt}</span>
				</div>
			</div>
			<hr className='dark:border-gray-700 border-gray-200' />
			<p className='my-4'>{post.excerpt}</p>
			<img src={post.coverImage.url} className='w-full' />
			<p className='my-6'>{HTMLReactParser(post.content.html)}</p>

			<div className='relative dark:bg-gray-900 w-full p-4 rounded-lg border-2 dark:border-slate-700 border-slate-200 mt-[90px] mb-6'>
				<img
					src={post.author.avatar.url}
					className='w-[100px] h-[100px] rounded-full border-2 border-primary-500 p-1 object-cover absolute top-[-50px] left-[50%] translate-x-[-50%]'
				/>
				<h1 className='text-center mt-[50px] text-2xl font-medium'>
					{post.author.fullName}
				</h1>
				<p className='mt-2 text-center italic'>"{post.author.bio}"</p>
			</div>
		</div>
	)
}

export default PostDetailPageComponent
