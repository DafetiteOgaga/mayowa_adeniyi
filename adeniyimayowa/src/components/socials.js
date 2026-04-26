import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { useDevice } from "../context/deviceTypeContext";

const commArr = [
	{
		icon: "comment",
		name: "Chat Online",
		// link: ""
	},
	{
		icon: "envelope",
		name: "Send a Mail",
		// link: "mailto:mail@company.com" // actual email address
	},
	{
		icon: "map-marker-alt",
		name: "Location",
		// link: ""
	},
	{
		icon: "phone-square",
		name: "Call",
		// link: ""
	}
]
function Socials({setIsMenuOpen, isMenuOpen}) {
	const { label, width, isMobile } = useDevice()
	return (
		<div className={`d-flex ${(isMobile&&isMenuOpen)?'':''}`}
		onClick={()=>{
			if (isMobile&&isMenuOpen) {
				setIsMenuOpen(false)
			}
		}}>
			{commArr.map((contact, cIdx) => {
				return (
					<div key={cIdx} className={`contact-item ${!cIdx?'ml-0':''}`}>
						<Link
						rel="nofollow"
						// to=""
						className={`item-link ${(isMobile&&isMenuOpen)?'overlay-icon-color':''}`}>
							<FontAwesomeIcon
							icon={contact.icon}
							size={"lg"}
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