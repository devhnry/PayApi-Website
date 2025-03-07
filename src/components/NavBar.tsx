import {Container} from "./Container.tsx";
import logo from "../assets/icons/logo.svg"


export const NavBar = () => {
		const navItems: string[] = ["pricing", "about", "contact"]

		return (
				<Container className={`pt-6`}>
						<nav className="flex justify-between md:gap-[64px] md:justify-start items-center w-full">
								<img src={logo} alt={`logo`}/>
								<div className={`flex flex-col items-center gap-1 md:hidden`}>
										{[1,2,3].map(i => (
												<div key={i} className={`bg-secondary-700 h-[3px] rounded-sm w-[28px]`}></div>
										))}
								</div>
								<div className={`hidden justify-between items-center md:flex w-full`}>
										<div className={`flex gap-10 capitalize font-bold opacity-70 hover:opacity-100`}>
												{navItems.map((item: string) => (
														<p key={item}>{item}</p>
												))}
										</div>
										<button className={`primary-btn inline-block`}>Schedule a demo</button>
								</div>
						</nav>
				</Container>
		)
}
