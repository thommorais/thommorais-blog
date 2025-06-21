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
		'Developer with experience in performance optimization, SEO, and accessibility. Creates effective user experiences using React and technical planning. Skilled in building applications end-to-end across frontend and backend.',
	location: 'São Francisco do Sul, Santa Catarina, Brasil, UTC-3',
	about:
		'Brazilian developer who builds fast, SEO-optimized, and accessible web applications. Experienced with the React ecosystem, Next.js, and React Native. Proficient in end-to-end development, handling both frontend and backend layers. Currently learning Three.js and GLSL to implement 3D graphics on websites.',
	personalWebsite: 'http://thommorais.me?ref=selfso',
	email: 'thommorais@gmail.com',
	linkedin: 'https://linkedin.com/in/thom-morais?ref=selfso',
	skills: [],
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
			startDate: 'October 2021',
			endDate: 'December 2021',
		},
		{
			degree: '3D Modeling',
			institution: 'EBAC',
			location: 'Online',
			startDate: 'March 2022',
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
			title: 'Technical Lead',
			location: 'Porto Alegre, RS, Brazil',
			company: 'fuerza studio',
			employmentType: 'full-time',
			startDate: 'May 2023',
			endDate: 'Present',
			description:
				'Managed technical planning and architecture for web and mobile applications. Trained junior developers, established coding standards, and worked with multiple teams to deliver user experiences that met client requirements.',
		},
		{
			title: 'Frontend Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'fuerza studio',
			employmentType: 'full-time',
			startDate: 'Jun 2016',
			endDate: 'Apr 2023',
			description:
				'Built React applications with improved performance and user engagement metrics. Reduced load times through optimization techniques while implementing accessibility standards and responsive designs.',
		},
		{
			title: 'Frontend Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'sporty',
			employmentType: 'part-time',
			startDate: 'Jan 2019',
			endDate: 'May 2020',
			description:
				'Created UI/UX solutions that increased user engagement. Worked with design team to build interfaces that combined visual quality with technical performance.',
		},
		{
			title: 'UI/UX Designer / Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'nitro marketing digital',
			employmentType: 'full-time',
			startDate: 'Jan 2016',
			endDate: 'Jun 2016',
			description:
				'Designed user interfaces that increased client conversion rates. Aligned designs with marketing goals to improve brand engagement and technical implementation.',
		},
		{
			title: 'UI/UX Designer / Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'abajur propaganda e inovação',
			employmentType: 'full-time',
			startDate: 'Feb 2015',
			endDate: 'Jan 2016',
			description:
				'Built effective interfaces for clients, combining design with technical functionality. Maintained brand consistency and improved usability on web and mobile platforms.',
		},
		{
			title: 'Frontend Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'nitrodev',
			employmentType: 'full-time',
			startDate: 'May 2014',
			endDate: 'Feb 2015',
			description:
				'Developed frontend solutions that reduced bounce rates. Collaborated with development team to build optimized code and functional user experiences.',
		},
		{
			title: 'Frontend Developer',
			location: 'Porto Alegre, RS, Brazil',
			company: 'pier.ws',
			employmentType: 'full-time',
			startDate: 'Nov 2011',
			endDate: 'May 2014',
			description:
				'Built responsive web solutions for clients, resulting in improved mobile engagement. Developed interfaces for complex applications with cross-browser compatibility.',
		},
	],
}

export { resumeData }
