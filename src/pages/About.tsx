import {NavBar} from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";
import {Container} from "../components/Container.tsx";
import {ContentBlock} from "../components/ContentBlock.tsx";


export const About = () => {
		const about =
				[{category: "Team Members", value: "300+"}, {category: "Office in the Us", value: "3"}, {category: "Transactions analyzed", value: "10M+"}]

		return (
				<main className={`overflow-hidden`}>
						<NavBar activeCircle={true}/>
						<Container className={`text-secondary-500 py-12 md:py-16 text-center md:text-left`} maxWidth={1250}>
								<h1 className={`heading-two max-w-[730px] text-center lg:text-left w-full leading-[110%] mx-auto lg:mx-0`}>We empower innovators <br/> by delivering access to the financial system.</h1>
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
														<div className={`grid gap-6`}>
																<hr className={`opacity-[0.25] text-secondary-500 w-full mx-auto hidden md:block`}/>
																<div key={index} className={`text-center flex flex-col gap-4 w-fit py-4 mx-auto ${about.length - 1 === index ? `2xs:col-span-2 2xs:place-self-center md:col-span-1` : ``}`}>
																		<h4 className={`opacity-[0.7] font-body`}>{item.category}</h4>
																		<p className={`text-[56px] text-primary-400 font-heading`}>{item.value}</p>
																</div>
																<hr className={`opacity-[0.25] text-secondary-500 w-full mx-auto hidden md:block`}/>
														</div>
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
