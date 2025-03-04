import {NavBar} from "../components/NavBar.tsx";
import {Container} from "../components/Container.tsx";
import iphoneMockup from "../assets/images/IphoneMockup.svg"


export const Home = () => {
		return (
				<>
						<NavBar />
						<Container className={`flex flex-col items-center gap-6 py-8`}>
								<img className={`bg-transparent rounded-[20px] w-[128px] h-[240px]`} src={iphoneMockup} alt={'mockup'} />
								<div className={`grid`}>
										<h1 className={`text-center text-[min(10vw,32px)] leading-[112%] mb-[24px]`}>
												Start building with our APIs for absolutely free</h1>
										<div className={`flex flex-col gap-4`}>
												<input className={`primary-input`} type={"email"} placeholder={"Enter email address"}/>
												<button className={`primary-btn`}>Schedule a Demo</button>
										</div>
								</div>
								<p className={`text-secondary-300`}>Have any questions ? <span className={`font-bold`}>Contact Us</span> </p>
						</Container>
				</>
		)
}
