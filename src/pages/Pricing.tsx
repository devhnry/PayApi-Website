import {NavBar} from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";
import {Container} from "../components/Container.tsx";
import {PricingTab} from "../components/PricingTab.tsx";
import {plans} from "../data/pricingData.ts";
import {useEffect} from "react";

import {motion as m} from "framer-motion";
import {useLocation} from "react-router";
import {NavMenu} from "../components/NavMenu.tsx";

const Pricing = () => {

		useEffect(() => {
				window.scrollTo(0,0);
		})
		const location = useLocation()
		return (
				<main className={`overflow-hidden`}>
						<NavBar activeCircle={true} />
						<NavMenu />
						<Container className={`mt-[80px] mb-[40px] md:my-[80px]`}>
								<m.h1 className={`heading-two text-secondary-500 text-center 2lg:text-left overflow-hidden`}>
										{"Pricing".split('').map((letter, index) => (
												<m.span initial={{y: "40%", opacity: 0}}
																animate={{
																		y: 0,
																		opacity: 1,
																		transition: {
																				duration: 0.7,
																				delay: 0.04 * index,
																		},
																}} className={`inline-block`} key={index}>{letter}</m.span>
										))}
								</m.h1>
								<div className={`w-full items-start gap-x-2 gap-y-1 grid sm:grid-cols-2 md:grid-cols-3 2lg:gap-x-10`}>
										{plans.map((plan, index) => (
												<m.div key={`${location.pathname}_${index}`} initial={{ opacity: 0, scale: 0.8}} animate={{ opacity: 1, scale: 1}} viewport={{once: false, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.04 }}  className={`max-w-[350px] mx-auto w-full ${plans.length - 1 === index ? 'sm:place-self-center sm:col-span-2 md:col-span-1 md:place-self' : ''}`}>
														<PricingTab key={index} title={plan.title} description={plan.description} price={plan.price} features={plan.features} />
												</m.div>
										))}
								</div>
						</Container>
						<Footer />
				</main>
		)
}
export default Pricing
