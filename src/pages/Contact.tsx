import {NavBar} from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";
import {Container} from "../components/Container.tsx";

import tesla from "../assets/icons/companies/tesla-dark.svg";
import microsoft from "../assets/icons/companies/microsoft-dark.svg";
import hpLaptop from "../assets/icons/companies/hp-laptop-dark.svg";
import oracle from "../assets/icons/companies/oracle-dark.svg";
import google from "../assets/icons/companies/google-dark.svg";
import nvidia from "../assets/icons/companies/nvidia-dark.svg";
import {InputComponent} from "../components/InputComponent.tsx";

export const Contact = () => {
		const companies = [tesla, microsoft, hpLaptop, oracle, google, nvidia];
		return (
				<main className={`overflow-hidden`}>
						<NavBar activeCircle={true} />
						<Container className={`text-center text-secondary-500 py-12`}>
								<h1 className={`heading-two`}>Submit a help request and we’ll get in touch shortly.</h1>
								<div className={`grid gap-20`}>
										<form>
												<InputComponent type={`text`} placeholder={`name`} value={``} key={`name`} />
										</form>
										<div className={`grid gap-10`}>
												<h2 className={`heading-three opacity-70`}>Join the thousands of innovators already building with us</h2>
												<div
														className={`grid grid-cols-2 2xs:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 h-fit gap-x-[50px] gap-y-10 px-2 mb-[24px] lg:mb-0 w-fit mx-auto lg:mx-0`}>
														{companies.map((item, i) => (
																<img className={``} key={i} src={item} alt={item}/>
														))}
												</div>
										</div>
								</div>
						</Container>
						<Footer/>
				</main>
		)
}
