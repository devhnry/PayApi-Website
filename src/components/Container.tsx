import React, {ReactNode} from 'react'

interface ContainerProps {
		children: ReactNode;
		ref?: React.Ref<HTMLElement>;
		className?: string;
		maxWidth?: number;
}

export const Container: React.FC<ContainerProps> = ({children, className, maxWidth, ref}) => {
		return (
				<section ref={ref} style={{ maxWidth: maxWidth ? `${maxWidth}px` : "1440px" }} className={`container-box ${className}`}>
						{children}
				</section>
		)
}
