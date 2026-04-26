import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gal1 from '../assets/img/gallery-tn-01.jpg'
import gal2 from '../assets/img/gallery-tn-02.jpg'
import gal3 from '../assets/img/gallery-tn-03.jpg'
import gal4 from '../assets/img/gallery-tn-04.jpg'
import gal5 from '../assets/img/gallery-tn-05.jpg'
import gal6 from '../assets/img/gallery-tn-06.jpg'
import { Spinner } from '../context/spinner/spinner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDevice } from '../context/deviceTypeContext';

const projectsArr = [
	{
		image: gal1,
		i: "Physical Health",
		span: "Exercise!",
	},
	{
		image: gal2,
		i: "Rain on Glass",
		span: "Second Image",
	},
	{
		image: gal3,
		i: "Mega City",
		span: "Sea View",
	},
	{
		image: gal4,
		i: "Dream Girl",
		span: "Thoughts",
	},
	{
		image: gal5,
		i: "Offices",
		span: "Workstation",
	},
	{
		image: gal6,
		i: "Just Above",
		span: "The City",
	},
	{
		image: gal1,
		i: "Another",
		span: "Exercise Time",
	},
	{
		image: gal2,
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: gal3,
		i: "Another",
		span: "Exercise Time",
	},
	{
		image: gal4,
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: gal5,
		i: "Offices",
		span: "Workstation",
	},
	{
		image: gal6,
		i: "Just Above",
		span: "The City",
	},
	{
		image: gal1,
		i: "Another",
		span: "Exercise Time",
	},
	{
		image: gal2,
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: gal3,
		i: "Another",
		span: "Exercise Time",
	},
	{
		image: gal4,
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: gal5,
		i: "Offices",
		span: "Workstation",
	},
	{
		image: gal6,
		i: "Just Above",
		span: "The City",
	},
	{
		image: gal4,
		i: "Repeated",
		span: "Image Spot",
	},
	{
		image: gal5,
		i: "Offices",
		span: "Workstation",
	},
	{
		image: gal6,
		i: "Just Above",
		span: "The City",
	},
];

function Projects() {
	const { isMobile } = useDevice()
	const ITEMS_PER_PAGE = isMobile?4:8;
	// const [pageLoading, setPageLoading] = useState(true);
	// const [arrays, setArrays] = useState(projectsArr.slice(0, 10))
	const [page, setPage] = useState(0);
	const start = page * ITEMS_PER_PAGE;
	const end = start + ITEMS_PER_PAGE;
	const currentItems = projectsArr.slice(start, end);
	const nextPage = () => {
		if ((page + 1) * ITEMS_PER_PAGE < projectsArr.length) {
			setPage(prev => prev + 1);
		}
	};
	const prevPage = () => {
		if (page > 0) {
			setPage(prev => prev - 1);
		}
	};
	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setPageLoading(false);
	// 	}, 500); // small delay so spinner is visible
	
	// 	return () => clearTimeout(timer);
	// }, []);
	const firstPage = page === 0
	const lastPage = (page + 1) * ITEMS_PER_PAGE >= projectsArr.length
	console.log("Current page:", page);
	return (
		<>
			<div className={`container px-1 mayor-container-projects`}>
				{/* {pageLoading?
				<>
					<Spinner type="dot" />
				</>
				:
				<> */}
					<div className="row">
						<div className="text-center col-12">
							<h2 className="mayor-text-primary mayor-section-title">My Projects</h2>
							<p className="mx-auto mayor-section-desc mb-0">
								Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.
							</p>
							<p className='mb-1'>Page: {page + 1}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="project-cards">
								<div className="grid mayor-projects">
									{currentItems.map((project, pIdx) => {
										return (
											<Link key={pIdx}
											// to=""
											>
												<figure className="effect-honey mayor-projects-item">
													<img src={project.image}
														alt="Image-photo 1"
														className="img-fluid" />
													<figcaption>
														<h2><i>{project.i}<br/><span>{project.span}</span></i></h2>
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
				{/* </>
				} */}
			</div>
		</>
	)
}
export { Projects }