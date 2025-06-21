import { tv } from '_/lib/tv'

const cx = tv({
	base: ['w-full overflow-hidden'],
})

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <section className={cx()}>{children}</section>
}
