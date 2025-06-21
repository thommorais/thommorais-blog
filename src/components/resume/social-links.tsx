const GlobeIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='size-4'
	>
		<circle cx='12' cy='12' r='10' />
		<path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
		<path d='M2 12h20' />
	</svg>
)

const MailIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='size-4'
	>
		<rect width='20' height='16' x='2' y='4' rx='2' />
		<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
	</svg>
)

const LinkedInIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='size-4'
	>
		<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
		<rect width='4' height='12' x='2' y='9' />
		<circle cx='4' cy='4' r='2' />
	</svg>
)

export { GlobeIcon, LinkedInIcon, MailIcon }
