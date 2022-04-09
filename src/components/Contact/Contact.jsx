import "./contact.css";
import Email from "../../img/email-icon.png";
import Discord from "../../img/discord-icon.png";
import Location from "../../img/location-icon.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_qhvqlh6",
				"template_y3m6cbw",
				formRef.current,
				"RG0qwQ1zE2DihMzyB"
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true)
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="con-container" id="contacts">
			<div className="con-left">
				<h1 className="con-left-title">Let's build something great together</h1>
				<div className="con-left-info">
					<ul className="con-left-list">
						<li className="con-left-items">
							<img
								src={Email}
								alt="email-icon"
								className="con-image email-image"
							/>
							duartehmb@gmail.com
						</li>
						<li className="con-left-items">
							<img
								src={Discord}
								alt="discord icon"
								className="con-image discord-image"
							/>
							Beta
						</li>
						<li className="con-left-items">
							<img
								src={Location}
								alt="location icon"
								className="con-image location-image"
							/>
							Campo de Ourique, Portugal
						</li>
					</ul>
				</div>
			</div>
			<div className="con-right">
				<p className="con-right-desc">
					<b className="con-getInTouch">Get in touch!</b> I'm always looking for
					interesting and innovative projects to participate in.
				</p>
				<form className="con-form" ref={formRef} onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Name"
						name="user_name"
						className="con-form-input"
						required
					/>
					<input
						type="text"
						placeholder="Email"
						name="user_email"
						className="con-form-input"
						required
					/>
					<textarea
						placeholder="Message"
						name="user_message"
						rows="10"
						className="con-form-message"
						required
					></textarea>
					<button className="con-submit">Submit</button>
					{done && "Your email has been sent, thank you for reaching out!"}
				</form>
			</div>
		</div>
	);
};

export default Contact;
