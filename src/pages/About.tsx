import {NavBar} from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";
import {Container} from "../components/Container.tsx";
import {ContentBlock} from "../components/ContentBlock.tsx";
import {useEffect} from "react";
import {motion as m} from "framer-motion"
import {NavMenu} from "../components/NavMenu.tsx";

export const About = () => {

		useEffect(() => {
				window.scrollTo(0,0);
		})

		const about =
				[{category: "Team Members", value: 300, appendix: "+"}, {category: "Office in the Us", value: 3, appendix: ""}, {category: "Transactions analyzed", value: 10, appendix: "M+"}]

		return (
				<main className={`overflow-hidden`}>
						<NavBar activeCircle={true}/>
						<NavMenu />
						<Container className={`text-secondary-500 py-12 md:py-16 text-center md:text-left`} maxWidth={1250}>
								<m.h1 className={`heading-two max-w-[730px] text-center lg:text-left w-full leading-[110%] mx-auto lg:mx-0 overflow-hidden`}>
										{"We empower innovators".split(" ").map((word, i) => (
												<m.span initial={{y: "100%", opacity: 0}}
															animate={{
																	y: 0,
																	opacity: 1,
																	transition: {
																			duration: 0.7,
																			delay: 0.04 * i,
																	},
															}} className={`inline-block`} key={i}>{word}&nbsp;</m.span>
										))} <br/> {"by delivering access to the financial system.".split(" ").map((word, i) => (
												<m.span initial={{y: "100%", opacity: 0}}
														animate={{
																y: 0,
																opacity: 1,
																transition: {
																		duration: 0.7,
																		delay: 0.04 * i * 2,
																},
														}} className={`inline-block`} key={i}>{word}&nbsp;</m.span>))
								}</m.h1>
								<div className={`mt-[40px] lg:mt-[60px] grid gap-16 md:mb-[80px]`}>
										<ContentBlock heading={`Our Vision`} content={`Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.`} />
										<ContentBlock heading={`Our Business`} content={`At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. `} />
								</div>
						</Container>
						<section className={`about-image relative`}>
								<div className={`hero-circle-four hidden 2lg:block`}></div>
						</section>
						<Container>
								<div className={`flex flex-col pt-[48px]`}>
										<hr className={`opacity-[0.25] text-secondary-500 w-full mx-auto block md:hidden`}/>
										<div className={`grid gap-4 my-4 2xs:grid-cols-2 md:grid-cols-3 md:*:mb-4`}>
												{about.map((item, index) => (
														<m.div key={index} className={`grid gap-6`}>
																<hr className={`opacity-[0.25] text-secondary-500 w-full mx-auto hidden md:block`}/>
																<m.div key={index} className={`text-center flex flex-col gap-4 w-fit py-4 mx-auto ${about.length - 1 === index ? `2xs:col-span-2 2xs:place-self-center md:col-span-1` : ``}`}>
																		<h4 className={`opacity-[0.7] font-body`}>{item.category}</h4>
																		<m.p className={`text-[56px] text-primary-400 font-heading`}>{item.value}{item.appendix}</m.p>
																</m.div>
																<hr className={`opacity-[0.25] text-secondary-500 w-full mx-auto hidden md:block`}/>
														</m.div>
												))}
										</div>
										<hr className={`opacity-[0.25] text-secondary-500 w-full mx-auto block md:hidden`}/>
								</div>
						</Container>
						<Container className={`text-secondary-500 pt-8 pb-12 text-center`} maxWidth={1250}>
								<div className={`mt-[40px] lg:mt-[60px] mb-[100px] grid gap-16 md:text-left`}>
										<ContentBlock heading={`The Culture`}
																	content={`We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.`}/>
										<ContentBlock heading={`The People`}
																	content={`We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills. `}/>
								</div>
						</Container>
						<Footer/>
				</main>
)
}
