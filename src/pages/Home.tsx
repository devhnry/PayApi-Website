import {NavBar} from "../components/NavBar.tsx";
import {Container} from "../components/Container.tsx";

import iphoneMockup from "../assets/images/IphoneMockup.svg"
import google from "../assets/icons/companies/google.svg"
import hpLaptop from "../assets/icons/companies/hp-laptop.svg"
import microsoft from "../assets/icons/companies/microsoft.svg"
import nvidia from "../assets/icons/companies/nvidia.svg"
import oracle from "../assets/icons/companies/oracle.svg"
import tesla from "../assets/icons/companies/tesla.svg"

import codeSnippet from "../assets/images/code-snippet.svg"
import iphoneMockup2 from "../assets/images/simple-ui-mockup-1.svg"
import iphoneMockup3 from "../assets/images/simple-ui-mockup-2.svg"
import {Footer} from "../components/Footer.tsx";
import {EmailDemoForm} from "../components/EmailDemoForm.tsx";


export const Home = () => {
		const companies = [tesla, microsoft, hpLaptop, oracle, google, nvidia];

		return (
				<main className={`relative overflow-x-hidden max-w-[1440px] mx-auto`}>
						<NavBar />
						<Container className={`flex flex-col items-center gap-6 py-8 lg:py-20 text-secondary-500`}>
								<div className={`hero-circle`}></div>
								<div className={`lg:flex flex-row-reverse mx-auto w-full items-center gap-30`}>
										<img className={`hero-image mb-[clamp(24px,calc(24px+16*((100vw-375px)/393)),40px)] lg:mb-0 lg:h-[460px] lg:w-[240px] lg:rounded-[33px]`} src={iphoneMockup} alt={'mockup'}/>
										<div>
												<div className={`grid w-full`}>
														<h1 className={`text-center lg:text-left heading-one leading-[112%] lg:leading-[100%] mb-[24px]`}>
																Start building with our APIs for absolutely free.</h1>
														<EmailDemoForm />
												</div>
												<p className={`text-secondary-300 text-center lg:text-left pl-2 pt-4`}>Have any questions ? <span
														className={`font-bold`}>Contact Us</span></p>
										</div>
								</div>
						</Container>
						<Container className={`flex flex-col lg:flex-row-reverse lg:items-center gap-14 lg:justify-between bg-secondary-700 mt-10 text-secondary-100 py-20 relative overflow-hidden`}>
								<div className={`hero-circle-two z-10`}></div>
								<div className={`grid grid-cols-2 2xs:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 h-fit gap-x-[50px] gap-y-10 px-2 mb-[24px] lg:mb-0 w-fit mx-auto lg:mx-0`}>
										{companies.map((item, i) => (
												<img className={``} key={i} src={item} alt={item} />
										))}
								</div>
								<div className={`text-center lg:text-left grid gap-4`}>
										<h2 className={`heading-two`}>Who we work with</h2>
										<p className={`opacity-[0.7] leading-[186%] max-w-[456px] lg:max-w-[445px] mx-auto`}>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
										<button className={`secondary-btn-light capitalize mt-[44px] lg:mt-[16px] lg:mx-0 w-fit mx-auto`}>about us</button>
								</div>
						</Container>
						<Container className={`py-24 lg:flex flex-row gap-[clamp(40px,calc(40px+90*((100vw-900px)/540)),130px)] items-center`}>
								<img className={`rounded-lg mb-[48px] lg:mb-0 max-w-[380px] w-full mx-auto shadow-2xl shadow-secondary-500/40 lg:mx-0`} src={codeSnippet} alt={`code-snippet`} />
								<div className={`text-center lg:text-left grid gap-4 lg:gap-2 h-fit`}>
										<h2 className={`heading-two text-secondary-500`}>Easy to implement</h2>
										<p className={`opacity-[0.8] text-secondary-300 leading-[186%] max-w-[550px] lg:max-w-[418px] mx-auto`}>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
								</div>
						</Container>
						<Container
								className={`pb-24 lg:flex flex-row-reverse gap-[clamp(40px,calc(40px+90*((100vw-900px)/540)),130px)] items-center relative`}>
								<div className={`hero-circle-three z-10 hidden lg:block`}></div>
								<div className={`flex gap-5 mb-[48px] lg:mb-0 mx-auto w-fit relative z-10`}>
										<img className={`iphone-mockup`} src={iphoneMockup2} alt={`code-snippet`}/>
										<img className={`iphone-mockup`} src={iphoneMockup3} alt={`code-snippet`}/>
								</div>
								<div className={`text-center lg:text-left grid gap-4 lg:gap-2 h-fit mr-auto`}>
										<h2 className={`heading-two text-secondary-500`}>Simple UI & UX</h2>
										<p className={`opacity-[0.8] text-secondary-300 leading-[186%] max-w-[550px] lg:max-w-[418px] mx-auto`}>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.</p>
								</div>
						</Container>
						<Footer />
				</main>
		)
}
