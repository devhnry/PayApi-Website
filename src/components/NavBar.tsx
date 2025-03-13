import {Container} from "./Container.tsx";
import logo from "../assets/icons/logo.svg"
import {FC} from "react";
import {useNavigate} from "react-router";
interface Props{
		activeCircle?: boolean
}

import { motion as  m } from "motion/react"

export const NavBar: FC<Props> = ({activeCircle}) => {
		const navItems: string[] = ["pricing", "about", "contact"]
		const navigate = useNavigate();

		return (
				<Container className={`pt-6 relative`}>
						{activeCircle && <div className={`navbar-circle`}></div>}
						<m.nav initial={{opacity: 0}}
									 animate={{opacity: 1, transition: {
											 duration: 0.4,
													 ease: "easeIn"
									 }}}
									 className="flex justify-between md:gap-[64px] md:justify-start items-center w-full">
										<img className={`cursor-pointer`} onClick={() => navigate('/')} src={logo} alt={`logo`}/>
								<div className={`flex flex-col items-center gap-1 md:hidden`}>
										{[1, 2, 3].map(i => (
												<m.div initial={{opacity: 0, x: 10}}
															 animate={{opacity: 1, x: 0, transition: {
																			 duration: 0.4,
																			 delay: i * 0.1 + 0.2
																	 }}} key={i} className={`bg-secondary-700 h-[3px] rounded-sm w-[28px]`}></m.div>
										))}
								</div>
								<div className={`hidden justify-between items-center md:flex w-full`}>
										<div className={`flex gap-10 capitalize font-bold text-secondary-500 *:cursor-pointer`}>
												{navItems.map((item: string, i: number) => (
														<m.p initial={{opacity: 0, y: 13}}
																 // whileHover={{ opacity: 1 }}
																 animate={{opacity: 0.7, y: 0, transition: {
																				 duration: 0.4,
																				 delay: i * 0.15 + 0.4
																		 }}} onClick={() => navigate(`/${item}`)} className={`hover:opacity-1`} key={item}>{item}</m.p>
												))}
										</div>
										<m.button initial={{opacity: 0,}}
														animate={{opacity: 1, transition: {
																		duration: 0.7,
																		ease: "easeInOut",
																		delay: 0.35
																}}} className={`primary-btn `}>Schedule a demo</m.button>
								</div>
						</m.nav>
				</Container>
		)
}
