import { PostType } from '@/interface/post.interface'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import { FC } from 'react'

const PostItem: FC<{ post: PostType }> = ({ post }) => {
	dayjs.extend(relativeTime)
	const postDate = dayjs(post.createdAt).fromNow()

	return (
		<div className='flex gap-3 border-[1px] rounded-md p-3 dark:border-gray-700 border-gray-200 xs:flex-col md:flex-row'>
			<div className='xs:w-full md:w-[70%]'>
				<div className='flex gap-3 items-center'>
					<Link
						href={`/author/${post.author.id}`}
						className='flex items-center gap-3 '
					>
						<img
							src={post?.author.avatar.url}
							className='w-[42px] h-[42px] rounded-full'
						/>

						<span>{post.author.fullName}</span>
					</Link>
					<span>·</span>
					<span className='opacity-70 text-sm'>{postDate}</span>
				</div>
				<h2 className='my-3 font-bold text-xl hover:text-indigo-500 transition duration-200'>
					<Link href={`/post/${post.slug}`}>{post.title}</Link>
				</h2>
				<p>{post.excerpt}</p>
			</div>
			<div className='xs:w-full md:w-[30%]'>
				<img
					src={post.coverImage.url}
					alt={post.title}
					className='rounded-md w-full'
				/>
			</div>
		</div>
	)
}

export default PostItem
