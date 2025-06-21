import { ContactLink } from "_/components/resume/contact-link"
import { GithubIcon, LinkedInIcon, MailIcon } from "_/components/resume/social-links"
import { resumeData } from "_/data/repository/resume"

function ArrowIcon() {
	return (
		<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<title>Arrow Icon</title>
			<path
				d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
				fill='currentColor'
			/>
		</svg>
	)
}

export default function Footer() {
	return (
		<footer className="my-8">
			<div className='max-w-md space-y-4'>
				<div className='flex gap-x-3 text-sm print:hidden' aria-label='Contact links'>
					<ContactLink href={`mailto:${resumeData.email}`} ariaLabel='Email'>
						<MailIcon />
					</ContactLink>
					<ContactLink href={resumeData.linkedin} ariaLabel='LinkedIn'>
						<LinkedInIcon />
					</ContactLink>
					<a
						className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
						rel='noopener noreferrer'
						target='_blank'
						href='https://github.com/thommorais'
					>
						<GithubIcon />
					</a>
				</div>
				<div
					className='hidden gap-x-2 text-md print:flex print:text-xs'
					aria-label='Print contact information'
				>
					<a className='underline hover:text-foreground/70' href={resumeData.personalWebsite}>
						{resumeData.personalWebsite}
					</a>
					<span aria-hidden='true'>/</span>
					<a
						className='underline hover:text-foreground/70'
						href={`mailto:${resumeData.email}`}
					>
						{resumeData.email}
					</a>
					<span aria-hidden='true'>/</span>
					<a
						className='underline hover:text-foreground/70'
						href='https://github.com/thommorais'
					>
						github
					</a>
				</div>
			</div>
		</footer>
	)
}
