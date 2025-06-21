import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '_/components/footer'
import { Navbar } from '_/components/nav'
import { tv } from '_/lib/tv'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './global.css'

const title = 'Thom Morais — Developer.'
const description =
	"I'm a Brazilian frontend developer, I care about speed, SEO, accessibility and good UX, I have experience with React and React ecosystem."

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		url: 'https://thommorais.me/',
		siteName: title,
		images: [
			{
				url: 'https://thommorais.me/og_image.jpg',
				width: 800,
				height: 600,
			},
			{
				url: 'https://thommorais.me/og_image.jpg',
				width: 1800,
				height: 1600,
				alt: description,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
}

const cx = tv({
	base: ['bg-surface text-black dark:text-white', GeistSans.variable, GeistMono.variable],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={cx()}>
			<body className='mx-4 mt-8 max-w-xl antialiased lg:mx-auto'>
				<main className='mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0'>
					<Navbar />
					{children}
					<Footer />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	)
}
