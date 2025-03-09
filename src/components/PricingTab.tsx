import checkMark from "../assets/icons/check.svg"
import {FC} from "react";
import {PricingProps} from "../data/pricingData.ts";

export const PricingTab: FC<PricingProps> = ({title, price, features, description}) => {
		return (
				<div className={`py-[50px] text-center flex flex-col w-full 2lg:text-left`}>
						<h3 className={`mb-15 md:mb-4 heading-three text-primary-400 capitalize`}>{title}</h3>
						<p className={`text-secondary-500 opacity-[0.7] hidden md:inline-block h-[90px]`}>{description}</p>
						<h1 className={`text-[56px] text-secondary-500`}>${price}.00</h1>
						<hr className={`py-4 opacity-[0.25] text-secondary-500 max-w-[325px] w-full mx-auto`}/>
						<div className={`flex flex-col gap-y-2 mx-auto 2lg:mx-0`}>
								{
										features.map(({check, value}) => (
												<div key={value} className={`flex gap-6 text-secondary-500 pb-2`}>
														{check ? <img src={checkMark} alt={``}/> : <img className={`opacity-0`} src={checkMark} alt={``}/>}
														{check ? <p>{value}</p> : <p className={`opacity-[0.5]`}>{value}</p>}
												</div>
										))
								}
						</div>
						<hr className={`py-3 opacity-[0.25] text-secondary-500 max-w-[325px] w-full mx-auto`}/>
						<button className={`secondary-btn-dark w-fit mx-auto 2lg:mx-0`}>Request Access</button>
				</div>
		)
}
