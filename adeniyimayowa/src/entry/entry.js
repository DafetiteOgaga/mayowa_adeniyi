const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const getImage = (name) => (images(`./${name}`))

// name (the names are displayed as is)
const name = "Emmanuel M. Adeniyi"

// professional title (the professional title is displayed as is)
const professionalTitle = "Business Intelligence Analyst"

// email (the email is used as is and should not be edited/changed into an invalid email for the contact in form page to work)
const email = "Mayor4lyfe@gmail.com"

// phone number (the phone number is used as is and should not be edited/changed into an invalid format for the link in the header to work)
const phoneNumber = "+2348082887079"

// profile picture (change this image name (e.g mayor.jpg) to the name of the profile image saved in images folder)
const profilePicture = getImage("mayor.jpg")

// your experiences
// .................................................
// to edit: simply make corrections to the texts
// .................................................
// to add another experience: add another block i.e:
	// {
    //     title: "Data Analyst",
    //     company: "Lagos State Data community",
    // },
// and edit it to your taste
// .................................................
// to remove an experience: simply remove the block e.g:
	// {
    //     title: "Data Analyst",
    //     company: "Lagos State Data community",
    // },
// .................................................
const experiences = [
    {
        title: "Senior Business Intelligence Analyst",
        company: "Federated Co-operatives Limited - Regina, SK ",
    },
    {
        title: "Product Data Analyst",
        company: "Maven Analytics - Florida, U.S.A",
    },
	{
        title: "Data Analyst",
        company: "Lagos State Data community",
    },
]

// your education achievements
// .................................................
// to edit: simply make corrections to the texts
// .................................................
// to add another educaion: add another block i.e:
	// {
	// 	course: "Pharmaceutical Chemistry",
	// 	degree: "Masters of Science (Msc)",
	// 	school: "University of Ibadan (UI)."
	// },
// and edit it to your taste
// .................................................
// to remove an education: simply remove the block e.g:
	// {
	// 	course: "Pharmaceutical Chemistry",
	// 	degree: "Masters of Science (Msc)",
	// 	school: "University of Ibadan (UI)."
	// },
// .................................................
const education = [
    {
        course: "Pharmaceutical Chemistry",
        degree: "Masters of Science (Msc)",
        school: "University of Ibadan (UI)."
    },
	{
        course: "Chemistry",
        degree: "Bachelor of Science (Bsc)",
        school: "University of Ibadan (UI)."
    },
    {
        course: "West African Examination Council (WAEC)",
        degree: "Senor Secondary School Certificate Examination (SSCE)",
        school: "Lagos State Model College Igbokuta."
    },
]

// your certifications
// .................................................
// to edit: simply make corrections to the texts
// .................................................
// to add another certification: add another block i.e:
	// {
	// 	title: "Data Analytics",
	// 	cerification: "Google Data Analytics (specialization)",
	// 	institution: "Cousera (Google)",
	// 	link: "https://coursera.org/share/a7d57a1546494c9ed0e251b97cdafa81",
	// },
// and edit it to your taste
// .................................................
// to remove a certification: simply remove the block e.g:
	// {
	// 	title: "Data Analytics",
	// 	cerification: "Google Data Analytics (specialization)",
	// 	institution: "Cousera (Google)",
	// 	link: "https://coursera.org/share/a7d57a1546494c9ed0e251b97cdafa81",
	// },
// .................................................
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

// stack
// .................................................
// to edit: simply make corrections to the texts
// .................................................
// to add: simply add the stack to the list (note that they are and must be in quotes and separated by commas). the order of the list matters
// .................................................
// to remove: simply remove the stack from the list (along with its quotes and comma)
// .................................................
const stack = [
	"SQL", "Tableau", "Python", "R", "Power BI", "Excel",
]

// professional summary (watch out for the opening and closing backticks)
// .................................................
// to edit: simply make corrections to the texts
// .................................................
const professionalSummary = `
				I am a Business Intelligence Analyst with a strong passion
				for transforming complex, ambiguous data into clear and
				actionable insights for teams. My work focuses on bridging
				the gap between business questions and structured data,
				enabling organizations to transition from assumption-based
				decisions to evidence-driven understanding. My professional
				journey into Business Intelligence was rooted in curiosity.
				I hold an academic background in chemistry, where analytical
				thinking, pattern recognition, and attention to detail were
				essential. Over time, my interest evolved toward working
				with data, systems, and decision-making processes rather
				than laboratory experimentation. This transition led me into
				data analysis and ultimately into Business Intelligence,
				where I have found a natural alignment with my strengths and
				interests. I have gained experience across private sector
				organizations.
			`


//  projects
// .................................................
// to edit: simply make corrections to the texts
// .................................................
// to add another project: add another block i.e:
	// {
	// 	image: getImage("mayor.jpg"),
	// 	title: "Exercise!",
	// 	body: `Proin enim orci, tincidunt quis suscipit in, placerat nec est.
	// 			Vestibulum posuere faucibus posuere. Quisque aliquam velit eget
	// 			Vestibulum posuere faucibus posuere. Quisque aliquam velit eget
	// 			leo blandit egestas. Nulla id posuere felis, quis tristique nulla.`,
	// 	link: "https://public.tableau.com/app/profile/adeniyi.emmanuel7932/vizzes"
	// },
	// and edit it to your taste
// .................................................
// to remove a project: simply remove the block e.g:
	// {
	// 	image: getImage("mayor.jpg"),
	// 	title: "Exercise!",
	// 	body: `Proin enim orci, tincidunt quis suscipit in, placerat nec est.
	// 			Vestibulum posuere faucibus posuere. Quisque aliquam velit eget
	// 			Vestibulum posuere faucibus posuere. Quisque aliquam velit eget
	// 			leo blandit egestas. Nulla id posuere felis, quis tristique nulla.`,
	// 	link: "https://public.tableau.com/app/profile/adeniyi.emmanuel7932/vizzes"
	// },
// .................................................
// note that the link for each must be to the spcific project (on tableau or anywhere it is hosted) referenced
// also note that: the name of the project image that must be replaced (if applicable) needs to be the exact name of the image saved in the image folder and ths name must be in a quote e.g "mayor.jpg", "mayor2.jpg"
const projects = [
	{
		image: getImage("mayor.jpg"),
		title: "Exercise!",
		body: `Proin enim orci, tincidunt quis suscipit in, placerat nec est.
				Vestibulum posuere faucibus posuere. Quisque aliquam velit eget
				Vestibulum posuere faucibus posuere. Quisque aliquam velit eget
				leo blandit egestas. Nulla id posuere felis, quis tristique nulla.`,
		link: "https://public.tableau.com/app/profile/adeniyi.emmanuel7932/vizzes"
	},
	{
		image: getImage("mayor2.jpg"),
		title: "Second Image",
		body: `Proin enim orci, tincidunt quis suscipit in, placerat nec est.
				Vestibulum posuere faucibus posuere. Quisque aliquam velit eget
				leo blandit egestas. Nulla id posuere felis, quis tristique nulla.`,
		link: "https://public.tableau.com/app/profile/adeniyi.emmanuel7932/vizzes"
	},
];


// do not touch this section.
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
	name,
	professionalTitle,
}