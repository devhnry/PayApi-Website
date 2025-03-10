import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import Pricing from "./pages/Pricing.tsx";
import {About} from "./pages/About.tsx";
import {Contact} from "./pages/Contact.tsx"; // Ensure correct import

export const router = createBrowserRouter([
		{
				path: "/",
				element: <Home />
		},
		{
				path: "/pricing",
				element: <Pricing />
		},
		{
				path: "/about",
				element: <About />
		},
		{
				path: "/contact",
				element: <Contact />
		}
]);
