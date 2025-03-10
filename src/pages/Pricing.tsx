import {NavBar} from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";
import {Container} from "../components/Container.tsx";
import {PricingTab} from "../components/PricingTab.tsx";
import {plans} from "../data/pricingData.ts";

const Pricing = () => {

		return (
				<main className={`overflow-hidden`}>
						<NavBar activeCircle={true} />
						<Container className={`mt-[80px] mb-[40px] md:my-[80px]`}>
								<h1 className={`heading-two text-secondary-500 text-center 2lg:text-left`}>Pricing</h1>
								<div className={`w-full items-start gap-x-2 gap-y-1 grid sm:grid-cols-2 md:grid-cols-3 2lg:gap-x-10`}>
										{plans.map((plan, index) => (
												<div className={`max-w-[350px] mx-auto w-full ${plans.length - 1 === index ? 'sm:place-self-center sm:col-span-2 md:col-span-1 md:place-self' : ''}`}>
														<PricingTab key={index} title={plan.title} description={plan.description} price={plan.price} features={plan.features} />
												</div>
										))}
								</div>
						</Container>
						<Footer />
				</main>
		)
}
export default Pricing
