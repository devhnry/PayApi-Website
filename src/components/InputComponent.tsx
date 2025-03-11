import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface InputComponentProps {
		value: inputValue;
		placeholder?: string;
		type?: string;
}

export type inputValue = "message" | "name" | "email" | "title" | "company";

export const InputComponent: FC<InputComponentProps> = ({value, placeholder, type = "text"}) => {
		const {register, formState: { errors }} = useFormContext();
		const isMessageField = value === "message";

		return (
				<div className="grid">
						<label htmlFor={value} className="sr-only">
								{value}
						</label>

						{isMessageField ? (
								<textarea
										{...register(value, { required: true, minLength: 3 })}
										id={value}
										placeholder={placeholder || value}
										className={`
            border-b p-4 pb-15 placeholder:capitalize outline-none resize-none
            whitespace-pre-wrap break-words
            ${errors[value] ? "border-[#f00]/65 placeholder:text-[#f00]/60" : "border-secondary-500/50"}
          `}
								/>
						) : (
								<input
										{...register(value, { required: true, minLength: 3 })}
										id={value}
										type={type}
										placeholder={placeholder || value}
										className={`
            border-b p-4 placeholder:capitalize outline-none whitespace-pre-wrap break-words
            ${errors[value] ? "border-[#f00]/65 placeholder:text-[#f00]/60" : "border-secondary-500/50"}
          `}
								/>
						)}
						{errors[value] && (
								<p className="text-[#f00]/65 text-[11px] text-left px-4">
										{errors[value]?.message as string}
								</p>
						)}
				</div>
		);
};