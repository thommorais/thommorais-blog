// Define interfaces for our component props and data structures
interface Skill {
	name: string
}

interface WorkExperience {
	title: string
	location: string
	company: string
	employmentType: string
	startDate: string
	endDate: string
	description: string
}

interface Education {
	degree: string
	institution: string
	location: string
	startDate: string
	endDate: string
}

interface Language {
	name: string
	proficiency: string
}

interface ResumeData {
	name: string
	summary: string
	location: string
	about: string
	personalWebsite: string
	email: string
	linkedin: string
	skills: Skill[]
	workExperience: WorkExperience[]
	education: Education[]
	languages: Language[]
}

// Data with neutral, technical language
const resumeData: ResumeData = {
	name: 'Thom Morais',
	summary:
		'Frontend engineer focused on performance, SEO, and accessibility. Works in React across the whole stack, from interface design through to the backend.',
	location: 'Santa Catarina, Brasil, UTC-3',
	about:
		'Brazilian developer. I build web applications that load fast, rank well, and work for everyone. Most of my work is in React, Next.js, and React Native, and I handle the backend when a project needs it. I also design, and I use Three.js and GLSL for 3D on the web.',
	personalWebsite: 'http://thommorais.me',
	email: 'thommorais@gmail.com',
	linkedin: 'https://linkedin.com/in/thom-morais',
	skills: [
		{ name: 'React' },
		{ name: 'Next.js' },
		{ name: 'React Native' },
		{ name: 'TypeScript' },
		{ name: 'JavaScript' },
		{ name: 'Node.js' },
		{ name: 'HTML' },
		{ name: 'CSS' },
		{ name: 'Performance Optimization' },
		{ name: 'Accessibility' },
		{ name: 'SEO' },
		{ name: 'Responsive Design' },
		{ name: 'UI/UX Design' },
		{ name: 'Three.js' },
		{ name: 'GLSL' },
	],
	education: [
		{
			degree: "Bachelor's Degree in Software Engineering",
			institution: 'Descomplica',
			location: 'Chapecó',
			startDate: '2022',
			endDate: 'Present',
		},
		{
			degree: 'UI Design',
			institution: 'Limoges University',
			location: 'France',
			startDate: '2013',
			endDate: '2014',
		},
		{
			degree: 'Three.js Journey',
			institution: 'Bruno Simon',
			location: 'Online',
			startDate: 'Oct 2021',
			endDate: 'Dec 2021',
		},
		{
			degree: '3D Modeling',
			institution: 'EBAC',
			location: 'Online',
			startDate: 'Mar 2022',
			endDate: 'Present',
		},
	],
	languages: [
		{
			name: 'Portuguese',
			proficiency: 'Native',
		},
		{
			name: 'English',
			proficiency: 'Fluent',
		},
	],
	workExperience: [
		{
			title: 'Senior Frontend Engineer',
			location: 'Remote',
			company: 'Welligence',
			employmentType: 'full-time',
			startDate: 'Jun 2025',
			endDate: 'Present',
			description:
				'Build and maintain the interface for an energy analytics platform. Most of my time goes to the frontend, and I take on design work as well.',
		},
		{
			title: 'Technical Lead',
			location: 'Porto Alegre, RS, Brazil',
			company: 'fuerza studio',
			employmentType: 'full-time',
			startDate: 'May 2023',
			endDate: 'May 2025',
			description:
				'Led technical planning and architecture for web and mobile projects. Mentored junior developers, set the coding standards the team worked to, and coordinated across teams on client delivery.',
		},
		{
			title: 'Frontend Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'fuerza studio',
			employmentType: 'full-time',
			startDate: 'Jun 2016',
			endDate: 'Apr 2023',
			description:
				'Built React applications for client projects, with a focus on load times, accessibility, and getting layouts right across screen sizes.',
		},
		{
			title: 'Frontend Developer',
			location: 'Remote',
			company: 'sporty',
			employmentType: 'part-time',
			startDate: 'Jan 2019',
			endDate: 'May 2020',
			description:
				'Part-time, alongside my job at fuerza studio. Designed and built interfaces with the design team, keeping them fast without losing the look.',
		},
		{
			title: 'UI/UX Designer / Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'nitro marketing digital',
			employmentType: 'full-time',
			startDate: 'Jan 2016',
			endDate: 'Jun 2016',
			description:
				'Designed and built interfaces for marketing campaigns, working to campaign goals and brand guidelines.',
		},
		{
			title: 'UI/UX Designer / Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'abajur propaganda e inovação',
			employmentType: 'full-time',
			startDate: 'Feb 2015',
			endDate: 'Jan 2016',
			description:
				'Built client interfaces, doing both the design and the implementation. Kept brand consistency across web and mobile.',
		},
		{
			title: 'Frontend Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'nitrodev',
			employmentType: 'full-time',
			startDate: 'May 2014',
			endDate: 'Feb 2015',
			description:
				'Frontend work as part of a small development team.',
		},
		{
			title: 'Frontend Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'pier.ws',
			employmentType: 'full-time',
			startDate: 'Nov 2011',
			endDate: 'May 2014',
			description:
				'Built responsive websites for clients, including interfaces for larger applications that had to work across browsers.',
		},
	],
}

export { resumeData }
