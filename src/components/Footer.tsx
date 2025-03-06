import {Container} from "./Container.tsx";
import {EmailDemoForm} from "./EmailDemoForm.tsx";

import facebook from "../assets/icons/socials/facebook.svg"
import twitter from "../assets/icons/socials/twitter.svg"
import linkedin from "../assets/icons/socials/linkedin.svg"

import payApiLogo from "../assets/icons/logo-white.svg"

export const Footer = () => {
		const socialIcons: string[] = [facebook, twitter, linkedin];
		const footerItems: string[] = ["pricing", "about", "contact"]

		return (
				<footer>
						<Container className={`pb-26`}>
								<div className={`flex flex-col gap-8 lg:flex-row items-center lg:justify-between`}>
										<h3 className={`heading-two text-center text-secondary-500`}>Ready to start?</h3>
										<EmailDemoForm />
								</div>
						</Container>
						<Container className={`py-12 md:py-9 bg-secondary-700 relative overflow-hidden`}>
								<div className={`footer-circle`}></div>
								<div className={`flex flex-col md:flex-row md:justify-between items-center gap-10 relative z-20`}>
										<div className={`flex flex-col gap-10 md:flex-row items-center`}>
												<img className={`w-[135px]`} src={payApiLogo} alt={`logo`}/>
												<div className={`flex flex-col gap-8 text-center md:flex-row`}>
														{footerItems.map((item, i) => (
																<p className={`text-primary-100/70 capitalize hover:text-primary-100`}
																	 key={i}>{item}</p>
														))}
												</div>
										</div>
										<div className={`flex gap-6`}>
												{socialIcons.map(item => (
														<img src={item} alt={item}/>
												))}
										</div>
								</div>
						</Container>
				</footer>
		)
}