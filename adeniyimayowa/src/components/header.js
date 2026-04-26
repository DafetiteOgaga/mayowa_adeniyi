import { Link, useLocation } from 'react-router-dom'
import { Socials } from './socials'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDevice } from '../context/deviceTypeContext'
import { useState, useEffect } from 'react';

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
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { label, width, isMobile } = useDevice()
	const location = useLocation().pathname.split("/")[1]
	useEffect(() => {
		if (isMenuOpen) {
		  document.body.style.overflow = "hidden"; // 🚫 disable scroll
		} else {
		  document.body.style.overflow = ""; // ✅ restore scroll
		}
		// cleanup (important when component unmounts)
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);
	console.log({location})
	return (
		<>
			<nav className="navbar navbar-expand-md mayor-navbar pt-3">
				<div className="container">
					<Socials {...{setIsMenuOpen, isMenuOpen}} />
					<div className='position-relative'>
						<button className="navbar-toggler"
						onClick={()=>setIsMenuOpen(prev=>!prev)}>
							<FontAwesomeIcon icon={isMenuOpen?"times":"bars"} size={"md"} />
						</button>
						<div className={`${isMobile?'navbar-hide':'d-block'} ${isMenuOpen ? 'd-show' : 'd-none'}`}
						onClick={()=>setIsMenuOpen(false)}>
							<ul className="navbar-nav justify-self-end"
							onClick={()=>setIsMenuOpen(false)}>
								{headerMenuArr.map((item, idx) => {
									const isActive = location === item.link
									const first = idx===0
									const last = idx===headerMenuArr.length-1
									return (
										<li key={idx} className="nav-item">
											<Link
											className={`nav-link mayor-nav-link
														${isActive?'active':''}
														${isMobile?((first)?'top-item':(last)?'bottom-item':'middle'):
														(first)?'first':(last)?'last':'middle'}`}
											to={item.link}>{item.name}</Link>
										</li>
									)
								})}
								<li className="nav-item">
									<span
									className={`nav-link`}>
										{width}px
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			{(isMobile && isMenuOpen) && (
			<div className='overlay'
				onClick={() => setIsMenuOpen(false)}
			/>
			)}
		</>
	)
}

export { Header }