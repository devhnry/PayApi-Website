import {Container} from "./Container.tsx";
import {EmailDemoForm} from "./EmailDemoForm.tsx";

import facebook from "../assets/icons/socials/facebook.svg"
import twitter from "../assets/icons/socials/twitter.svg"
import linkedin from "../assets/icons/socials/linkedin.svg"

import payApiLogo from "../assets/icons/logo-white.svg"
import {useNavigate} from "react-router";

import {motion as m} from "framer-motion"

export const Footer = () => {
		const socialIcons: string[] = [facebook,twitter, linkedin];
		const footerItems: string[] = ["pricing", "about", "contact"]
		const navigate = useNavigate();

		return (
				<footer>
						<Container className={`pb-26`}>
								<div className={`flex flex-col gap-8 lg:flex-row items-center lg:justify-between`}>
										<m.h3 initial={{ y: 20, opacity: 0 }} whileInView={{opacity: 1, y:0, transition: { duration: 0.7} }} viewport={{once: false }} className={`heading-two text-center text-secondary-500`}>Ready to start?</m.h3>
										<EmailDemoForm />
								</div>
						</Container>
						<Container className={`py-12 md:py-9 bg-secondary-700 relative overflow-hidden`}>
								<div className={`footer-circle`}></div>
								<div className={`flex flex-col md:flex-row md:justify-between items-center gap-10 relative z-20`}>
										<div className={`flex flex-col gap-10 md:flex-row items-center`}>
												<img onClick={() => navigate(`/`)} className={`w-[135px] cursor-pointer`} src={payApiLogo} alt={`logo`}/>
												<div className={`flex flex-col gap-8 text-center md:flex-row`}>
														{footerItems.map((item, i) => (
																<p onClick={() => navigate(`/${item}`)} className={`text-primary-100/70 cursor-pointer capitalize hover:text-primary-100`}
																	 key={i}>{item}</p>
														))}
												</div>
										</div>
										<div className={`flex gap-6`}>
												{socialIcons.map((item,i) => (
														<m.img
																initial={{ scale: 0.2 }}
																whileInView={{scale: 1, transition: {
																		duration: 0.2, delay: i * 0.08} }}
																viewport={{once: true}} className={`hover:filter-custom transition-all duration-150 cursor-pointer`} key={item} src={item} alt={item}/>
												))}
										</div>
								</div>
						</Container>
				</footer>
		)
}