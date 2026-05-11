import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../entry/entry';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDevice } from '../context/deviceTypeContext';

function Projects() {
	const { isMobile, width } = useDevice()
	const ITEMS_PER_PAGE = isMobile?4:width<1200?6:8;
	const cardBodyLength = isMobile?10:25
	// const [pageLoading, setPageLoading] = useState(true);
	// const [arrays, setArrays] = useState(projects.slice(0, 10))
	const [page, setPage] = useState(0);
	const start = page * ITEMS_PER_PAGE;
	const end = start + ITEMS_PER_PAGE;
	const currentItems = projects.slice(start, end);
	const nextPage = () => {
		if ((page + 1) * ITEMS_PER_PAGE < projects.length) {
			setPage(prev => prev + 1);
		}
	};
	const prevPage = () => {
		if (page > 0) {
			setPage(prev => prev - 1);
		}
	};
	const firstPage = page === 0
	const lastPage = (page + 1) * ITEMS_PER_PAGE >= projects.length
	return (
		<>
			<div className={`container mayor-container-projects`}>
				<div className="row">
					<div className="text-center col-12">
						<h2 className="mayor-text-primary mayor-section-title animate slide-from-top">My Projects</h2>
						<p className="mx-auto mayor-section-desc mb-0 animate slide-from-bottom">
							These projects focuses on transforming ideas and data into intuitive, efficient, and impactful digital solutions.
						</p>
						<p className='mb-1 animate slide-from-left'>Page: {page + 1}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="project-cards">
							<div className="grid mayor-projects">
								{currentItems.map((project, pIdx) => {
									// console.log({lenchr: project.body.length})
									let rendererdWords = project.body.split(" ");
									rendererdWords = rendererdWords.slice(0, cardBodyLength).join(" ")
									// console.log({rendererdWords})
									return (
										<Link key={`${page}-${pIdx}`}
										className=''
										to={project.link}
										>
											<figure className={`effect-honey mayor-projects-item swap-animate swap-slide-right`}
											style={{
												animationDelay: `${pIdx * 0.25}s`,
											}}>
												<img src={project.image}
													alt="Image-photo 1"
													className="img-fluid" />
												<figcaption>
													<h2>
														<i>
															<span>
																{project.title}
															</span>
															<br/>
															<span className='project-card-body'>
																{rendererdWords}
															</span>
															<span className='click-to-inspect'>
																click to inspect
															</span>
														</i>
													</h2>
												</figcaption>
											</figure>
										</Link>
									)
								})}
							</div>
						</div>
						<div className="project-nav-btns">
							<button
							className={`arrow left ${firstPage?'d-none':''}`}
							onClick={prevPage}
							disabled={firstPage}>
								<FontAwesomeIcon icon="chevron-left" size='3x' />
							</button>

							<button
							className={`arrow right ${lastPage?'d-none':''}`}
							onClick={nextPage}
							disabled={lastPage}
							>
								<FontAwesomeIcon icon="chevron-right" size='3x' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export { Projects }