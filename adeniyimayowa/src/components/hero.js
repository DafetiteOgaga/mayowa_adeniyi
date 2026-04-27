import { useEffect, useState } from 'react'
import imageimage from '../assets/img/mayor.jpeg'
import { useDevice } from '../context/deviceTypeContext'
import { professionalSummary } from '../entry/entry'

function LandingPage() {
	const [showRemainingPara, setShowRemainingPara] = useState(false)
	const { width } = useDevice()
	const isDesktop = width > 768
	const words = professionalSummary.split(" ");
	let slicePoint;
	if (width > 420) {
		slicePoint = 45;
	} else if (width > 410) {
		slicePoint = 45;
	} else if (width > 380) {
		slicePoint = 35;
	} else {
		slicePoint = 25;
	}
	// console.log({words})
	const visibleText = words.slice(0, slicePoint).join(" ");
	const remainingText = words.slice(slicePoint).join(" ");
	return (
		<>
			<div className="mayor-hero-text-container">
				<div className='mayor-hero-img-container'>
					<img className='mayor-hero-img animate slide-from-top' src={imageimage} alt='oh' />
				</div>
				<div
				// style={{margin: "auto"}}
				className="mx-hero">
					<h3 className="mayor-hero-name animate slide-from-left">Mayowa Adeniyi</h3>
					<h2 className="mayor-hero-title mb-0 italic animate slide-from-right">Business Intelligence Analyst</h2>
					<p className="mayor-hero-subtitle animate slide-from-bottom">
						<span className='d-inline'>
							{visibleText}
						</span>
						{!(isDesktop||showRemainingPara) && "..."}
						{/* expandable part */}
						{isDesktop?
						<span
							className={`d-inline`}>
							{remainingText}
						</span>
						:
						<span
							className={`hero-expandable ${(showRemainingPara) ? "open" : ""}`}>
							{remainingText}
						</span>}
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