import React, {useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchBrevoKeyFromBackend } from '../hooks/useFetchApi';
import { useBrevoEmail } from '../hooks/useBrevoEmail';
import { name, email } from '../entry/entry';

const formInputValues = [
	{
		type: "text",
		name: "name",
		id: "name",
		placeholder: "Your Name",
	},
	{
		type: "email",
		name: "email",
		id: "email",
		placeholder: "Email",
	},
	{
		type: "textarea",
		name: "message",
		id: "message",
		placeholder: "Message",
		rows: "6",
	}
]
const formValues = {
	name: "",
	email: "",
	message: ""
}

async function getKey(apiKey, setApiKey, setApiEmail) {
	if (!apiKey) {
		// console.log('Fetching API key...');
		try {
			const endpoint = 'dafetite_brevo_api_key/dafetite_brevo_api'
			const response = await fetchBrevoKeyFromBackend(endpoint);
			if (response?.success && response?.key) {
				setApiKey(response.key);
				setApiEmail(response.email);
			} else {
				console.error('Failed to fetch API key:', response);
			}
		} catch (err) {
			console.error('Error while fetching API key:', err);
		}
	} else {
		// console.warn('Using existing API key');
	}
}

function Contact() {
	const { sendContactEmails, success, loading, error, clearInfo } = useBrevoEmail(); // useBrevoEmail hook
	// const { scrollRef, isOverlayed } = useOutletContext();
	const [formData, setFormData] = useState(formValues);
	const [apiKey, setApiKey] = useState(null);
	const [apiEmail, setApiEmail] = useState(null);

	const handleInputChange = (e) => {
		getKey(apiKey, setApiKey, setApiEmail);
		console.log('apiKey:', apiKey);
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	// fetch API key on component mount
	useEffect(() => {
		if (!apiKey) getKey(apiKey, setApiKey, setApiEmail);
	}, []);

	const handleSubmit = async (e) => {
		console.log("handleSubmit called");
		e.preventDefault();
		// console.warn('success before clearing:', success)
		clearInfo();
		// console.warn('success after clearing:', success)

		const config = {
			apiKey: apiKey, // 'brevo-api-key',
			apiEmail: apiEmail, // brevo email address
			// ownerEmail: 'ogagadafetite@gmail.com', // your-email',
			ownerEmail: name, // your-email',
			senderName: name, // 'Your Website Name'
		};

		const cleanedData = {...formData, subject: 'Message Received! - Email confirmation'};
		try {
			// passed formData and config to the hook
			await sendContactEmails(cleanedData, config);
			// Success
			toast.success(
				<div>
					{/* use success response */}
					Success!
					{success}
					<br />
					Kindly check your inbox
					<br />
					(or spam folder) for email
				</div>);
				setFormData(formValues); // Resets the form data
			// console.log("Emails sent successfully");
		} catch (err) {
			// Error
			toast.error(
				<div>
					{/* use error response */}
					Error: :::
					{error}
					:::::
					{err.message}
				</div>);
			// console.error("Failed to send emails:", error);
			console.error("Failed to send emails:", err);
		}
	};
	console.log({formData, apiKey})
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
						<form onSubmit={handleSubmit} className="animate slide-from-bottom">
							{formInputValues.map((input, index) => (
								<fieldset className="" key={index}>
								{input.type!=='textarea' ?
									<input
										key={index}
										type={input.type}
										name={input.name}
										className="mayor-input swap-animate swap-slide-bottom"
										id={input.id}
										placeholder={input.placeholder}
										value={formData[input.name]}
										onChange={handleInputChange}
										style={{
											animationDelay: `${index*0.2}s`,
										}}
										required
									/>
									:
									<textarea
										name={input.name}
										rows={input.rows}
										className="mayor-input swap-animate swap-slide-bottom"
										id={input.id}
										placeholder={input.placeholder}
										value={formData[input.name]}
										onChange={handleInputChange}
										style={{
											animationDelay: `${index*0.2}s`,
										}}
										required
										/>}
								</fieldset>
							))}
							{/* submit button */}
							<button
							type="submit"
							className="btn mayor-btn-submit swap-animate swap-slide-right"
							style={{
								animationDelay: '1s',
							}}
							disabled={loading}>
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