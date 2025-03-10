import {FC} from 'react'
interface Props {
		heading: string,
		content: string,
}

export const ContentBlock: FC<Props> = ({heading, content}) => {
		return (
				<div className={`grid w-full gap-y-4 md:grid-cols-[230px_1fr]`}>
						<h3 className={`heading-three whitespace-nowrap md:-mt-1`}>{heading}</h3>
						<p className={`opacity-[0.75] md:text-[17px]`}>{content}</p>
				</div>
		)
}
