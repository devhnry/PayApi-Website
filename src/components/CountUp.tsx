import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface CountUpProps {
		from?: number;
		to: number;
		duration?: number;
}

export function CountUp({ from = 0, to, duration = 2 }: CountUpProps) {
		const count = useMotionValue(from);

		const rounded = useTransform(count, (latest) => Math.floor(latest));

		useEffect(() => {
				const controls = animate(from, to, {
						duration,
						onUpdate: (value) => {
								count.set(value);
						},
				});

				return controls.stop;
		}, [from, to, duration, count]);

		return <motion.span>{rounded}</motion.span>;
}
