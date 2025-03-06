export const EmailDemoForm = () => {
		return (
				<div className={`flex flex-col gap-4 xs:relative xs:max-w-[455px] mx-auto lg:mx-0 w-full z-20`}>
						<input className={`primary-input`} type={"email"} placeholder={"Enter email address"}/>
						<button className={`primary-btn xs:absolute xs:right-0`}>Schedule a Demo</button>
				</div>
		)
}