const images = require.context('../assets/img', false, /\.(png|jpe?g|svg)$/);
const getImage = (name) => (images(`./${name}`))

// email
const email = "Mayor4lyfe@gmail.com"

// phone number
const phoneNumber = "+2348082887079"

// profile picture
const profilePicture = getImage("mayor.jpg")

// your experiences
const experiences = [
    {
        title: "Senior Business Intelligence Analyst",
        company: "Federated Co-operatives Limited - Regina, SK ",
        // duties: "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna."
    },
    {
        title: "Product Data Analyst",
        company: "Maven Analytics - Florida, U.S.A",
        // duties: "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna."
    },
	{
        title: "Data Analyst",
        company: "Lagos State Data community",
        // duties: "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna."
    },
]

// your education achievements
const education = [
    {
        course: "Chemistry",
        degree: "Bachelor of Science (Bsc)",
        school: "University of Ibadan (UI)."
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
        title: "Data Analytics",
        cerification: "Google Data Analytics (specialization)",
        institution: "Cousera (Google)",
		link: "https://coursera.org/share/a7d57a1546494c9ed0e251b97cdafa81",
    },
    {
        title: "Data Exploration Expert",
        cerification: "Data Exploration",
        institution: "Cousera (Google)",
		link: "https://coursera.org/share/29cc1fc9e48bf89c575840378f406c5a",
    },
	{
        title: "Data Clean Professional",
        cerification: "Process Data from Dirty to Clean",
        institution: "Cousera (Google)",
		link: "https://coursera.org/share/58a85f260872c752a2530157fce1d55b",
    },
	{
        title: "Data Visualization",
        cerification: "Data Visualization",
        institution: "Cousera (Google)",
		link: "https://coursera.org/share/463a95ec80fd9381018f9d75dd6d21ba",
    },
	{
        title: "R Programming",
        cerification: "Data Analysis with R Programming",
        institution: "Cousera (Google)",
		link: "https://coursera.org/share/6721a9d420978fd430e9a6831c6937e5",
    },
]

const stack = [
	"SQL", "Python", "R", "Power BI", "Tableau", "Excel", "Git", "Clouds",
]

// professional summary (watch out for the opening and closing backticks)
const professionalSummary = `
				I am a Business Intelligence Analyst with a strong passion for transforming complex, ambiguous data into clear and actionable insights for teams. My work focuses on bridging the gap between business questions and structured data, enabling organizations to transition from assumption-based decisions to evidence-driven understanding.
				My professional journey into Business Intelligence was rooted in curiosity. I hold an academic background in chemistry, where analytical thinking, pattern recognition, and attention to detail were essential. Over time, my interest evolved toward working with data, systems, and decision-making processes rather than laboratory experimentation. This transition led me into data analysis and ultimately into Business Intelligence, where I have found a natural alignment with my strengths and interests.
				I have gained experience across private sector organizations, consulting environments, and public sector institutions. From supporting government initiatives in Lagos to contributing to product and reporting systems for organizations in North America, I have developed a broad perspective on how data challenges vary by context. Despite these differences, the underlying need remains consistent: organizations require clarity they can rely on.
				My work has largely focused on developing reliable reporting systems, establishing standardized metric definitions, and minimizing discrepancies that arise from inconsistent data across teams. I take particular interest in the practical impact of Business Intelligence, whether it is designing efficient data models that save time, building dashboards that streamline decision-making, or aligning stakeholders around a single version of truth. I prioritize accuracy, consistency, and usability, ensuring that data solutions are not only built but effectively adopted.
				To achieve this, I collaborate closely with cross-functional teams, including finance, operations, product, and engineering, recognizing that Business Intelligence functions most effectively as an integrated capability rather than a standalone service.
				Technically, I bring experience in SQL, Power BI, Python,Tableau,R and cloud-based data platforms, with a focus on building data pipelines, dashboards, and reporting workflows that support day-to-day decision-making. I am particularly interested in roles where Business Intelligence contributes to organizational growth, accountability, and strategic planning, rather than isolated reporting tasks.
				At this stage in my career, I am seeking opportunities where I can contribute both technically and strategically, helping teams ask better questions, build trust in their data, and make informed decisions with confidence. I am open to engaging in meaningful professional conversations with organizations that value data as a critical business asset.
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
	experiences,
	education,
	certifications,
	professionalSummary,
	projects,
	profilePicture,
	email,
	phoneNumber,
	stack,
}