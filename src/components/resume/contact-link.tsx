const ContactLink = ({
	href,
	ariaLabel,
	children,
}: { href: string; ariaLabel: string; children: React.ReactNode }) => (
	<a
		href={href}
		aria-label={ariaLabel}
		target='_blank'
		rel='noopener noreferrer'
		className='inline-flex size-8 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-background font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
	>
		{children}
	</a>
)

export { ContactLink }
