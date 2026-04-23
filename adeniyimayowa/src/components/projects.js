import { Link } from 'react-router-dom';
import gal1 from '../assets/img/gallery-tn-01.jpg'
import gal2 from '../assets/img/gallery-tn-02.jpg'
import gal3 from '../assets/img/gallery-tn-03.jpg'
import gal4 from '../assets/img/gallery-tn-04.jpg'
import gal5 from '../assets/img/gallery-tn-05.jpg'
import gal6 from '../assets/img/gallery-tn-06.jpg'

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
];

function Projects() {
	return (
		<section className="projects mayor-section-pad-top">
			<div className="container mayor-container-projects">
				<div className="row">
					<div className="text-center col-12">
						<h2 className="mayor-text-primary mayor-section-title">My Projects</h2>
						<p className="mx-auto mayor-section-desc">
							Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="mx-auto mayor-projects-container">
							<div className="grid mayor-projects">
								{projectsArr.map((project, pIdx) => {
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
					</div>
				</div>
			</div>
			</section>
	)
}
export { Projects }