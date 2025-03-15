import {FC} from 'react'
import { motion as m} from "framer-motion"
import {useLocation} from "react-router";

interface Props {
		heading: string,
		content: string,
}

// Container variants control the stagger timing
const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
				opacity: 1,
				transition: {
						// Stagger each child by 0.2s
						staggerChildren: 0.2,
				},
		},
};

// Item variants for headings/paragraphs
const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
				opacity: 1,
				y: 0,
				transition: { duration: 0.6, ease: "easeOut" },
		},
};


export const ContentBlock: FC<Props> = ({heading, content}) => {
		const location = useLocation();

		return (
				<m.div key={location.pathname} initial="hidden"
							 whileInView="visible"
							 viewport={{ once: false, amount: 0.2 }} variants={containerVariants} className={`grid w-full gap-y-4 md:grid-cols-[230px_1fr]`}>
						<m.h3  variants={itemVariants} className={`heading-three whitespace-nowrap md:-mt-1`}>{heading}</m.h3>
						<m.p variants={itemVariants} className={`opacity-[0.75] md:text-[17px]`}>{content}</m.p>
				</m.div>
		)
}
