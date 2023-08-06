import {
    Avatar,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    Person as PersonIcon,
    Home as HomeIcon,
    AccountCircle as AccountCircleIcon,
    Mail as MailIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toggleDrawer } from "../Features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../App/store/hook";
const MainDrawer = () => {
    const showDrawer = useAppSelector((state) => state.todo.showDrawer);
    return (
        <div>
            <Drawer
                anchor="left"
                open={showDrawer}
                onClose={() => useAppDispatch(toggleDrawer())}
            >
                <Box sx={{ width: 250 }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: 160,
                            background: "pink",
                            display: "flex",
                            alignItems: "end",
                        }}
                    >
                        <Avatar sx={{ width: 58, height: 58, ml: 3, mb: -4 }}>
                            <PersonIcon />
                        </Avatar>
                    </Box>

                    <List sx={{ mt: 7, width: 250 }}>
                        <ListItem>
                            <Link to="/">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/about">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="About" />
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link to="/profile">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Account" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
};

export default MainDrawer;
