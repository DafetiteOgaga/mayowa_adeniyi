import imageimage from '../assets/img/mayor.jpeg'

function LandingPage() {
	return (
		<>
			<div className="mayor-hero-text-container">
				<div className='mayor-hero-img-container'>
					<img className='mayor-hero-img' src={imageimage} alt='oh' />
				</div>
				<div
				// style={{margin: "auto"}}
				className="mayor-hero-text-container-inner mx-hero">
					<h3 className="mayor-hero-name">Mayowa Adeniyi</h3>
					<h2 className="mayor-hero-title mb-0 italic">Business Intelligence Analyst</h2>
					<p className="mayor-hero-subtitle">
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
					</p>
				</div>
			</div>
		</>
	)
}
export { LandingPage }