import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useMemo } from "react";
import Header from "./Elements/header";
import MainDrawer from "./Elements/MainDrawer";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "./App/store/hook";

const ThemedApp = () => {
    const mode = useAppSelector((state) => state.todo.theme);

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode,
            },
        });
    }, [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <MainDrawer />
            <Outlet />
        </ThemeProvider>
    );
};

export default ThemedApp;
