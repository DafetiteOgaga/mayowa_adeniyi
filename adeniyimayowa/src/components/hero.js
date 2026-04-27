import { useEffect, useState } from 'react'
import imageimage from '../assets/img/mayor.jpeg'
import { useDevice } from '../context/deviceTypeContext'

const summary = `
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
function LandingPage() {
	const [showRemainingPara, setShowRemainingPara] = useState(false)
	const { width } = useDevice()
	const isDesktop = width > 768
	let slicePoint;
	if (width > 420) {
		slicePoint = 430;
	} else if (width > 410) {
		slicePoint = 450;
	} else if (width > 380) {
		slicePoint = 290;
	} else {
		slicePoint = 220;
	}
	// console.log({slicePoint, width})
	useEffect(() => {
		// if (width>1300) {
		// 	setShowRemainingPara(true)
		// }
	}, [showRemainingPara])
	return (
		<>
			<div className="mayor-hero-text-container">
				<div className='mayor-hero-img-container'>
					<img className='mayor-hero-img' src={imageimage} alt='oh' />
				</div>
				<div
				// style={{margin: "auto"}}
				className="mx-hero">
					<h3 className="mayor-hero-name">Mayowa Adeniyi</h3>
					<h2 className="mayor-hero-title mb-0 italic">Business Intelligence Analyst</h2>
					<p className="mayor-hero-subtitle">
						{summary.slice(0, slicePoint)+((isDesktop||showRemainingPara)?summary.slice(slicePoint):'...')}
					</p>
					<button
					onClick={()=>setShowRemainingPara(prev=>!prev)}
					type="button"
					className={`btn mayor-btn-submit mx-3 ${showRemainingPara?'':'mb-0'} ${isDesktop?'d-none':''}`}>
						{showRemainingPara?'Collapse':'Read More'}
					</button>
				</div>
			</div>
		</>
	)
}
export { LandingPage }