import imageimage from '../assets/img/mayor.jpeg'

function LandingPage() {
	return (
		<section className="home text-white mayor-font-big mayor-parallax">
			<div className="mayor-hero-text-container">
				<div className='mayor-hero-img-container'>
					<img className='mayor-hero-img' src={imageimage} alt='oh' />
				</div>
				<div style={{margin: "auto"}}
				className="mayor-hero-text-container-inner">
					<h2 className="mayor-hero-title">Data Analyst</h2>
					<p className="mayor-hero-subtitle">
					There are several notable individuals
					<br/>He is currently the Commissioner
					<br/>A highly motivated Physiologist with passion in Environmental & Stress Physiology. I have skills in Basic Physiology, Chronobiology, Molecular Biology, Stress Physiology and Exercise Physiology & Fitness Training. In the aspect of Preventive Medicine, my previous study covers exogenous agents including garcinia kola (bitter kola), high fat diet, oral contraceptive and micronutrients most especially selenium. I have also worked with other scientists in GIT & metabolism and Biotechnology.
					</p>
				</div>
			</div>
		</section>
	)
}
export { LandingPage }