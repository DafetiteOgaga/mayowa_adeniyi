import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
function AboutMe() {
	return (
		<section className="about mayor-section-pad-top">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 col-xl-12">
                        <div className="mayor-intro-text-container">
                            <h2 className="mayor-text-primary mb-4 mayor-section-title">Professional Experiences</h2>
                        </div>
                    </div>
                </div>

                <div className="d-grid grid-column-1-1">
                    {/* experienes */}
                    <div className="">
                    <h3 className="mayor-text-primary underline mb-0">Experiences</h3>
                        {experiances.map((experience, eIdx) => {
                            return (
                                <div key={eIdx} className="">
                                    <div className="mayor-intro-text-container">
                                        <h3 className="mayor-text-primary mb-0">{experience.title}</h3>
                                        <h5 className="mayor-text-primary mb-0">{experience.company}</h5>
                                        <p className="mb-4 mayor-intro-text">
                                            {experience.duties}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* education */}
                    <div className="">
                    <h3 className="mayor-text-primary underline mb-0">Education</h3>
                        {education.map((edu, eIdx) => {
                            return (
                                <div key={eIdx} className="">
                                    <div className="mayor-intro-text-container">
                                        <h3 className="mayor-text-primary mb-0">{edu.course}</h3>
                                        <h5 className="mayor-text-primary mb-0">{edu.degree}</h5>
                                        <p className="mb-4 mayor-intro-text">
                                            {edu.school}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
	)
}
export { AboutMe }