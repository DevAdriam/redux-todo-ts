import React from "react";
import ReactDOM from "react-dom/client";

import { Outlet, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { router } from "./Routes/Route.js";
import { store } from "./App/store/store.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <Outlet />
        </Provider>
    </React.StrictMode>
);
