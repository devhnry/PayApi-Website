import z from "zod";

export const formSchema = z.object({
		name: z.string({
				required_error: "This field is required",
				invalid_type_error: "Name must be a string"
		}).min(3, {message: "This field can't be empty"}),

		email: z.string({
				required_error: "This field is required",
				invalid_type_error: "Email must be a string"}
		).email({ message: "This field can't be empty" }),

		title: z.string(),

		company: z.string({
				required_error: "This field is required"})
				.min(3, {message: "This field can't be empty"}),

		message: z.string({
				required_error: "This field is required",})
				.min(3, {message: "This field can't be empty"}),

		subscribed: z.boolean()
})