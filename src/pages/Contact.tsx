import {NavBar} from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";
import {Container} from "../components/Container.tsx";

import tesla from "../assets/icons/companies/tesla-dark.svg";
import microsoft from "../assets/icons/companies/microsoft-dark.svg";
import hpLaptop from "../assets/icons/companies/hp-laptop-dark.svg";
import oracle from "../assets/icons/companies/oracle-dark.svg";
import google from "../assets/icons/companies/google-dark.svg";
import nvidia from "../assets/icons/companies/nvidia-dark.svg";
import {MyForm} from "../components/FormComponent.tsx";
import {useEffect} from "react";

import { motion as m } from "framer-motion"

export const Contact = () => {
		useEffect(() => {
				window.scrollTo(0,0);
		})

		const companies = [tesla, microsoft, hpLaptop, oracle, google, nvidia];
		return (
				<main className={`overflow-hidden`}>
						<NavBar activeCircle={true} />
						<Container className={`text-center text-secondary-500 py-12 lg:py-16`}>
								<m.h1 className={`heading-two leading-[75%] max-w-[570px] mx-auto sm:px-16 lg:mx-0 lg:px-0 lg:max-w-[650px] lg:text-left lg:pb-8 overflow-hidden`}>
										{"Submit a help request and we’ll get in touch shortly.".split(" ").map((word, i) => (
												<span key={i} className="inline-block overflow-hidden">
																						<m.span
																								initial={{y: "100%", opacity: 0}}
																								animate={{
																										y: 0,
																										opacity: 1,
																										transition: {
																												duration: 0.7,
																												delay: 0.04 * i,
																										},
																								}} className={`inline-block pb-4`} >{word}&nbsp;</m.span>
																				</span>
										))}
								</m.h1>
								<div className={`grid gap-y-20 gap-x-20 w-full max-w-[570px] mx-auto lg:grid-cols-2 lg:max-w-[1440px] items-center`}>
										<MyForm />
										<div className={`grid gap-10 h-fit`}>
												<m.h2 initial={{ opacity: 0, x: 20 }}
															whileInView={{ opacity: 0.7, x: 0 }}
															viewport={{once: true}}
															transition={{ duration: 0.7 }} className={`text-[24px] opacity-70 xl:text-left max-w-[440px] mx-auto xl:mx-0`}>Join the thousands of innovators already building with us</m.h2>
												<div
														className={`grid grid-cols-2 2xs:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 h-fit gap-x-[50px] gap-y-10 px-2 mb-[24px] lg:mb-0 w-fit mx-auto xl:mx-0`}>
														{companies.map((item, i) => (
																<m.img initial={{ opacity: 0, y: 20 }}
																			 whileInView={{ opacity: 1, y: 0 }}
																			 viewport={{once: true}}
																			 transition={{ delay: i * 0.1 + 0.3 }} className={``} key={i} src={item} alt={item}/>
														))}
												</div>
										</div>
								</div>
						</Container>
						<Footer/>
				</main>
		)
}
