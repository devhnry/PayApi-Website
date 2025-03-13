import { motion as m } from 'framer-motion';

export const EmailDemoForm = () => {
		return (
				<m.div initial={{y: 20, opacity: 0.35}} viewport={{once: true}} whileInView={{y: 0, opacity: 1, transition: { duration: 0.4 } }} className={`flex flex-col gap-4 xs:relative xs:max-w-[455px] mx-auto lg:mx-0 w-full z-20`}>
						<input className={`primary-input`} type={"email"} placeholder={"Enter email address"}/>
						<button className={`primary-btn xs:absolute xs:right-0`}>Schedule a Demo</button>
				</m.div>
		)
}