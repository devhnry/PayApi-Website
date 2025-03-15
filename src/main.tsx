import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {router} from "./routes.tsx";
import { AnimatePresence } from "framer-motion"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AnimatePresence mode="wait">
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </AnimatePresence>
)
