import { formatDate, getBlogPosts } from '_/app/blog/utils'
import Link from 'next/link'

export function BlogPosts() {
	const allBlogs = getBlogPosts()

	return allBlogs
		.sort((a, b) => {
			if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
				return -1
			}
			return 1
		})
		.map(post => (
			<Link key={post.slug} className='mb-4 flex flex-col space-y-1' href={`/blog/${post.slug}`}>
				<div className='flex w-full flex-col space-x-0 md:flex-row md:space-x-2'>
					<p className='w-[100px] tabular-nums opacity-50'>
						{formatDate(post.metadata.publishedAt, false)}
					</p>
					<p className='tracking-tight opacity-100 hover:opacity-90'>
						{post.metadata.title}
					</p>
				</div>
			</Link>
		))
}
