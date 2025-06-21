const SkillBadge = ({ name }: { name: string }) => (
	<li>
		<div
			className='pointer-events-none inline-flex items-center text-nowrap rounded-md border border-transparent bg-primary/80 px-2 py-0.5 font-mono font-semibold text-primary-foreground text-xs transition-colors hover:bg-primary/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 print:text-[10px]'
			aria-label={`Skill: ${name}`}
		>
			{name}
		</div>
	</li>
)

export { SkillBadge }
