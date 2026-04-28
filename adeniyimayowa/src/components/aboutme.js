// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experiences, education, certifications } from "../entry/entry";
import { Link } from 'react-router-dom';

function AboutMe() {
	return (
		<>
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 col-xl-12">
                        <div className="mayor-intro-text-container">
                            <h2 className="mayor-text-primary mb-4 mayor-section-title animate slide-from-top">Professional Experiences</h2>
                        </div>
                    </div>
                </div>

                <div className="about-me-content">
                    {/* experienes */}
                    <div className="">
                    {/* <h3 className="mayor-text-primary underline mb-0">Experiences</h3> */}
                        {experiences.map((experience, eIdx) => {
                            return (
                                <div key={eIdx} className="animate slide-from-bottom-left">
                                    <div className="mayor-intro-text-container experience rm-pt swap-animate swap-slide-right"
                                    style={{
                                        animationDelay: `${eIdx * 0.8}s`,
                                    }}>
                                        <h3 className="mayor-text-primary mb-0 swap-animate swap-slide-right"
                                        style={{
                                            animationDelay: `${eIdx * 0.8 * 1}s`,
                                        }}>{experience.title}</h3>
                                        <h5 className="mb-0 italic swap-animate swap-slide-right"
                                        style={{
                                            animationDelay: `${eIdx * 0.8 * 1.3}s`,
                                        }}>{experience.company}</h5>
                                        <p className="mb-4 mayor-intro-text swap-animate swap-slide-right"
                                        style={{
                                            animationDelay: `${eIdx * 0.8 * 1.6}s`,
                                        }}>
                                            {experience.duties}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div>
                        {/* certifications */}
                        <div className="">
                        <h3 className="certification-h3">Certifications</h3>
                            {certifications.map((cert, cIdx) => {
                                return (
                                    <Link key={cIdx} to={cert.link}
                                    className="cert-link animate slide-from-bottom-right">
                                        <div className={`mayor-intro-text-container cert ${!cIdx?'rm-pt':''} swap-animate swap-slide-left`}
                                        style={{
                                            animationDelay: `${cIdx * 0.8}s`,
                                        }}>
                                            <h5 className="mb-0 swap-animate swap-slide-left"
                                            style={{
                                                animationDelay: `${cIdx * 0.8 * 1}s`,
                                            }}>{cert.title}</h5>
                                            <h6 className="mb-0 italic swap-animate swap-slide-left"
                                            style={{
                                                animationDelay: `${cIdx * 0.8 * 1.3}s`,
                                            }}>{cert.cerification}</h6>
                                            <p className="mb-4 mayor-intro-text swap-animate swap-slide-left"
                                            style={{
                                                animationDelay: `${cIdx * 0.8 * 1.6}s`,
                                            }}>
                                                {cert.institution}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        {/* education */}
                        <div className="">
                        <h3 className="education-h3">Education</h3>
                            {education.map((edu, eIdx) => {
                                return (
                                    <div key={eIdx} className="animate slide-from-bottom">
                                        <div className={`mayor-intro-text-container edu ${!eIdx?'rm-pt':''} swap-animate swap-slide-bottom`}
                                        style={{
                                            animationDelay: `${eIdx * 0.8}s`,
                                        }}>
                                            <h5 className="mb-0 swap-animate swap-slide-bottom"
                                            style={{
                                                animationDelay: `${eIdx * 0.8 * 1}s`,
                                            }}>{edu.course}</h5>
                                            <h6 className="mb-0 italic swap-animate swap-slide-bottom"
                                            style={{
                                                animationDelay: `${eIdx * 0.8 * 1.3}s`,
                                            }}>{edu.degree}</h6>
                                            <p className="mb-4 mayor-intro-text swap-animate swap-slide-bottom"
                                            style={{
                                                animationDelay: `${eIdx * 0.8 * 1.6}s`,
                                            }}>
                                                {edu.school}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
	)
}
export { AboutMe }