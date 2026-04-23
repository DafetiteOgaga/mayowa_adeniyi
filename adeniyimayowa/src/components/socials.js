import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

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
function Socials() {
	return (
		<div className="d-flex">
			{commArr.map((contact, cIdx) => {
				return (
					<div className="contact-item">
						<Link
						rel="nofollow"
						// to=""
						className="item-link">
							<FontAwesomeIcon icon={contact.icon} size="lg" />
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