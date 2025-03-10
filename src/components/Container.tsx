import React, {ReactNode} from 'react'

interface ContainerProps {
		children: ReactNode;
		className?: string;
		maxWidth?: number;
}

export const Container: React.FC<ContainerProps> = ({children, className, maxWidth}) => {
		return (
				<section style={{ maxWidth: maxWidth ? `${maxWidth}px` : "1440px" }} className={`container-box ${className}`}>
						{children}
				</section>
		)
}
