const images = require.context('../assets/img', false, /\.(png|jpe?g|svg)$/);
const getImage = (name) => (images(`./${name}`))


// your experiences
const experiances = [
    {
        title: "Market Analyst",
        company: "Job Holdings Ltd",
        duties: "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna."
    },
    {
        title: "Support Analyst",
        company: "Taxify International",
        duties: "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna."
    },
]

// your education achievements
const education = [
    {
        course: "Data Analytics",
        degree: "Bachelor of Science (Bsc)",
        school: "University of Lagos (UNILAG)."
    },
    {
        course: "West African Examination Council (WAEC)",
        degree: "Senor Secondary School Certificate Examination (SSCE)",
        school: "Lagos State Model College Badore."
    },
]

// your certifications
const certifications = [
    {
        title: "Data Analytics Professional",
        cerification: "Data Science in Analytics (specialization)",
        institution: "Cousera (Google)"
    },
    {
        title: "Data Science Professional Certification",
        cerification: "Analytics for Scientists",
        institution: "Cousera (Meta)"
    },
]

// professional summary (watch out for the opening and closing backticks)
const professionalSummary = `
				I am a Business Intelligence Analyst with a strong ability
				to transform complex data into actionable insights that support strategic
				decision-making. Experienced in leveraging data visualization tools,
				reporting systems, and analytical methodologies to identify trends,
				optimize performance, and drive business growth. Proficient in tools
				and technologies such as [BI Tools—e.g., Power BI, Tableau],
				[Programming Languages—e.g., SQL, Python], and [Database Systems—e.g.,
				MySQL, PostgreSQL], with a solid understanding of data modeling, ETL
				processes, and dashboard development. i demonstrate a keen eye for
				detail, strong problem-solving skills, and the ability to communicate
				findings clearly to both technical and non-technical stakeholders.
				Passionate about using data to tell compelling stories and support
				continuous business improvement within organization.
			`


//  projects
const projects = [
	{
		image: getImage("gallery-tn-01.jpg"),
		i: "Physical Health",
		span: "Exercise!",
	},
	{
		image: getImage("gallery-tn-02.jpg"),
		i: "Rain on Glass",
		span: "Second Image",
	},
	{
		image: getImage("gallery-tn-03.jpg"),
		i: "Mega City",
		span: "Sea View",
	},
	{
		image: getImage("gallery-tn-04.jpg"),
		i: "Dream Girl",
		span: "Thoughts",
	},
	{
		image: getImage("gallery-tn-05.jpg"),
		i: "Offices",
		span: "Workstation",
	},
	{
		image: getImage("gallery-tn-06.jpg"),
		i: "Just Above",
		span: "The City",
	},
	{
		image: getImage("gallery-tn-01.jpg"),
		i: "Another",
		span: "Exercise Time",
	},
	{
		image: getImage("gallery-tn-02.jpg"),
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: getImage("gallery-tn-03.jpg"),
		i: "Another",
		span: "Exercise Time",
	},
	{
		image: getImage("gallery-tn-04.jpg"),
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: getImage("gallery-tn-05.jpg"),
		i: "Offices",
		span: "Workstation",
	},
	{
		image: getImage("gallery-tn-06.jpg"),
		i: "Just Above",
		span: "The City",
	},
	{
		image: getImage("gallery-tn-01.jpg"),
		i: "Another",
		span: "Exercise Time",
	},
	{
		image: getImage("gallery-tn-02.jpg"),
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: getImage("gallery-tn-03.jpg"),
		i: "Another",
		span: "Exercise Time",
	},
	{
		image: getImage("gallery-tn-04.jpg"),
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: getImage("gallery-tn-05.jpg"),
		i: "Offices",
		span: "Workstation",
	},
	{
		image: getImage("gallery-tn-06.jpg"),
		i: "Just Above",
		span: "The City",
	},
	{
		image: getImage("gallery-tn-01.jpg"),
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: getImage("gallery-tn-02.jpg"),
		i: "Offices",
		span: "Workstation",
	},
	{
		image: getImage("gallery-tn-03.jpg"),
		i: "Just Above",
		span: "The City",
	},
];
export {
	experiances,
	education,
	certifications,
	professionalSummary,
	projects
}