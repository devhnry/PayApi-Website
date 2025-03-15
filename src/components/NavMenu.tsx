// import NavigationStore from "../store/NavigationStore.tsx";
import {motion as m} from "framer-motion";
import NavigationStore from "../store/NavigationStore.tsx";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export const NavMenu= () => {
		const {menuIsOpen, setCenterAligned, setMenuIsOpen} = NavigationStore()
		const navItems: string[] = ["pricing", "about", "contact"]
		const navigate = useNavigate()

		useEffect(() => {
				const handleResize = () => {
						if (window.innerWidth >= 768) {
								if (menuIsOpen) {
										setMenuIsOpen(false);
										setCenterAligned(false);
										document.body.style.overflow = "auto";
								}
						}
				};

				// Add resize event listener
				window.addEventListener("resize", handleResize);

				// Cleanup on component unmount
				return () => {
						window.removeEventListener("resize", handleResize);
				};
		}, [menuIsOpen, setMenuIsOpen, setCenterAligned]);

		const handleLinkClick = (to: string) => {
				setMenuIsOpen(false);
				setTimeout(() => setCenterAligned(false), 300);
				setTimeout(() => navigate(`/${to}`), 350);

				const body = document.body;
				const isLocked = body.style.overflow === "auto";
				body.style.overflow = isLocked ? "hidden" : "auto";
		}

		return (
				<m.nav
						initial={{ x: "100%", opacity: 1 }}
						animate={{ x: menuIsOpen ? "10%" : "100%",  transition: {
										duration: 0.8,
										type: "spring",
										ease: [0.76, 0, 0.24, 1]
								}}}
						className={`absolute inset-0 bg-secondary-700 z-50 max-w-[500px] w-full ml-auto`}>

						<div className={`absolute z-[100] h-fit top-[130px] left-[48px] text-primary-100 right-[80px]`}>
								<div className={`grid gap-1 w-full text-secondary-500/70 pb-14`}>
										<p className={`uppercase text-[12px] font-heading tracking-widest`}>Navigation</p>
										<hr className={`block`}/>
								</div>
								<div className={`capitalize grid gap-4 relative z-[80]`}>
										{
												navItems.map((item, i) => (
														<m.p
																whileHover={{ x: 20, transition: {
																				duration: 0.4,
																				ease: [0.76, 0, 0.24, 1]
																		} }}
																animate={{ x: menuIsOpen ? 0 : "12%",  transition: {
																				duration: 0.8,
																				delay: i * 0.1 + 0.2,
																				type: "spring",
																				ease: [0.76, 0, 0.24, 1]
																		}}}
																onClick={() => handleLinkClick(item)} className={`text-[50px] cursor-pointer font-heading tracking-wider text-primary-100/80 hover:text-primary-100/100 leading-[100%]`} key={i} >{item}</m.p>
												))
										}
										<button className={`primary-btn mt-10`}>Schedule a Demo</button>
								</div>
						</div>
				</m.nav>
		)
}
