import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {formSchema} from "../store/formStore.ts";
import {InputComponent, inputValue} from "./InputComponent.tsx";

import check from "../assets/icons/check.svg"

export const MyForm = () => {
		type FormData = z.infer<typeof formSchema>
		const methods = useForm<FormData>({ resolver: zodResolver(formSchema) });
		const { register, handleSubmit, reset, watch } = methods;
		const onSubmit = (data: FieldValues) => {
				reset()
				console.log(data)
		}
		const isSubscribed = watch("subscribed", false);

		const fields = [
				{ field: "name", placeholder: "name" },
				{ field: "email", placeholder: "email address" },
				{ field: "title", placeholder: "title" },
				{ field: "company", placeholder: "company name" },
				{ field: "message", placeholder: "message" }
		]

		return ((
				<FormProvider {...methods} >
						<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-[500px] mx-auto lg:mx-0 w-full">
								{fields.map((field) => (
										<InputComponent key={field.field} value={field.field as inputValue} placeholder={field.placeholder} />
								))}
								<div className={`grid grid-cols-[24px_1fr] gap-4 items-center`}>
										<div className={`relative bg-secondary-500/50 h-[24px]`}>
												<input
														{...register("subscribed")}
														className={`rounded-none w-[24px] h-[24px] indeterminate:bg-secondary-500/50 checked:bg-primary-400 appearance-none cursor-pointer`}
														type="checkbox">
												</input>
												{isSubscribed && (
														<img
																className="absolute pointer-events-none top-[50%] left-[50%] -translate-y-[50%] -translate-x-1/2"
																src={check}
																alt=""
														/>
												)}
										</div>
										<label className={`text-left text-[15px] leading-[125%] opacity-[0.75]`}>Stay up-to-date with company announcements
																																							and updates to our API</label>
								</div>
								<button type="submit" className="secondary-btn-dark w-fit">Submit</button>
						</form>
				</FormProvider>
		));
}
