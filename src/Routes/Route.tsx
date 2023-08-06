import { createBrowserRouter } from "react-router-dom";
import ThemedApp from "../ThemedApp";
import About from "../Elements/About";
import Contact from "../Elements/Contact";
import App from "../App";
import Profile from "../Elements/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ThemedApp />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);
