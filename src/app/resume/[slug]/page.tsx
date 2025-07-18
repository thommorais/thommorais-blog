import { formatDate, getBlogPosts } from '_/app/blog/utils'
import { baseUrl } from '_/app/sitemap'
import { CustomMDX } from '_/components/mdx'
import type { MetaDataProps, PageProps } from '_/types'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const posts = getBlogPosts()

	return posts.map(post => ({
		slug: post.slug,
	}))
}

export async function generateMetadata({ params }: MetaDataProps) {
	const { slug } = await params

	const post = getBlogPosts().find(post => post.slug === slug)
	if (!post) {
		return {}
	}

	const { title, publishedAt: publishedTime, summary: description, image } = post.metadata
	const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${baseUrl}/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default async function Blog({ params }: PageProps) {
	const { slug } = await params
	const post = getBlogPosts().find(post => post.slug === slug)

	if (!post) {
		notFound()
	}

	return (
		<section>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `${baseUrl}${post.metadata.image}`
							: `/og?title=${encodeURIComponent(post.metadata.title)}`,
						url: `${baseUrl}/blog/${post.slug}`,
						author: {
							'@type': 'Person',
							name: 'My Portfolio',
						},
					}),
				}}
			/>
			<h1 className='title font-semibold text-2xl tracking-tighter'>{post.metadata.title}</h1>
			<div className='mt-2 mb-8 flex items-center justify-between text-sm'>
				<p className='text-neutral-600 dark:text-neutral-400'>
					{formatDate(post.metadata.publishedAt)}
				</p>
			</div>
			<article className='prose'>
				<CustomMDX source={post.content} />
			</article>
		</section>
	)
}
