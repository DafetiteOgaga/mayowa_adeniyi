

function Contact() {
	return (
		<>
			
			<div className="container mayor-container-contact">
				
				<div className="row">
					
					<div className="text-center col-12">
						<h2 className="mayor-section-title mb-4">Contact Me</h2>
						<p className="mb-5">
						Proin enim orci, tincidunt quis suscipit in, placerat nec est. Vestibulum posuere faucibus posuere. Quisque aliquam velit eget leo blandit egestas. Nulla id posuere felis, quis tristique nulla.
						</p>
					</div>
					
					<div className="col-sm-12 col-md-6">
					<form action="" method="get">
						<input id="name" name="name" type="text" placeholder="Your Name" className="mayor-input" required />
						<input id="email" name="email" type="email" placeholder="Your Email" className="mayor-input" required />
						<textarea id="message" name="message" rows="8" placeholder="Message" className="mayor-input" required></textarea>
						<button type="submit" className="btn mayor-btn-submit">Submit</button>
					</form>
					</div>
				</div>
				{/* <!-- row ending --> */}
				
			</div>

				{/* <Footer /> */}

			</>
	)
}
export { Contact }