interface WorkExperience {
	title: string
	location: string
	company: string
	employmentType: string
	startDate: string
	endDate: string
	description: string
}

const ExperienceItem = ({ experience }: { experience: WorkExperience }) => (
	<div className='flex flex-col items-start justify-start gap-1 font-mono print:mb-4'>
		<div className='flex flex-wrap items-start justify-between gap-2 self-stretch'>
			<div className='flex flex-wrap items-center justify-start gap-2'>
				<p className='font-semibold'>{experience.title}</p>
				<div className='relative flex items-center justify-center gap-2.5 overflow-hidden rounded bg-text/50 px-2 py-0.5'>
					<p className='text-center font-semibold text-surface text-xs'>{experience.location}</p>
				</div>
			</div>
			<p className='m-0 text-right text-mutted text-xs'>
				{experience.startDate} - {experience.endDate}
			</p>
		</div>
		<div className='relative flex flex-col items-start justify-start gap-3'>
			<p className='flex flex-wrap gap-1 self-stretch text-left font-mono text-mutted text-sm capitalize'>
				<span>{experience.company}</span>
				<span>·</span>
				<span>{experience.employmentType}</span>
			</p>
			<p className='self-stretch text-left text-sm text-text/70 leading-6'>
				{experience.description}
			</p>
		</div>
	</div>
)

export { ExperienceItem }
