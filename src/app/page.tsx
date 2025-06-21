import { BlogPosts } from '_/components/posts'

export default function Page() {
	return (
		<section>
			<h1 className='mb-8 font-semibold text-2xl tracking-tighter'>My Portfolio</h1>
			<div className='my-8'>
				<BlogPosts />
			</div>
		</section>
	)
}
