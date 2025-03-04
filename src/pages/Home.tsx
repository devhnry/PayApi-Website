import {NavBar} from "../components/NavBar.tsx";
import {Container} from "../components/Container.tsx";
import iphoneMockup from "../assets/images/IphoneMockup.svg"


export const Home = () => {
		return (
				<main className={`relative overflow-x-hidden`}>
						<NavBar />
						<Container className={`flex flex-col items-center gap-6 py-8 lg:py-20`}>
								<div className={`hero-circle`}></div>
								<div className={`lg:flex flex-row-reverse mx-auto w-full items-center gap-10`}>
										<img className={`hero-image mb-[clamp(24px,calc(24px+16*((100vw-375px)/393)),40px)] lg:mb-0 lg:h-[460px] lg:w-[240px] lg:rounded-[33px]`} src={iphoneMockup} alt={'mockup'}/>
										<div>
												<div className={`grid w-full`}>
														<h1 className={`text-center lg:text-left heading-one leading-[112%] lg:leading-[100%] mb-[24px]`}>
																Start building with our APIs for absolutely free.</h1>
														<div className={`flex flex-col gap-4 xs:relative xs:max-w-[455px] mx-auto lg:mx-0 w-full`}>
																<input className={`primary-input`} type={"email"} placeholder={"Enter email address"}/>
																<button className={`primary-btn xs:absolute xs:right-0`}>Schedule a Demo</button>
														</div>
												</div>
												<p className={`text-secondary-300 text-center lg:text-left pl-2 pt-4`}>Have any questions ? <span
														className={`font-bold`}>Contact Us</span></p>
										</div>
								</div>
						</Container>
				</main>
		)
}
