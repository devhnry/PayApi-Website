import React, {ReactNode} from 'react'

interface ContainerProps {
		children: ReactNode;
		className?: string;
}

export const Container: React.FC<ContainerProps> = ({children, className}) => {
		return (
				<section className={`container-box ${className}`}>
						{children}
				</section>
		)
}
