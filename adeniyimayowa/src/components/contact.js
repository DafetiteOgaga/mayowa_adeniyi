

function Contact() {
	return (
		<>
			<div className="container mayor-container-contact">
				<div className="row">
					<div className="text-center col-12">
						<h2 className="mayor-section-title mb-4 animate slide-from-bottom">Contact Me</h2>
						<p className="mb-5 animate slide-from-top">
						Proin enim orci, tincidunt quis suscipit in, placerat nec est. Vestibulum posuere faucibus posuere. Quisque aliquam velit eget leo blandit egestas. Nulla id posuere felis, quis tristique nulla.
						</p>
					</div>
					<div className="col-sm-12 col-md-6">
					<form action="" method="get" className="animate slide-from-bottom">
						<input
						id="name"
						name="name"
						type="text"
						placeholder="Your Name"
						className="mayor-input swap-animate swap-slide-bottom"
						style={{
							animationDelay: '0.2s',
						}}
						required />

						<input
						id="email"
						name="email"
						type="email"
						placeholder="Your Email"
						className="mayor-input swap-animate swap-slide-bottom"
						style={{
							animationDelay: '0.4s',
						}}
						required />

						<textarea
						id="message"
						name="message"
						rows="8"
						placeholder="Message"
						className="mayor-input swap-animate swap-slide-bottom"
						style={{
							animationDelay: '0.6s',
						}}
						required></textarea>

						<button
						type="submit"
						className="btn mayor-btn-submit swap-animate swap-slide-right"
						style={{
							animationDelay: '1s',
						}}>
							Submit
						</button>
					</form>
					</div>
				</div>
			</div>
		</>
	)
}
export { Contact }