import { useEffect, useState } from 'react'
import { useDevice } from '../context/deviceTypeContext'
import { professionalSummary, profilePicture, stack, name, professionalTitle, } from '../entry/entry'

function LandingPage() {
	const [showRemainingPara, setShowRemainingPara] = useState(false)
	const { width } = useDevice()
	const isDesktop = width > 768
	let words = professionalSummary.split(" ");
	words = words.slice(0, 120)
	let slicePoint;
	if (width > 420) {
		slicePoint = 45;
	} else if (width > 410) {
		slicePoint = 50;
	} else if (width > 380) {
		slicePoint = 50;
	} else {
		slicePoint = 50;
	}
	// console.log({})
	// console.log({words})
	const visibleText = words.slice(0, slicePoint).join(" ");
	const remainingText = words.slice(slicePoint).join(" ");
	return (
		<>
			<div className="mayor-hero-text-container">
				<div className='mayor-hero-img-container'>
					<img className='mayor-hero-img animate slide-from-top' src={profilePicture} alt='oh' />
				</div>
				<div
				className="mx-hero">
					<h3 className="mayor-hero-name animate slide-from-left">{name}</h3>
					<h2 className="mayor-hero-title mb-0 italic animate slide-from-right">{professionalTitle}</h2>
					<h6 className='mayor-stack'>
						{stack.map((item, idx) => {
							return (
								<span key={idx}
								className='animate slide-from-left mb-0'
								style={{
									transitionDelay: `${idx * 0.2}s`,
								}}>
									{`${item} ${(idx!==stack.length-1)?' || ':''}`}
								</span>
							)
						})}
					</h6>
					<p className="mayor-hero-subtitle animate slide-from-bottom m-0">
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