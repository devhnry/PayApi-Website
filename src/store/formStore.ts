import { create } from "zustand";

interface FormState {
		name: string;
		email: string;
		company: string;
		title: string;
		message: string;
		subscribe: boolean; // For the checkbox

		// Actions to update fields and reset the form
		setField: (field: keyof Omit<FormState, "setField" | "resetForm">, value: string | boolean) => void;
		resetForm: () => void;
}

export const useFormStore = create<FormState>((set) => ({
		// Initial state
		name: "",
		email: "",
		company: "",
		title: "",
		message: "",
		subscribe: false,

		// Action to update any field
		setField: (field, value) => set({ [field]: value }),

		// Action to reset form to initial state
		resetForm: () =>
				set({
						name: "",
						email: "",
						company: "",
						title: "",
						message: "",
						subscribe: false,
				}),
}));
