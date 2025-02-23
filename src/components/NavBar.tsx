import {Container} from "./Container.tsx";
import logo from "../assets/icons/logo.svg"


export const NavBar = () => {
		return (
				<Container className={`pt-6`}>
						<nav className="flex justify-between items-center">
								<img src={logo} alt={`logo`}/>
								<div className={`flex flex-col items-center gap-1`}>
										{[1,2,3].map(i => (
												<div key={i} className={`bg-secondary-700 h-[3px] rounded-sm w-[28px]`}></div>
										))}
								</div>
						</nav>
				</Container>
		)
}
