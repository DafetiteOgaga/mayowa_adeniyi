import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

function Index() {
	const location = useLocation().pathname.split("/")[1]
	console.log({location})
	return (
		<>
			<Header />
			<section className={`app-wrapper ${location?location:"home"}`}>
				<Outlet context={{}} />
				<Footer />
			</section>
			{/* <Footer /> */}
		</>
	)
}
export { Index }