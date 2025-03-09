export interface PricingProps{
		title: string;
		description: string;
		price: number;
		features: { check: boolean, value: string }[],
}

export const plans: PricingProps[] = [
		{
				title: "Free Plan",
				description: "Build and test using our core set of products with up to 100 API requests.",
				price: 0.00,
				features: [
						{ check: true, value: "Transactions" },
						{ check: true, value: "Auth" },
						{ check: true, value: "Identity" },
						{ check: false, value: "Investments" },
						{ check: false, value: "Assets" },
						{ check: false, value: "Liabilities" },
						{ check: false, value: "Income" },
				],
		},
		{
				title: "Basic Plan",
				description: "Launch your project with unlimited requests and no contractual minimums.",
				price: 249.00,
				features: [
						{ check: true, value: "Transactions" },
						{ check: true, value: "Auth" },
						{ check: true, value: "Identity" },
						{ check: true, value: "Investments" },
						{ check: true, value: "Assets" },
						{ check: false, value: "Liabilities" },
						{ check: false, value: "Income" },
				],
		},
		{
				title: "Premium Plan",
				description: "Get tailored solutions, volume pricing, and dedicated support for your team.",
				price: 499.00,
				features: [
						{ check: true, value: "Transactions" },
						{ check: true, value: "Auth" },
						{ check: true, value: "Identity" },
						{ check: true, value: "Investments" },
						{ check: true, value: "Assets" },
						{ check: true, value: "Liabilities" },
						{ check: true, value: "Income" },
				],
		},
];