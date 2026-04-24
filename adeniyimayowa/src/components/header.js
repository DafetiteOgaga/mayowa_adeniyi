import { Link, useLocation } from 'react-router-dom'
import { Socials } from './socials'

const headerMenuArr = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Projects",
		link: "projects",
	},
	{
		name: "About Me",
		link: "about-me",
	},
	{
		name: "Contact Me",
		link: "contact-me",
	}
]
function Header() {
	const location = useLocation().pathname.split("/")[1]
	console.log({location})
	return (
		<nav className="navbar navbar-expand-md mayor-navbar" id="tmNav">
			<div className="container">
				<Socials />
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<i className="fas fa-bars navbar-toggler-icon"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						{headerMenuArr.map((item, idx) => {
							const isActive = location === item.link
							return (
								<li key={idx} className="nav-item">
									<Link
									className={`nav-link mayor-nav-link
												${isActive?'active':''}
												${(idx===0)?'first':(idx===headerMenuArr.length-1)?'last':'middle'}`}
									to={item.link}>{item.name}</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export { Header }