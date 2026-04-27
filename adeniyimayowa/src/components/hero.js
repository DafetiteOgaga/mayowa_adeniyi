import { useEffect, useState } from 'react'
import imageimage from '../assets/img/mayor.jpeg'
import { useDevice } from '../context/deviceTypeContext'
import { professionalSummary } from '../entry/entry'

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
						{professionalSummary.slice(0, slicePoint)+((isDesktop||showRemainingPara)?professionalSummary.slice(slicePoint):'...')}
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