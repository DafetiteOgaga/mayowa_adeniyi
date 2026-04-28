import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from 'react-router-dom';
import { useDevice } from "../context/deviceTypeContext";
import { email, phoneNumber } from "../entry/entry";

const socialsArr = [
	{
		icon: "home",
		name: "Home",
		link: "/"
	},
	{
		icon: "linkedin",
		name: "LinkedIn",
		fab: "fab",
		link: "https://www.linkedin.com/in/aden-emmanuel-117440142/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bb%2Fo04HcXRzabnbDCzJvVyQ%3D%3D"
	},
	{
		icon: "github",
		name: "GitHub",
		fab: "fab",
		link: "https://github.com/AdeniyiEmmanuel1?tab=overview&from=2026-02-01&to=2026-02-28"
	},
	{
		icon: "chart-bar",
		name: "Tableau",
		link: "https://public.tableau.com/app/profile/adeniyi.emmanuel7932/vizzes"
	},
	// {
	// 	icon: "comment",
	// 	name: "Chat Online",
	// 	// link: ""
	// },
	{
		icon: "envelope",
		name: "Send a Mail",
		link: `mailto:${email}`
	},
	// {
	// 	icon: "map-marker-alt",
	// 	name: "Location",
	// 	// link: ""
	// },
	{
		icon: "phone-square",
		name: "Call",
		link: `tel:${phoneNumber}`
	}
]
function Socials({setIsMenuOpen, isMenuOpen}) {
	const location = useLocation().pathname.split("/")[1]
	console.log({location})
	const { label, width, isMobile } = useDevice()
	return (
		<div className={`socials-container ${(isMobile&&isMenuOpen)?'':''}`}
		onClick={()=>{
			if (isMobile&&isMenuOpen) {
				setIsMenuOpen(false)
			}
		}}>
			{socialsArr.map((social, cIdx) => {
				const isHome = social.name.toLowerCase()==="home"
				if (isHome&&!location) {
					return
				}
				return (
					<div key={cIdx} className={`contact-item ${!cIdx?'ml-0':''}`}>
						<Link
						rel="nofollow"
						to={social.link}
						className={`item-link ${(isMobile&&isMenuOpen)?'overlay-icon-color':''}`}>
							<FontAwesomeIcon
							icon={social.fab?[social.fab, social.icon]:social.icon}
							size={isHome?"2x":"lg"}
							/>
							{/* <span>&nbsp;</span> */}
							{/* <span className="mb-0">{contact.name}</span> */}
						</Link>
					</div>
				)
			})}
		</div>
	)
}
export { Socials }