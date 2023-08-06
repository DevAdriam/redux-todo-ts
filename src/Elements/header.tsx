import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Badge,
    IconButton,
    Tooltip,
    Menu,
    MenuItem,
} from "@mui/material";
import { useState } from "react";

import {
    Menu as MenuIcon,
    MoreVert as MoreVertIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { changeTheme, clear, toggleDrawer } from "../Features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../App/store/hook";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const tasks = useAppSelector((state) => state.todo.tasks);
    const count = tasks.filter((task) => !task.done).length;
    const mode = useAppSelector((state) => state.todo.theme);

    const dispatch = useDispatch();

    return (
        <Box sx={{ flexGrow: 1, mb: 3 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton
                            sx={{ mx: 3 }}
                            onClick={useAppDispatch(toggleDrawer())}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Badge
                            badgeContent={count}
                            color="error"
                            sx={{ mr: 2 }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                News
                            </Typography>
                        </Badge>
                    </Box>

                    <Button color="inherit">Login</Button>
                    {mode === "light" ? (
                        <Tooltip title="darkmode">
                            <IconButton
                                onClick={() => dispatch(changeTheme("dark"))}
                            >
                                <DarkModeIcon />
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <Tooltip title="lightmode">
                            <IconButton
                                onClick={() => dispatch(changeTheme("light"))}
                            >
                                <LightModeIcon />
                            </IconButton>
                        </Tooltip>
                    )}

                    {/* Morevertical icon */}
                    <IconButton onClick={(e) => setShowMenu(e.currentTarget)}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        anchorEl={showMenu}
                        open={Boolean(showMenu)}
                        onClose={() => setShowMenu(false)}
                    >
                        <MenuItem
                            onClick={() => {
                                setShowMenu(false);
                                useAppDispatch(clear());
                            }}
                            sx={{ width: 150 }}
                        >
                            Clear
                        </MenuItem>
                    </Menu>
                    {/******/}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
