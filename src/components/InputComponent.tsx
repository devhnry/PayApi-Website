import {FC} from "react";

interface InputComponentProps {
		placeholder?: string;
		value?: string;
		type?: string;
		onChange?: (value: string) => void;
}

export const InputComponent: FC<InputComponentProps> = ({placeholder, value, type }) => {
		return (
				<>
						<label className={`sr-only`} htmlFor={value}>{value}</label>
						<input className={`border-b w-full p-4 placeholder:capitalize font-light outline-none focus-none`} type={type} placeholder={placeholder} value={value} />
				</>
		)
}
