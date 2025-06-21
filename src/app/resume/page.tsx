import { ExperienceItem } from '_/components/resume/experience'
import { SkillBadge } from '_/components/resume/skill-badge'
import { resumeData } from '_/data/repository/resume'

export default function ResumePage() {
	return <div className='flex flex-col gap-6' aria-label='Resume Content'>
		<section className='flex min-h-0 flex-col gap-y-3 print:gap-y-1'>
			<div className='text-pretty leading-7 print:text-xs' aria-labelledby='about-section'>
				{resumeData.about}
			</div>
		</section>

		{/* Work Experience Section */}
		<section className='mt-4 flex min-h-0 flex-col gap-y-3 print:gap-y-1'>
			<h2 className='font-bold text-lg' id='work-experience'>
				Work Experience
			</h2>
			<div className='flex flex-col gap-8' role='feed' aria-labelledby='work-experience'>
				{resumeData.workExperience.map(exp => (
					<ExperienceItem key={exp.title + exp.company} experience={exp} />
				))}
			</div>
		</section>

		{/* Education Section */}
		<section className='mt-4 flex min-h-0 flex-col gap-y-3 print:gap-y-1'>
			<h2 className='font-bold text-lg' id='education-section'>
				Education
			</h2>
			<div className='flex flex-col gap-4' role='feed' aria-labelledby='education-section'>
				{resumeData.education.map(edu => (
					<div key={edu.degree} className='flex flex-col gap-1'>
						<h3 className='font-medium text-md'>{edu.degree}</h3>
						<p className='text-sm'>
							{edu.institution}, {edu.location} — {edu.startDate} - {edu.endDate}
						</p>
					</div>
				))}
			</div>
		</section>

		{/* Languages Section */}
		<section className='mt-4 flex min-h-0 flex-col gap-y-3 print:gap-y-1'>
			<h2 className='font-bold text-lg' id='languages-section'>
				Languages
			</h2>
			<div className='flex flex-col gap-1' role='feed' aria-labelledby='languages-section'>
				{resumeData.languages.map(lang => (
					<p key={lang.name} className='text-sm'>
						{lang.name} ({lang.proficiency})
					</p>
				))}
			</div>
		</section>

		{resumeData.skills.length ? (
			<section className='flex min-h-0 flex-col gap-y-3 print:gap-y-1'>
				<h2 className='font-bold text-lg' id='skills-section'>
					Technical Skills
				</h2>
				<ul
					className='flex list-none flex-wrap gap-1 p-0'
					aria-label='List of skills'
					aria-labelledby='skills-section'
				>
					{resumeData.skills.map(skill => (
						<SkillBadge key={skill.name} name={skill.name} />
					))}
				</ul>
			</section>
		) : null}

		<section className='mt-5 w-full items-center justify-between md:flex'>
			<p className='items-center text-pretty font-mono text-foreground text-xs'>
				{resumeData.location}
			</p>
		</section>
	</div>
}
